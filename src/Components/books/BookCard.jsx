import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaUser, FaTag } from "react-icons/fa";

const getBadgeColor = (category) => {
  switch (category?.toLowerCase()) {
    case "story":
      return "bg-blue-950/90 text-blue-300 border-blue-500/60 shadow-[0_0_10px_rgba(59,130,246,0.3)]";
    case "tech":
      return "bg-purple-950/90 text-purple-300 border-purple-500/60 shadow-[0_0_10px_rgba(168,85,247,0.3)]";
    case "science":
      return "bg-green-950/90 text-green-300 border-green-500/60 shadow-[0_0_10px_rgba(34,197,94,0.3)]";
    default:
      return "bg-orange-950/90 text-orange-300 border-orange-500/60 shadow-[0_0_10px_rgba(249,115,22,0.3)]";
  }
};
const BookCard = ({ book }) => {
  return (
    <div
      // Full Card Wrapper with Hover Border Animation
      className="group flex flex-col bg-[#1E293B] p-4 rounded-xl border border-white/5 hover:border-[#FB8C00]/60 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(251,140,0,0.15)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#FB8C00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Book Image Display Area */}
      <div className="relative h-64 w-full rounded-2xl bg-[#0F172A] border border-white/5 flex items-center justify-center p-4 mb-5 overflow-hidden">
        <Image
          src={
            book.image_url ||
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
          }
          alt={book.title}
          width={300}
          height={400}
          className="w-auto h-full object-contain rounded drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-105 group-hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)] z-10"
        />

        {/* Dynamic Category Badge */}
        <div
          className={`absolute top-3 right-3 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold border tracking-widest uppercase z-20 ${getBadgeColor(book.category)}`}
        >
          {book.category}
        </div>
      </div>

      {/* Book Details */}
      <div className="flex flex-col flex-1 px-2 z-10">
        <h3
          className="text-xl font-bold text-white mb-1 line-clamp-1 group-hover:text-[#FB8C00] transition-colors"
          title={book.title}
        >
          {book.title}
        </h3>
        <p className="text-sm text-slate-400 mb-5">
          By <span className="text-slate-300 font-medium">{book.author}</span>
        </p>

        <div className="mt-auto">
          {/* View Details Button */}
          <Link
            href={`/books/${book.id}`}
            className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 hover:bg-[#FB8C00] hover:border-[#FB8C00] text-white font-bold py-3 rounded-xl transition-all duration-300 group/btn shadow-lg"
          >
            <span>View Details</span>
            <FaBookOpen className="text-sm transform group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
