import React from "react";

export default function SearchInput({ value, onChange, placeholder }: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string }) {
  return (
    <div className="relative w-full max-w-xs">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6Z"/></svg>
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search..."}
        className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none bg-white text-sm shadow-sm transition w-full"
      />
    </div>
  );
} 