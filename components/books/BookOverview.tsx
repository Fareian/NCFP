import React from "react";
import Image from "next/image";
import BookCover from "@/components/BookCover";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import DownloadButton from "@/components/books/DownloadButton";

interface Props extends Book {
  userId: string;
}
const BookOverview = async ({
  title,
  author,
  category,
  description,
  coverColor,
  coverUrl,
  id,
  userId,
  fileUrl,
}: Props) => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const borrowingEligibility = {
    isEligible: user?.status === "APPROVED",
    message:
      user?.status !== "APPROVED"
        ? "You are not eligible to borrow this book"
        : "Book is not available",
  };
  return (
    <section className="book-overview flex gap-5">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-3xl font-bold text-blue-900">{title}</h1>

        <div className="book-info">
          <p className="text-gray-800">
            By <span className="font-semibold text-blue-900">{author}</span>
          </p>

          <p className="text-gray-800">
            Category{" "}
            <span className="font-semibold text-blue-900">{category}</span>
          </p>
        </div>

        {/* Removed rating, total books, and available books UI */}

        <p className="book-description text-gray-900">{description}</p>

        <DownloadButton bookName={title} bookAuthor={author} fileUrl={fileUrl} fileType="PDF" />
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={coverColor}
            coverImage={coverUrl}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={coverColor}
              coverImage={coverUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;