import React, { Suspense } from "react";
import CategorySidebar from "@/Components/books/CategorySidebar";
import SearchBar from "@/Components/books/SearchBar";
import BookCard from "@/Components/books/BookCard";
import { FaLayerGroup } from "react-icons/fa";

export const metadata = {
  title: "Explore All Books | BookBorrowing",
  description:
    "Browse through our extensive collection of digital books. Filter by category or search for specific titles.",
};

// Fetch books on the server
async function getBooks() {
  try {
    const res = await fetch(
      "https://online-book-borrowing-mu.vercel.app/books",
      {
        cache: "no-store",
      },
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

const AllBookPage = async ({ searchParams }) => {
  const params = await searchParams;
  const selectedCategory = params.category || "All";
  const searchQuery = params.search || "";
  const sortBy = params.sort || "default";

  const books = await getBooks();

  // Filter and Sort on the Server
  let filteredBooks = books;

  if (selectedCategory !== "All") {
    filteredBooks = filteredBooks.filter(
      (book) => book.category === selectedCategory,
    );
  }

  if (searchQuery.trim() !== "") {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  if (sortBy === "category-asc") {
    filteredBooks = [...filteredBooks].sort((a, b) =>
      a.category.localeCompare(b.category),
    );
  } else if (sortBy === "author-asc") {
    filteredBooks = [...filteredBooks].sort((a, b) =>
      a.author.localeCompare(b.author),
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Discover Your <span className="text-[#FB8C00]">Next Favorite</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Browse through our extensive collection of digital books. Filter by
            category or search for specific titles to find exactly what
            you&apos;re looking for.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Area - Wrapped in Suspense because it uses useSearchParams */}
          <div className="w-full lg:w-1/4">
            <Suspense
              fallback={
                <div className="h-96 bg-white/5 animate-pulse rounded-3xl" />
              }
            >
              <CategorySidebar />
            </Suspense>
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4 flex flex-col gap-8">
            {/* Search Bar - Wrapped in Suspense */}
            <Suspense
              fallback={
                <div className="h-16 bg-white/5 animate-pulse rounded-2xl" />
              }
            >
              <SearchBar />
            </Suspense>

            {/* Results Count & Feedback */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-white/5 pb-4">
              <p className="text-slate-400">
                Showing{" "}
                <span className="text-white font-bold">
                  {filteredBooks.length}
                </span>{" "}
                {filteredBooks.length === 1 ? "book" : "books"}
              </p>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                {selectedCategory !== "All" && (
                  <span className="text-xs bg-[#FB8C00]/10 text-[#FB8C00] px-3 py-2 rounded-lg border border-[#FB8C00]/20">
                    {selectedCategory}
                  </span>
                )}
                {/* Sorting is now static/URL based, could also be a client component but here we keep it simple */}
                <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-lg px-3 py-2">
                  <label htmlFor="sortBy" className="text-sm text-slate-300">
                    Sort by:
                  </label>
                  <select
                    id="sortBy"
                    defaultValue={sortBy}
                    className="bg-transparent text-sm text-white outline-none cursor-pointer"
                    // We will need a small client component if we want this to update URL on change easily
                  >
                    <option className="bg-[#0F172A]" value="default">
                      Default
                    </option>
                    <option className="bg-[#0F172A]" value="category-asc">
                      Category
                    </option>
                    <option className="bg-[#0F172A]" value="author-asc">
                      Author
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Books Grid */}
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-white/5 rounded-3xl border border-dashed border-white/10">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <FaLayerGroup className="text-slate-500 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Books Found
                </h3>
                <p className="text-slate-400">
                  Try adjusting your search or filter to find more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookPage;
