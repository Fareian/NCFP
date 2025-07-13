import { useEffect, useState } from "react";

export function useFileSize(fileUrl: string) {
  const [fileSize, setFileSize] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFileSize() {
      try {
        const response = await fetch(fileUrl, { method: "HEAD" });
        const size = response.headers.get("content-length");
        if (size) setFileSize(formatBytes(Number(size)));
      } catch {
        setFileSize(null);
      }
    }
    if (fileUrl) fetchFileSize();
  }, [fileUrl]);

  return fileSize;
}

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
} 