"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SortFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort") || "default";

  const handleSortChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    
    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    
    router.push(`/books?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-lg px-3 py-2 focus-within:border-[#FB8C00]/50 transition-colors">
      <label htmlFor="sortBy" className="text-sm text-slate-300 whitespace-nowrap">
        Sort by:
      </label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={handleSortChange}
        className="bg-transparent text-sm text-white outline-none cursor-pointer pr-1"
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
  );
};

export default SortFilter;
