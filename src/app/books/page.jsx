"use client";
import React, { useState, useEffect, useMemo } from "react";
import CategorySidebar from "@/Components/books/CategorySidebar";
import SearchBar from "@/Components/books/SearchBar";
import BookCard from "@/Components/books/BookCard";

const AllBookPage = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("title-asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/books");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = useMemo(() => {
    let result = books;

    // Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter((book) => book.category === selectedCategory);
    }

    // Search by Title
    if (searchQuery.trim() !== "") {
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    const sortedResult = [...result].sort((a, b) => {
      if (sortBy === "defaulet") {
        return 0;
      }

      if (sortBy === "category-asc") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return sortedResult;
  }, [selectedCategory, searchQuery, books, sortBy]);

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Discover Your <span className="text-[#FB8C00]">Next Favorite</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Browse through our extensive collection of digital books. Filter by
            category or search for specific titles to find exactly what you`re
            looking for.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Area */}
          <div className="w-full lg:w-1/4">
            <CategorySidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4 flex flex-col gap-8">
            {/* Search Bar */}
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

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
                <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-lg px-3 py-2">
                  <label htmlFor="sortBy" className="text-sm text-slate-300">
                    Sort by:
                  </label>
                  <select
                    id="sortBy"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-sm text-white outline-none cursor-pointer"
                  >
                    <option className="bg-[#0F172A]" value="author-asc">
                      Default
                    </option>

                    <option className="bg-[#0F172A]" value="category-asc">
                      Category
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Books Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="h-96 bg-white/5 animate-pulse rounded-2xl"
                  ></div>
                ))}
              </div>
            ) : filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-white/5 rounded-3xl border border-dashed border-white/10">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Books Found
                </h3>
                <p className="text-slate-400">
                  Try adjusting your search or filter to find more results.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-6 text-[#FB8C00] hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookPage;
