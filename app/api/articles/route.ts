import { NextResponse } from "next/server";
import { db } from "@/database/drizzle";
import { articles } from "@/database/schema";

export async function GET() {
  const allArticles = await db.select().from(articles);
  return NextResponse.json(allArticles);
}

export async function POST(req: Request) {
  const data = await req.json();
  const [newArticle] = await db.insert(articles).values(data).returning();
  return NextResponse.json(newArticle);
} 