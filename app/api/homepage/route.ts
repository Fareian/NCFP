import { NextResponse } from "next/server";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

export async function GET() {
  // Fetch the first 3 books as featuredBooks
  const featuredBooks = await db.select().from(books).limit(3);

  const data = {
    hero: {
      title: "Freely Have We Received, Freely Do We Give",
      subtitle: "Discover a world of free Christian books, devotionals, and resources. Wisdom, encouragement, and faith for every season of life.",
      cta: { label: "Explore Books", url: "/all-books" }
    },
    featuredBooks,
    categories: ["Faith", "Leadership", "Marriage", "Teens", "Devotionals"],
    articles: [
      { id: 1, title: "How Faith Transforms Everyday Life", desc: "Discover practical ways to live out your faith and experience God’s presence in daily routines. Encouragement for every believer!", highlight: true },
      { id: 2, title: "Marriage: Building on the Rock", desc: "Biblical principles for a strong, Christ-centered marriage.", highlight: false },
      { id: 3, title: "Faith for Teens: Standing Strong", desc: "Encouragement and wisdom for young believers navigating today’s world.", highlight: false }
    ]
  };
  return NextResponse.json(data);
} 