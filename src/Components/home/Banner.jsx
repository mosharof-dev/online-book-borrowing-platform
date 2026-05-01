import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-125 md:h-150 rounded-xl overflow-hidden mb-12 shadow-2xl border border-white/10 bg-[#1E293B]">
            {/*Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop')" }}
            >
                {/* Gradient Overlay - slightly brighter than the body background so it stands out */}
                <div className="absolute inset-0 bg-linear-to-r from-[#1E293B] via-[#1E293B]/90 to-[#1E293B]/40"></div>
            </div>

            {/* Content Container */}
            <div className="relative h-full flex items-center px-6 md:px-12 lg:px-20 w-full">
                <div className="max-w-2xl text-left">
                   
                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#FB8C00]/10 border border-[#FB8C00]/30 text-[#FB8C00] font-semibold text-sm mb-6 backdrop-blur-md">
                        📚 Your Digital Library
                    </div>

                    {/* Heading - Required by Assignment */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                        Find Your <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FB8C00] to-yellow-400">
                            Next Read
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                        Explore thousands of books, from timeless classics to modern bestsellers. Borrow digitally and read anywhere, anytime.
                    </p>

                    {/* Buttons - Required by Assignment */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/books"
                            className="flex items-center justify-center gap-2 bg-[#FB8C00] hover:bg-[#E65100] text-white px-8 py-3.5 text-lg font-semibold rounded-xl shadow-[0_0_20px_rgba(251,140,0,0.4)] hover:shadow-[0_0_30px_rgba(251,140,0,0.6)] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Browse Now
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>

                        <Link
                            href="#featured"
                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-3.5 text-lg font-semibold rounded-xl backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Featured Books
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Glow Effect */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FB8C00] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        </div>
    );
};

export default Banner;