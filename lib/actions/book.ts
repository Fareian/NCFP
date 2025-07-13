"use server";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq } from "drizzle-orm";

export const createBook = async (params: BookParams) => {
  try {
    const newBook = await db
      .insert(books)
      .values({
        ...params,
      })
      .returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while creating the book",
    };
  }
};

export const getBookById = async (id: string) => {
  try {
    const book = await db.select().from(books).where(eq(books.id, id)).limit(1);
    return book[0] || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBooks = async (limit = 10) => {
  try {
    return await db.select().from(books).limit(limit);
  } catch (error) {
    console.log(error);
    return [];
  }
};
