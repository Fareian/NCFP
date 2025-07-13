import React from "react";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DownloadButton from "@/components/books/DownloadButton";

const BookCard = ({
  id,
  title,
  author,
  category,
  coverColor,
  coverUrl,
  fileUrl,
  isLoanedBook = false,
}: Book) => (
  <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
    <Link
      href={`/books/${id}`}
      className={cn(isLoanedBook && "w-full flex flex-col items-center")}
    >
      <BookCover coverColor={coverColor} coverImage={coverUrl} />
      <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
        <p className="book-title">{title}</p>
        <p className="book-category">{category}</p>
      </div>

      {/* Download Book Button/Icon */}
      <DownloadButton bookName={title} bookAuthor={author} fileUrl={fileUrl} fileType="PDF" />
    </Link>
  </li>
);  

export default BookCard;
