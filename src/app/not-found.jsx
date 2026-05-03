import Link from "next/link";
import Image from "next/image";
import { FaHome, FaSearch } from "react-icons/fa";
import Notfound from '@/assets/error-404.png';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] w-full flex flex-col items-center justify-center px-4 relative overflow-hidden">
            
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FB8C00]/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">
                
                {/* Image Section with float animation */}
                <div className="relative mb-8 animate-bounce duration-[3000ms]">
                    <div className="absolute inset-0 bg-[#FB8C00]/20 blur-3xl rounded-full"></div>
                    <Image 
                        src={Notfound} 
                        alt="404 Not Found" 
                        width={400} 
                        height={400}
                        priority 
                        className="w-56 md:w-72 h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(251,140,0,0.3)]" 
                    />
                </div>

                {/* Content Card */}
                <div className="bg-[#1E293B]/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6 w-full max-w-lg border-b-[#FB8C00]/30 border-b-2">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                            404
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FB8C00] to-yellow-400 uppercase tracking-widest">
                            Page Not Found
                        </h2>
                    </div>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Oops! It seems the chapter you&apos;re looking for has been moved or doesn&apos;t exist in our library anymore. 
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link 
                            href="/" 
                            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FB8C00] hover:bg-[#E65100] text-white font-bold rounded-2xl shadow-lg shadow-[#FB8C00]/20 hover:shadow-[#FB8C00]/40 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <FaHome className="group-hover:animate-pulse" />
                            Back to Home
                        </Link>
                        
                        <Link 
                            href="/books" 
                            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <FaSearch className="text-[#FB8C00]" />
                            Explore Books
                        </Link>
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 flex items-center gap-8 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    <Link href="/books" className="hover:text-[#FB8C00] transition-colors">All Books</Link>
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                    <Link href="/profile" className="hover:text-[#FB8C00] transition-colors">My Profile</Link>
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                    <Link href="/register" className="hover:text-[#FB8C00] transition-colors">Join Us</Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;