"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/sign-in" });
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 text-light-100 hover:text-white transition-colors"
    >
      <Image src="/icons/logout.svg" alt="logout" width={20} height={20} />
      <span className="hidden sm:inline">Logout</span>
    </button>
  );
};

export default LogoutButton; 