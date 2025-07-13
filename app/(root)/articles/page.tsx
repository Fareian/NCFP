import React from "react";
import { db } from "@/database/drizzle";
import { articles } from "@/database/schema";
import Link from "next/link";

const ArticlesPage = async () => {
  const allArticles = await db.select().from(articles);
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white px-2 md:px-0">
      <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h1 className="text-3xl font-bold mb-8">Articles</h1>
        <ul className="space-y-6">
          {allArticles.map(article => (
            <li key={article.id} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-2">{article.summary}</p>
              <Link href={`/articles/${article.id}`} className="text-blue-600 hover:underline">Read More</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ArticlesPage; 