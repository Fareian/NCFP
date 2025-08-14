"use client";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { useFileSize } from "@/hooks/useFileSize";
import { useRef } from "react";

interface DownloadButtonProps {
  bookId: string;
  fileUrl: string;
  fileType?: string;
}

export default function DownloadButton({ bookId, fileUrl, fileType }: DownloadButtonProps) {
  const fileSize = useFileSize(fileUrl);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    toast({ title: "Download started", description: "Your book is downloading." });
    try {
      const response = await fetch(`/api/download/${bookId}`);
      if (!response.ok) {
        toast({ title: "Download failed", description: "Could not download the file." });
        return;
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "book.pdf"); // Optionally set a better filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast({ title: "Download failed", description: "An error occurred." });
    }
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