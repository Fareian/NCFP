"use client";

import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutButton from "./LogoutButton";
import React, { useState } from "react";

interface HeaderProps {
  session: Session | null;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/#articles", label: "Articles" },
  { href: "/community", label: "Community" },
];

const Header = ({ session }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy shadow-lg border-b-2 border-brand-gold py-4 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        {/* Logo: Playfair, gold, large */}
        <Link href="/" className="font-playfair text-3xl font-bold text-brand-gold flex items-center gap-2">
          <span className="text-2xl">📚</span>
          NCFP
        </Link>
        {/* Desktop Navigation: Hidden on mobile */}
        <ul className="hidden md:flex space-x-10 items-center ml-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-ibm-plex-sans text-lg font-medium text-light-100 hover:text-brand-gold transition-colors duration-300 relative group px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Profile Button: 40px circular, gold border, dropdown logic preserved */}
        {session?.user ? (
          <div className="relative ml-4">
            <button
              className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-navy text-brand-gold font-semibold flex items-center justify-center border-2 border-brand-gold hover:scale-110 transition-transform duration-300 focus:outline-none"
              onClick={() => setProfileDropdownOpen((v) => !v)}
              onBlur={() => setTimeout(() => setProfileDropdownOpen(false), 150)}
            >
              {session.user.name ? getUserInitials(session.user.name) : "U"}
            </button>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-brand-gold rounded shadow-lg z-50">
                <Link href="/my-profile" className="block px-4 py-2 text-brand-navy hover:bg-brand-gold hover:text-brand-navy transition">My Profile</Link>
                <div className="border-t border-brand-gold" />
                <div className="px-4 py-2">
                  <LogoutButton />
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link href="/sign-in" className="ml-4 font-ibm-plex-sans text-lg font-medium text-brand-gold hover:text-light-100 transition">Sign In</Link>
        )}
        {/* Mobile Hamburger: Hidden on desktop, gold bars */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer ml-4" onClick={() => setMenuOpen((v) => !v)}>
          <span className="w-6 h-0.5 bg-brand-gold transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-brand-gold transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-brand-gold transition-all duration-300"></span>
        </div>
      </div>
      {/* Mobile Nav Drawer logic remains below */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 flex md:hidden" onClick={() => setMenuOpen(false)}>
          <nav
            className="bg-brand-navy w-64 h-full shadow-lg flex flex-col gap-6 p-6 pt-10 relative border-r-2 border-brand-gold"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-brand-gold/10"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-ibm-plex-sans text-lg font-medium text-light-100 hover:text-brand-gold transition-colors duration-300 relative group px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold" onClick={() => setMenuOpen(false)}>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            {session?.user ? (
              <div className="relative mt-4">
                <button
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-navy text-brand-gold font-semibold flex items-center justify-center border-2 border-brand-gold hover:scale-110 transition-transform duration-300 focus:outline-none"
                  onClick={() => setProfileDropdownOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setProfileDropdownOpen(false), 150)}
                >
                  {session.user.name ? getUserInitials(session.user.name) : "U"}
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-brand-gold rounded shadow-lg z-50">
                    <Link href="/my-profile" className="block px-4 py-2 text-brand-navy hover:bg-brand-gold hover:text-brand-navy transition">My Profile</Link>
                    <div className="border-t border-brand-gold" />
                    <div className="px-4 py-2">
                      <LogoutButton />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/sign-in" className="mt-4 font-ibm-plex-sans text-lg font-medium text-brand-gold hover:text-light-100 transition">Sign In</Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
