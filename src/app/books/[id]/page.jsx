import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaLayerGroup, FaUser } from "react-icons/fa";
import BorrowButton from "@/Components/books/BorrowButton";
import booksData from "@/data/db.json";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function getBook(id) {
  try {
    const book = booksData.books.find((b) => b.id.toString() === id.toString());
    return book || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const book = await getBook(id);

  return {
    title: book ? `${book.title} | BookBorrowing` : "Book Not Found",
    description: book
      ? book.description.substring(0, 160)
      : "Details about this book.",
  };
}

const BookDetailPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;
  const book = await getBook(id);

  if (!book) {
    return (
      <div className="text-center py-20 rounded-3xl border border-red-400/20 bg-red-500/10">
        <h2 className="text-2xl font-bold text-red-300">Book Not Available</h2>
        <p className="text-slate-300 mt-2">
          This book does not exist or has been removed.
        </p>
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
    typeof book.available_quantity === "number"
      ? book.available_quantity
      : null;

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
          <div className="relative h-105 md:h-135 w-full rounded-2xl overflow-hidden bg-[#0F172A] border border-white/10">
            <Image
              src={
                book.image_url ||
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
              }
              alt={book.title}
              fill
              priority
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
                <p className="text-sm text-white font-medium">
                  {book.category}
                </p>
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

          <BorrowButton />
        </div>
      </div>
    </section>
  );
};

export default BookDetailPage;
