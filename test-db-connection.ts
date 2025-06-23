import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

async function testConnection() {
  try {
    console.log("Testing database connection...");
    
    // Try to select from users table
    const result = await db.select().from(users).limit(1);
    console.log("Database connection successful!");
    console.log("Users table accessible, found", result.length, "users");
    
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

testConnection(); 