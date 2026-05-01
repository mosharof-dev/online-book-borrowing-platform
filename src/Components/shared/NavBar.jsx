"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogIn } from "react-icons/bi";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={`relative px-3 py-2 transition-all duration-300 font-medium ${isActive('/') ? 'text-[#FB8C00]' : 'text-slate-300 hover:text-white'} group`}
        >
          Home
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${isActive('/') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}></span>
        </Link>
      </li>
      <li>
        <Link
          href="/books"
          className={`relative px-3 py-2 transition-all duration-300 font-medium ${isActive('/books') ? 'text-[#FB8C00]' : 'text-slate-300 hover:text-white'} group`}
        >
          All Books
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${isActive('/books') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}></span>
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={`relative px-3 py-2 transition-all duration-300 font-medium ${isActive('/profile') ? 'text-[#FB8C00]' : ' text-slate-300 hover:text-white'} group`}
        >
          My Profile
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${isActive('/profile') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'}`}></span>
        </Link>
      </li>
    </>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/80 backdrop-blur-lg shadow-lg' : 'bg-[#0F172A]'}`}>
      <div className="navbar max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center relative z-10">
        
        {/* Left: Logo */}
        <div className="navbar-start w-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#FB8C00]/10 p-1.5 md:p-2 rounded-xl border border-[#FB8C00]/20 group-hover:bg-[#FB8C00]/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#FB8C00" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-white">
              Book<span className="text-[#FB8C00]">Borrow</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Links (Hidden on Mobile) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navLinks}
          </ul>
        </div>

        {/* Right: Auth & Hamburger */}
        <div className="navbar-end w-auto flex items-center gap-4">
          
          {/* Desktop Only Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 border border-white/20 text-slate-300 hover:border-[#FB8C00] hover:text-[#FB8C00] hover:bg-[#FB8C00]/10 ${isActive('/login') ? 'bg-[#FB8C00]/10 border-[#FB8C00] text-[#FB8C00]' : ''}`}
            >
              <BiLogIn className="w-4 h-4" />
              Login
            </Link>
            <Link href="/register" className="bg-[#FB8C00] hover:bg-[#E65100] text-white px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(251,140,0,0.3)] hover:shadow-[0_0_20px_rgba(251,140,0,0.5)] transform hover:-translate-y-0.5 transition-all">
              Register
            </Link>
          </div>

          {/* Mobile Menu (Hamburger) */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white p-0 hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu dropdown-content mt-4 z-1 p-4 shadow-2xl bg-[#1E293B] rounded-2xl w-60 border border-white/5 flex flex-col gap-2">
              {navLinks}
              <div className="divider bg-white/5 h-px my-1"></div>
              {/* Mobile Auth Buttons inside 3-dot menu */}
              <li>
                <Link href="/login" className="flex items-center gap-2 py-3 px-4 rounded-xl border border-white/10 bg-white/5 font-semibold text-slate-300 hover:text-[#FB8C00] active:bg-[#FB8C00]/10">
                  <BiLogIn className="w-5 h-5" /> Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="flex items-center justify-center py-3 px-4 rounded-xl bg-[#FB8C00] text-white font-bold shadow-md active:bg-[#E65100]">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Pro-level Glowing Gradient Border Line at the bottom of Navbar */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#FB8C00]/40 to-transparent"></div>
    </header>
  );
};

export default Navbar;