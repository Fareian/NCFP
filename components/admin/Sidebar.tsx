"use client";

import Image from "next/image";
import { adminSideBarLinks } from "@/constants";
import Link from "next/link";
import { cn, getInitials } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";
import React, { useState } from "react";

const Sidebar = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-full bg-white shadow border border-gray-200"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Overlay for mobile sidebar */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={
          cn(
            "fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-lg flex flex-col justify-between transition-transform duration-200 md:relative md:translate-x-0 md:w-64 md:block",
            open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )
        }
      >
        <div>
          <div className="flex items-center gap-2 px-6 py-4 border-b">
            <Image
              src="/icons/admin/logo2.svg"
              alt="logo"
              height={40}
              width={40}
            />
            <h1 className="font-bold text-lg">NCFP</h1>
            {/* Close button for mobile */}
            <button
              className="ml-auto md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-2 px-2">
            {adminSideBarLinks.map((link) => {
              const isSelected =
                (link.route !== "/admin" &&
                  pathname.includes(link.route) &&
                  link.route.length > 1) ||
                pathname === link.route;

              return (
                <Link href={link.route} key={link.route} onClick={() => setOpen(false)}>
                  <div
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition",
                      isSelected ? "bg-primary-admin shadow-sm text-white" : "hover:bg-gray-100 text-dark"
                    )}
                  >
                    <div className="relative size-5">
                      <Image
                        src={link.img}
                        alt="icon"
                        fill
                        className={`${isSelected ? "brightness-0 invert" : ""}  object-contain`}
                      />
                    </div>
                    <p>{link.text}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3 px-6 py-4 border-t">
          <Avatar>
            <AvatarFallback className="bg-amber-100">
              {getInitials(session?.user?.name || "IN")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col max-md:hidden">
            <p className="font-semibold text-dark-200">{session?.user?.name}</p>
            <p className="text-xs text-light-500">{session?.user?.email}</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
