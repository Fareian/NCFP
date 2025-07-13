import { NextResponse } from "next/server";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

export async function GET() {
  // Fetch all users from the database
  const allUsers = await db.select().from(users);

  // Map/format users for the dashboard
  const formatted = allUsers.map(user => ({
    id: user.id,
    name: user.fullName,
    email: user.email,
    phone: user.phone || "",
    role: user.role,
    dateJoined: user.createdAt ? user.createdAt.toString().split("T")[0] : "",
    downloads: user.downloads ?? 0,
    lastDownload: user.lastActivityDate ? user.lastActivityDate.toString().split("T")[0] : "",
    status: user.status,
  }));

  return NextResponse.json(formatted);
} 