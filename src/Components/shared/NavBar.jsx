"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener for dynamic glassmorphism effect
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
          className={`relative px-3 py-2 transition-all duration-300 ${isActive('/') ? 'text-[#FB8C00] font-semibold' : 'text-slate-300 hover:text-white'} group`}
        >
          Home
          {/* Active / Hover Underline Effect */}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${isActive('/') ? 'scale-x-100 opacity-100 '  : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'}`}></span>
        </Link>
      </li>
      <li>
        <Link
          href="/books"
          className={`relative px-3 py-2 transition-all duration-300 ${isActive('/books') ? 'text-[#FB8C00] font-semibold' : 'text-slate-300 hover:text-white'} group`}
        >
          All Books
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${isActive('/books') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'}`}></span>
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={`relative px-3 py-2 transition-all duration-300 ${isActive('/profile') ? 'text-[#FB8C00] font-semibold' : 'text-slate-300 hover:text-white'} group`}
        >
          My Profile
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${isActive('/profile') ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'}`}></span>
        </Link>
      </li>
    </>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-[#0F172A]'}`}>
      <div className="navbar max-w-7xl mx-auto px-4 py-3 sm:py-4 relative z-10">

        {/* Left: Logo */}
        <div className="navbar-start">
          <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2 group">
            <div className="bg-[#FB8C00]/20 p-2 rounded-xl group-hover:bg-[#FB8C00]/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#FB8C00" className="w-6 h-6 transform group-hover:scale-110 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <span className="text-[#FB8C00]">Book</span>
            <span className="text-white">Borrow</span>
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-[15px]">
            {navLinks}
          </ul>
        </div>

        {/* Right: Auth Buttons & Mobile Menu */}
        <div className="navbar-end flex items-center gap-3">

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white border border-white/10 bg-white/5 hover:border-[#FB8C00]/50 hover:bg-[#FB8C00]/10 hover:text-[#FB8C00] rounded-lg transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>
              Login
            </Link>

            <Link href="/register" className="px-6 py-2 text-sm font-semibold bg-[#FB8C00] hover:bg-[#E65100] text-white rounded-lg shadow-[0_0_15px_rgba(251,140,0,0.3)] hover:shadow-[0_0_20px_rgba(251,140,0,0.5)] transform hover:-translate-y-0.5 transition-all duration-300">
              Register
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-1 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.5)] bg-[#1E293B] rounded-2xl w-56 text-white border border-white/5 backdrop-blur-xl">
              {navLinks}
              <div className="divider bg-white/5 h-px my-3"></div>
              <li className="mb-2">
                <Link href="/login" className="flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-[#FB8C00]/10 hover:border-[#FB8C00]/50 hover:text-[#FB8C00] py-3 rounded-xl font-medium transition-all duration-300">
                  <BiLogIn className="w-5 h-5" />
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="flex items-center justify-center bg-[#FB8C00] text-white py-3 rounded-xl hover:bg-[#E65100] font-medium shadow-md">
                  Register
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