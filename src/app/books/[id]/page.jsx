"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaBookOpen, FaLayerGroup, FaUser } from "react-icons/fa";

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`http://localhost:5000/books/${id}`);

        if (!res.ok) {
          throw new Error("Book not found");
        }

        const data = await res.json();
        setBook(data);
      } catch (err) {
        console.error("Book details fetch failed:", err);
        setError("Could not load this book right now.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
        <div className="h-[500px] rounded-3xl bg-white/5 border border-white/10" />
        <div className="space-y-4">
          <div className="h-10 rounded-xl bg-white/5 w-3/4" />
          <div className="h-6 rounded-lg bg-white/5 w-1/2" />
          <div className="h-28 rounded-2xl bg-white/5" />
          <div className="h-12 rounded-xl bg-white/5 w-44" />
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="text-center py-20 rounded-3xl border border-red-400/20 bg-red-500/10">
        <h2 className="text-2xl font-bold text-red-300">Book Not Available</h2>
        <p className="text-slate-300 mt-2">{error || "This book does not exist."}</p>
        <Link
          href="/books"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl border border-white/20 text-white hover:border-[#FB8C00] hover:text-[#FB8C00] transition"
        >
          <FaArrowLeft /> Back to All Books
        </Link>
      </div>
    );
  }

  const availableCount =
    typeof book.available_quantity === "number" ? book.available_quantity : null;

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <Link
          href="/books"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-slate-200 hover:text-[#FB8C00] hover:border-[#FB8C00]/60 transition"
        >
          <FaArrowLeft className="text-sm" />
          Back to All Books
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
        <div className="relative rounded-3xl p-4 md:p-6 border border-white/10 bg-[#1E293B]/60 backdrop-blur-md shadow-2xl">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#FB8C00]/10 to-transparent pointer-events-none" />
          <div className="relative h-[420px] md:h-[540px] w-full rounded-2xl overflow-hidden bg-[#0F172A] border border-white/10">
            <Image
              src={
                book.image_url ||
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
              }
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="rounded-3xl p-6 md:p-8 border border-white/10 bg-[#1E293B]/60 backdrop-blur-md space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#FB8C00] font-semibold">
              Book Details
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {book.title}
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <FaUser className="text-[#FB8C00]" />
              <div>
                <p className="text-xs text-slate-400">Author</p>
                <p className="text-sm text-white font-medium">{book.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <FaLayerGroup className="text-[#FB8C00]" />
              <div>
                <p className="text-xs text-slate-400">Category</p>
                <p className="text-sm text-white font-medium">{book.category}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5">
            <p className="text-slate-300 leading-relaxed">{book.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                availableCount === null
                  ? "bg-white/5 text-slate-300 border-white/15"
                  : availableCount > 0
                    ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                    : "bg-red-500/10 text-red-300 border-red-500/30"
              }`}
            >
              {availableCount === null
                ? "Availability not updated"
                : availableCount > 0
                  ? `${availableCount} copies left`
                  : "Out of stock"}
            </span>
          </div>

          <button
            type="button"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FB8C00] hover:bg-[#E87500] text-white font-bold shadow-[0_10px_30px_rgba(251,140,0,0.35)] transition"
          >
            <FaBookOpen />
            Borrow This Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetailPage;