import React from "react";
import StatusBadge from "./StatusBadge";
import RoleTag from "./RoleTag";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  dateJoined: string;
  downloads: number;
  lastDownload: string;
  status: string;
}

export default function UserRow({ user }: { user: User }) {
  return (
    <tr className="border-b last:border-0 hover:bg-blue-50/40 transition">
      <td className="py-3 px-4 font-medium whitespace-nowrap">{user.name}</td>
      <td className="py-3 px-4 whitespace-nowrap">{user.email}</td>
      <td className="py-3 px-4 whitespace-nowrap">{user.phone}</td>
      <td className="py-3 px-4 whitespace-nowrap"><RoleTag role={user.role} /></td>
      <td className="py-3 px-4 whitespace-nowrap">{user.dateJoined}</td>
      <td className="py-3 px-4 text-center whitespace-nowrap">{user.downloads}</td>
      <td className="py-3 px-4 whitespace-nowrap">{user.lastDownload}</td>
      <td className="py-3 px-4 whitespace-nowrap"><StatusBadge status={user.status} /></td>
      <td className="py-3 px-4 text-center">
        <div className="flex gap-2 justify-center">
          <button
            className="p-2 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            aria-label="View User"
            title="View User"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M12 5c-7 0-9 7-9 7s2 7 9 7 9-7 9-7-2-7-9-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
          </button>
          <button
            className="p-2 rounded-full hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition"
            aria-label="Edit User"
            title="Edit User"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M16.475 5.408a2.1 2.1 0 0 1 2.97 2.97l-9.193 9.192a2 2 0 0 1-.707.464l-3.11 1.037a.5.5 0 0 1-.633-.633l1.037-3.11a2 2 0 0 1 .464-.707l9.192-9.193Z" />
            </svg>
          </button>
          <button
            className="p-2 rounded-full hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200 transition"
            aria-label="Delete User"
            title="Delete User"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M6 7h12M9 7V5a3 3 0 0 1 6 0v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h12Z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
} 