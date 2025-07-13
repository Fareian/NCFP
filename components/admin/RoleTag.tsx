import React from "react";

const roleStyles: Record<string, string> = {
  ADMIN: "bg-blue-100 text-blue-700 border-blue-200",
  USER: "bg-gray-100 text-gray-700 border-gray-200",
};

export default function RoleTag({ role }: { role: string }) {
  const style = roleStyles[role.toUpperCase()] || "bg-gray-100 text-gray-700 border-gray-200";
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${style}`}>{role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()}</span>
  );
} 