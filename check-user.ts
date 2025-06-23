import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

async function checkUser() {
  try {
    console.log("Checking users in database...");
    
    // Get all users
    const allUsers = await db.select().from(users);
    console.log("Total users found:", allUsers.length);
    
    allUsers.forEach((user, index) => {
      console.log(`\nUser ${index + 1}:`);
      console.log("ID:", user.id);
      console.log("Full Name:", user.fullName);
      console.log("Email:", user.email);
      console.log("Status:", user.status);
      console.log("Role:", user.role);
      console.log("Created At:", user.createdAt);
    });
    
    return allUsers;
  } catch (error) {
    console.error("Error checking users:", error);
    return null;
  }
}

checkUser(); 