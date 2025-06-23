import { hash } from "bcryptjs";
import { config } from "dotenv";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

// Load environment variables
config({ path: ".env.local" });

const createTestUser = async () => {
  try {
    const hashedPassword = await hash("password123", 10);
    
    await db.insert(users).values({
      id: "test-user-1",
      fullName: "Test User",
      email: "test@example.com",
      password: hashedPassword,
      status: "APPROVED",
      role: "USER",
    });

    console.log("Test user created successfully!");
    console.log("Email: test@example.com");
    console.log("Password: password123");
  } catch (error) {
    console.error("Error creating test user:", error);
  }
};

createTestUser(); 