import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database/drizzle";
import { books, downloadLogs } from "@/database/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { randomUUID } from "crypto";

export async function GET(req: NextRequest, { params }: { params: { bookId: string } }) {
  // Require authentication
  const session = await auth();
  if (!session || !session.user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { bookId } = params;
  // Fetch the book by ID
  const [book] = await db.select().from(books).where(eq(books.id, bookId)).limit(1);
  if (!book) {
    return new NextResponse("Book not found", { status: 404 });
  }

  // Log the download
  if (!session.user.id || !book.id) {
    return new NextResponse("Invalid user or book ID", { status: 500 });
  }
  await db.insert(downloadLogs).values({
    id: randomUUID(),
    userId: String(session.user.id),
    bookId: String(book.id),
    // timestamp will default to now
  });

  // Fetch the file from ImageKit and stream it to the user
  const fileResponse = await fetch(book.fileUrl);
  if (!fileResponse.ok) {
    return new NextResponse("Failed to fetch file from ImageKit", { status: 502 });
  }

  // Extract file extension from fileUrl
  const extMatch = book.fileUrl.match(/\.([a-zA-Z0-9]+)(\?|$)/);
  const ext = extMatch ? extMatch[1] : "pdf";
  const fileName = book.title.replace(/[^a-z0-9]/gi, "_").toLowerCase() + "." + ext;
  const headers = new Headers(fileResponse.headers);
  headers.set("Content-Disposition", `attachment; filename=\"${fileName}\"`);

  return new NextResponse(fileResponse.body, {
    status: 200,
    headers,
  });
} 