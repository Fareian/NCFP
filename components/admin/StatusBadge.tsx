import React from "react";

const statusStyles: Record<string, string> = {
  APPROVED: "bg-green-100 text-green-700 border-green-200",
  ACTIVE: "bg-green-100 text-green-700 border-green-200",
  PENDING: "bg-yellow-100 text-yellow-700 border-yellow-200",
  SUSPENDED: "bg-red-100 text-red-700 border-red-200",
  REJECTED: "bg-red-100 text-red-700 border-red-200",
  INACTIVE: "bg-gray-100 text-gray-700 border-gray-200",
};

export default function StatusBadge({ status }: { status: string }) {
  const style = statusStyles[status.toUpperCase()] || "bg-gray-100 text-gray-700 border-gray-200";
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${style}`}>{status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}</span>
  );
} 