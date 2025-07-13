import React from "react";
import BookCover from "@/components/BookCover";

async function getHomepageData() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_ENDPOINT ||
    process.env.NEXTAUTH_URL ||
    "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/homepage`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch homepage data");
  return res.json();
}

export default async function HomePage() {
  const data = await getHomepageData();

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white px-2 md:px-0">
      {/* Hero Section */}
      <section className="w-full py-16 px-4 text-center bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-700 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">{data.hero.title}</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-blue-100">{data.hero.subtitle}</p>
        <a href={data.hero.cta.url} className="inline-block px-8 py-3 rounded-full bg-white text-blue-900 font-semibold shadow hover:bg-blue-100 transition">{data.hero.cta.label}</a>
      </section>

      {/* Featured Books / Devotionals */}
      <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Featured Books & Devotionals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.featuredBooks.map((book: any) => (
            <div key={book.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition">
              <div className="w-24 h-32 rounded mb-4 flex items-center justify-center">
                <BookCover
                  variant="wide"
                  className="z-10"
                  coverColor={book.coverColor}
                  coverImage={book.coverUrl}
                  width="180px"
                  height="120px"
                />
              </div>
              <h3 className="font-semibold text-lg text-blue-900 mb-1">{book.title}</h3>
              <p className="text-sm text-gray-700 mb-2">by {book.author}</p>
              <a
                href={`/all-books?bookId=${book.id}`}
                className="mt-auto px-4 py-2 rounded-full bg-blue-900 text-white text-sm font-medium hover:bg-blue-800 transition"
              >
                Read Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Categories / Topics */}
      <section className="w-full max-w-5xl mx-auto py-10 px-4 md:px-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-6">Browse by Category</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {data.categories.map((cat: string) => (
            <span key={cat} className="px-6 py-2 rounded-full bg-blue-100 text-blue-900 font-medium shadow hover:bg-blue-200 transition">{cat}</span>
          ))}
        </div>
      </section>

      {/* Top Articles / Latest Downloads */}
      <section className="w-full max-w-5xl mx-auto py-10 px-4 md:px-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-6">Top Articles & Latest Downloads</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {data.articles.map((article: any) => (
            <div
              key={article.id}
              className={`w-full md:w-${article.highlight ? "[420px]" : "80"} ${article.highlight ? "bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200" : "bg-white"} rounded-xl shadow-lg p-6 flex flex-col items-start hover:shadow-xl transition`}
            >
              {article.highlight && (
                <span className="uppercase text-xs font-bold text-blue-700 mb-2">Article of the Week</span>
              )}
              <h3 className="font-semibold text-lg text-blue-900 mb-1">{article.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{article.desc}</p>
              <a href="#" className="mt-auto px-4 py-2 rounded-full bg-blue-900 text-white text-sm font-medium hover:bg-blue-800 transition">Read Article</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full h-fit bg-indigo-900 text-white py-4 mt-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-lg text-white">BookWise</span>
            <span className="text-sm text-blue-100">&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-200 transition">Contact</a>
            <a href="#" className="hover:text-blue-200 transition">About</a>
            <a href="#" className="hover:text-blue-200 transition">Privacy</a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-200 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" /></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-200 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" /></svg></a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-200 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0z" /><circle cx="12" cy="12" r="3.5" /><circle cx="18.406" cy="5.594" r="1.44" /></svg></a>
          </div>
        </div>
      </footer>
    </main>
  );
}