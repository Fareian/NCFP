import BookList from "@/components/BookList";
import BookOverview from "@/components/books/BookOverview";
import { db } from "@/database/drizzle";
import { books, users } from "@/database/schema";
import { auth } from "@/auth";
import { desc } from "drizzle-orm";

const Home = async ({ searchParams }: { searchParams: { bookId?: string } }) => {
  const session = await auth();

  const latestBooks = (await db
    .select()
    .from(books)
    .orderBy(desc(books.createdAt))) as any[];

  let bookToShow = latestBooks[0];
  if (searchParams?.bookId) {
    const found = latestBooks.find(b => b.id === searchParams.bookId);
    if (found) bookToShow = found;
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white px-2 md:px-0">
      <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-8">
        <BookOverview {...bookToShow} userId={session?.user?.id as string} />
      </section>
      <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-8">
        <BookList
          title="Latest Books"
          books={latestBooks.slice(1)}
          containerClassName="mt-8"
        />
      </section>
    </main>
  );
};

export default Home;