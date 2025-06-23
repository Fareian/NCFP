import React from "react";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import BookOverview from "@/components/BookOverview";
import BookVideo from "@/components/BookVideo";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  // const session = await auth();

  // Mock book data for UI
  const bookDetails = {
    id: id,
    title: "Sample Book",
    author: "Sample Author",
    genre: "Fiction",
    rating: 4,
    coverUrl: "/images/book-cover.jpg",
    coverColor: "#E7C9A5",
    description: "A sample book description",
    totalCopies: 5,
    availableCopies: 3,
    videoUrl: "https://example.com/video",
    summary: "This is a sample book summary.\nIt has multiple lines.\nFor testing purposes.",
    // createdAt: new Date().toISOString()
  };

  // const [bookDetails] = await db
  //   .select()
  //   .from(books)
  //   .where(eq(books.id, id))
  //   .limit(1);

  // if (!bookDetails) redirect("/404");

  return (
    <>
      <BookOverview {...bookDetails} userId="1" />

      <div className="book-details">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3>Video</h3>

            <BookVideo videoUrl={bookDetails.videoUrl} />
          </section>
          <section className="mt-10 flex flex-col gap-7">
            <h3>Summary</h3>

            <div className="space-y-5 text-xl text-light-100">
              {bookDetails.summary.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        </div>

        {/*  SIMILAR*/}
      </div>
    </>
  );
};
export default Page;
