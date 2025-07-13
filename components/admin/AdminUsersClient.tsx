"use client";
import React, { useState } from "react";
import UserTable from "@/components/admin/UserTable";
import SearchInput from "@/components/admin/SearchInput";

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

const PAGE_SIZE = 8;

export default function AdminUsersClient({ users }: { users: User[] }) {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState<"name" | "role">("name");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  // Filtering
  let filtered = users.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase());
    const matchesRole = role === "All" || user.role === role;
    const matchesStatus = status === "All" || user.status === status;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Sorting
  filtered = filtered.sort((a, b) => {
    const aVal = a[sortBy].toLowerCase();
    const bVal = b[sortBy].toLowerCase();
    if (aVal < bVal) return sortAsc ? -1 : 1;
    if (aVal > bVal) return sortAsc ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>
      <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
        <div className="flex flex-wrap gap-4 items-center">
          <SearchInput
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search by name, email or role"
          />
          <select
            value={role}
            onChange={e => { setRole(e.target.value); setPage(1); }}
            className="border rounded-full px-4 py-2 text-sm bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
          >
            <option value="All">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="USER">User</option>
          </select>
          <select
            value={status}
            onChange={e => { setStatus(e.target.value); setPage(1); }}
            className="border rounded-full px-4 py-2 text-sm bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="APPROVED">Active</option>
            <option value="PENDING">Pending</option>
            <option value="REJECTED">Inactive</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            className={`px-3 py-2 rounded-full border text-sm font-medium flex items-center gap-1 transition ${sortBy === "name" ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-white border-gray-300 text-gray-500"}`}
            onClick={() => {
              setSortBy("name");
              setSortAsc(sortBy === "name" ? !sortAsc : true);
            }}
          >
            Name {sortBy === "name" && (sortAsc ? "▲" : "▼")}
          </button>
          <button
            className={`px-3 py-2 rounded-full border text-sm font-medium flex items-center gap-1 transition ${sortBy === "role" ? "bg-blue-100 border-blue-300 text-blue-700" : "bg-white border-gray-300 text-gray-500"}`}
            onClick={() => {
              setSortBy("role");
              setSortAsc(sortBy === "role" ? !sortAsc : true);
            }}
          >
            Role {sortBy === "role" && (sortAsc ? "▲" : "▼")}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <UserTable users={paginated} />
      </div>
      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-6">
        <button
          className="px-3 py-1 rounded border bg-white text-gray-500 hover:bg-blue-50 disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 rounded border bg-white text-gray-500 hover:bg-blue-50 disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
} 