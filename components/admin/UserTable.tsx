import React from "react";
import UserRow from "./UserRow";
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

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <>
      {/* Table for md+ screens */}
      <div className="hidden md:block overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-[900px] w-full text-left border-separate border-spacing-y-0.5">
          <thead className="sticky top-0 bg-white z-20 shadow-sm border-b border-gray-200">
            <tr className="text-xs text-gray-500 uppercase bg-gray-50">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone Number</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Date Joined</th>
              <th className="py-3 px-4">No of Downloads</th>
              <th className="py-3 px-4">Last Download</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-8 text-gray-400 text-sm">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map(user => (
                <UserRow key={user.id} user={user} />
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Card layout for mobile screens */}
      <div className="md:hidden space-y-4">
        {users.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-sm bg-white rounded-xl shadow-lg">
            No users found.
          </div>
        ) : (
          users.map(user => (
            <div key={user.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-lg">{user.name}</div>
                <RoleTag role={user.role} />
              </div>
              <div className="text-sm text-gray-500">{user.email}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                <div>
                  <span className="font-medium">Phone:</span> {user.phone}
                </div>
                <div>
                  <span className="font-medium">Joined:</span> {user.dateJoined}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <div>
                  <span className="font-medium">Downloads:</span> {user.downloads}
                </div>
                <div>
                  <span className="font-medium">Last Download:</span> {user.lastDownload}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <StatusBadge status={user.status} />
                <div className="flex gap-2 ml-auto">
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
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
} 