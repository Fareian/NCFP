"use client";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { useFileSize } from "@/hooks/useFileSize";

interface DownloadButtonProps {
  bookName: string;
  fileUrl: string;
  fileType?: string;
  bookAuthor: string;
}

export default function DownloadButton({ bookName, bookAuthor, fileUrl, fileType }: DownloadButtonProps) {
  const fileSize = useFileSize(fileUrl);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({ title: "Download started", description: "Your book is downloading." });
    // Open the API download route in a new tab to trigger the download
    window.open(`https://ik.imagekit.io/newCreation/books/ibooks/${bookName}_${bookAuthor}.pdf`, "_blank");

  };

  return (
    <button
      type="button"
      className="flex justify-center items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md"
      onClick={handleClick}
    >
      <Image src="/icons/download.svg" alt="download" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-white">
        Download Book
        {/* {fileType && <span className="ml-2 text-xs text-gray-500">({fileType})</span>}
        {fileSize && <span className="ml-2 text-xs text-gray-400">{fileSize}</span>} */}
      </p>
    </button>
  );
} 