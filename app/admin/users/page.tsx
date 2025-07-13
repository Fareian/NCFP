// app/admin/users/page.tsx
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import AdminUsersClient from "@/components/admin/AdminUsersClient";

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

export default async function AdminUsersPage() {
  const allUsers = await db.select().from(users);

  const usersData: User[] = allUsers.map(user => ({
    id: user.id,
    name: user.fullName,
    email: user.email,
    phone: user.phone || "",
    role: user.role ?? "",
    dateJoined: user.createdAt ? user.createdAt.toString().split("T")[0] : "",
    downloads: user.downloads ?? 0,
    lastDownload: user.lastActivityDate ? user.lastActivityDate.toString().split("T")[0] : "",
    status: user.status ?? "",
  }));

  return <AdminUsersClient users={usersData} />;
} 