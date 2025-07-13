import React from "react";
import { db } from "@/database/drizzle";
import { articles } from "@/database/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const [article] = await db.select().from(articles).where(eq(articles.id, params.id)).limit(1);
  if (!article) return notFound();
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white px-2 md:px-0">
      <section className="w-full max-w-3xl mx-auto py-12 px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-2">By {article.author}</p>
        <img src={article.coverUrl} alt={article.title} className="w-full max-h-96 object-cover rounded mb-6" />
        <p className="text-lg text-gray-800 mb-6">{article.summary}</p>
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: article.content }} />
      </section>
    </main>
  );
};

export default ArticlePage; 