import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutButton from "./LogoutButton";

interface HeaderProps {
  session: Session | null;
}

const Header = ({ session }: HeaderProps) => {
  console.log("Header session:", session);
  console.log("Session user:", session?.user);

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        {session?.user ? (
          <>
            <li>
              <Link href="/my-profile" className="flex items-center gap-2 text-primary hover:text-primary/80">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt={session.user.name || "User"} />
                  <AvatarFallback className="bg-primary text-dark-100 text-sm font-semibold">
                    {session.user.name ? getUserInitials(session.user.name) : "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline">{session.user.name}</span>
              </Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in" className="text-primary hover:text-primary/80">
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
