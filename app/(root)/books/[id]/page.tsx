import React from "react";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import BookOverview from "@/components/books/BookOverview";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  // Fetch data based on id
  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1);

  if (!bookDetails) redirect("/404");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white px-2 md:px-0">
      <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-8">
        <BookOverview {...bookDetails} userId={session?.user?.id as string} />
      </section>
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="book-details">
          <div className="flex-[1.5] p-6 bg-white/90 rounded-xl shadow text-dark-100">
            <section className="flex flex-col gap-7">
              <h3 className="text-blue-900">Video</h3>
            </section>
            <section className="mt-10 flex flex-col gap-7">
              <h3 className="text-blue-900">Summary</h3>
              <div className="space-y-5 text-xl text-dark-100">
                {bookDetails.summary.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </section>
          </div>
          {/*  SIMILAR*/}
        </div>
      </section>
    </div>
  );
};
export default Page;