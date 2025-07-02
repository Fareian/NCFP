import { hash } from "bcryptjs";
import { config } from "dotenv";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

// Load environment variables
config({ path: ".env.local" });

const createAdminUser = async () => {
  try {
    const hashedPassword = await hash("admin123", 10);
    
    await db.insert(users).values({
      id: "admin-user-1",
      fullName: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      status: "APPROVED",
      role: "ADMIN",
    });

    console.log("Admin user created successfully!");
    console.log("Email: admin@example.com");
    console.log("Password: admin123");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
};

createAdminUser(); 