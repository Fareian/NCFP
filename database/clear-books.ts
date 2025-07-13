import { db } from "./drizzle";

async function clearBooks() {
  await db.delete(db._.books);
  console.log("All books deleted.");
}

clearBooks(); 