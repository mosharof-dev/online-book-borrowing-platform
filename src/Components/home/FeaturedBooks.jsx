import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFireAlt } from 'react-icons/fa';

// Using Server Component to fetch data directly
const FeaturedBooks = async () => {
let books = [];

try {
    const res = await fetch('http://localhost:5000/books', { 
        cache: 'no-store' 
    });
    
    if (res.ok) {
        const data = await res.json();
        books = data.slice(0, 4);
    }
} catch (error) {
    console.error("Failed to fetch books from json-server:", error);
}

// Dynamic color for different categories
const getBadgeColor = (category) => {
    switch(category?.toLowerCase()) {
        case 'story': 
            return 'bg-blue-950/90 text-blue-300 border-blue-500/60 shadow-[0_0_10px_rgba(59,130,246,0.3)]';
        case 'tech': 
            return 'bg-purple-950/90 text-purple-300 border-purple-500/60 shadow-[0_0_10px_rgba(168,85,247,0.3)]';
        case 'science': 
            return 'bg-green-950/90 text-green-300 border-green-500/60 shadow-[0_0_10px_rgba(34,197,94,0.3)]';
        default: 
            return 'bg-orange-950/90 text-orange-300 border-orange-500/60 shadow-[0_0_10px_rgba(249,115,22,0.3)]';
    }
};

return (
    <div className="w-full mb-12" id="featured">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center px-4">
            <div className="flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-linear-to-r from-[#FB8C00]/20 to-yellow-500/10 border border-[#FB8C00]/30 text-[#FB8C00] font-semibold text-sm mb-4">
                <FaFireAlt className="text-[#FB8C00] text-lg animate-pulse" /> Top Picks
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FB8C00] to-yellow-400">Books</span>
            </h2>
            <p className="text-slate-400 mt-2 max-w-3xl leading-relaxed text-sm md:text-base">
                Immerse yourself in our carefully curated collection of the most sought-after and critically acclaimed books. Whether you are looking for a gripping science fiction adventure, a deep dive into modern technology, or a timeless literary masterpiece, our featured selection has something special for every type of reader. Explore the pages, discover new perspectives, and digitally borrow your next favorite read today before these limited-stock titles run out!
            </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {books.map((book) => (
                <div 
                    key={book.id} 
                    // Full Card Wrapper with Hover Border Animation
                    className="group flex flex-col bg-[#1E293B] p-4 rounded-xl border border-white/5 hover:border-[#FB8C00]/60 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(251,140,0,0.15)] relative overflow-hidden"
                >
                    {/* Subtle Background Glow inside the card on hover */}
                    <div className="absolute inset-0 bg-linear-to-b from-[#FB8C00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* Book Image Display Area */}
                    <div className="relative h-64 w-full rounded-2xl bg-[#0F172A] border border-white/5 flex items-center justify-center p-4 mb-5 overflow-hidden">
                        {/* Next.js Image Component */}
                        <Image 
                            src={book.image_url || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop'} 
                            alt={book.title}
                            width={300}
                            height={400}
                            className="w-auto h-full object-contain rounded drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-105 group-hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)] z-10"
                        />

                        {/* Dynamic Category Badge */}
                        <div className={`absolute top-3 right-3 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold border tracking-widest uppercase z-20 ${getBadgeColor(book.category)}`}>
                            {book.category}
                        </div>
                    </div>

                    {/* Book Details */}
                    <div className="flex flex-col flex-1 px-2 z-10">
                        <h3 className="text-xl font-bold text-white mb-1 line-clamp-1 group-hover:text-[#FB8C00] transition-colors" title={book.title}>
                            {book.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-5">By <span className="text-slate-300 font-medium">{book.author}</span></p>
                        
                        <div className="mt-auto">     
                            
                            {/* View Details Button */}
                            <Link 
                                href={`/books/${book.id}`}
                                className="block w-full py-3 text-center bg-transparent hover:bg-[#FB8C00] text-[#FB8C00] hover:text-white border border-[#FB8C00]/50 hover:border-[#FB8C00] rounded-xl font-bold transition-all duration-300 shadow-sm"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Fallback Error Message if json-server is off */}
        {books.length === 0 && (
            <div className="text-center py-16 bg-[#1E293B]/50 rounded-3xl border border-white/5 border-dashed">
                <p className="text-slate-400 text-lg mb-2">No books found.</p>
                <p className="text-sm text-slate-500">Please make sure your JSON server is running (e.g., <code className="bg-black/30 px-2 py-1 rounded">json-server --watch db.json --port 5000</code>).</p>
            </div>
        )}
    </div>
);
};

export default FeaturedBooks;
