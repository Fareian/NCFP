import BookList from "@/components/BookList";
import ChristianWelcome from "@/components/ChristianWelcome";
import { sampleBooks } from "@/constants";
import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { books, users } from "@/database/schema";  
import { desc } from "drizzle-orm";

const Home = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));
  const session = await auth();
  const userId = "guest"; // Temporarily hardcoded for UI testing

  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];

  return (
    <>
      <ChristianWelcome />

      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  )
};

export default Home;
