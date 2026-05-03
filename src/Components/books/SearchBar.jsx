"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      router.push(`/books?${params.toString()}`, { scroll: false });
    }, 300);

    return () => clearTimeout(timer);
  }, [query, router, searchParams]);

  return (
    <div className="relative group w-full">
      <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
        <FaSearch className="text-slate-500 group-focus-within:text-[#FB8C00] transition-colors" />
      </div>
      <input
        type="text"
        placeholder="Search books by title, author or keywords..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-[#1E293B]/50 backdrop-blur-md border border-white/10 text-white pl-14 pr-6 py-5 rounded-2xl focus:outline-none focus:border-[#FB8C00] focus:ring-4 focus:ring-[#FB8C00]/10 transition-all text-lg shadow-xl placeholder:text-slate-500"
      />
    </div>
  );
};

export default SearchBar;
