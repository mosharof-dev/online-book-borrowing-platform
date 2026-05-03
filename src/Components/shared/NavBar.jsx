"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogIn } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={`relative px-3 py-2 transition-all duration-300 font-medium ${
            isActive("/")
              ? "text-[#FB8C00]"
              : "text-slate-300 hover:text-white"
          } group`}
        >
          Home
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${
              isActive("/")
                ? "scale-x-100 opacity-100"
                : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
            }`}
          />
        </Link>
      </li>
      <li>
        <Link
          href="/books"
          className={`relative px-3 py-2 transition-all duration-300 font-medium ${
            isActive("/books")
              ? "text-[#FB8C00]"
              : "text-slate-300 hover:text-white"
          } group`}
        >
          All Books
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${
              isActive("/books")
                ? "scale-x-100 opacity-100"
                : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
            }`}
          />
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={`relative px-3 py-2 transition-all duration-300 font-medium ${
            isActive("/profile")
              ? "text-[#FB8C00]"
              : "text-slate-300 hover:text-white"
          } group`}
        >
          My Profile
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FB8C00] rounded-full transition-all duration-300 ${
              isActive("/profile")
                ? "scale-x-100 opacity-100"
                : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
            }`}
          />
        </Link>
      </li>
    </>
  );

  const avatarSrc =
    user?.image ||
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.name || "reader")}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0F172A]/80 backdrop-blur-lg shadow-lg" : "bg-[#0F172A]"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-2 min-h-16 flex flex-wrap sm:flex-nowrap justify-between items-center gap-y-2 relative z-10">
        {/* Left: Logo */}
        <div className="navbar-start w-auto shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#FB8C00]/10 p-1.5 md:p-2 rounded-xl border border-[#FB8C00]/20 group-hover:bg-[#FB8C00]/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#FB8C00"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-white">
              Book<span className="text-[#FB8C00]">Borrowing</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop nav */}
        <div className="navbar-center hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal px-1 gap-2 xl:gap-4">{navLinks}</ul>
        </div>

        {/* Right: auth + hamburger */}
        <div className="navbar-end w-auto flex items-center justify-end gap-2 sm:gap-3 min-w-0 flex-1 lg:flex-initial">
          {isPending ? (
            <div className="flex items-center gap-2 sm:gap-3 animate-pulse">
              <div className="h-4 w-20 sm:w-28 bg-white/10 rounded-md hidden sm:block" />
              <div className="h-9 w-9 sm:h-10 sm:w-10 bg-white/10 rounded-full" />
              <div className="h-9 w-20 sm:w-24 bg-white/10 rounded-full" />
            </div>
          ) : user ? (
            <>
              {/* Desktop / tablet: name + avatar + logout */}
              <div className="hidden sm:flex items-center gap-2 sm:gap-3 min-w-0">
                <span
                  className="text-sm sm:text-base font-semibold text-slate-100 max-w-[100px] md:max-w-[180px] truncate"
                  title={user.name}
                >
                  {user.name}
                </span>
                <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full overflow-hidden border-2 border-[#FB8C00]/50 ring-2 ring-[#FB8C00]/20 shadow-md">
                  <Image
                    src={avatarSrc}
                    alt="Profile"
                    fill
                    sizes="40px"
                    className="object-cover"
                    unoptimized={avatarSrc.startsWith("https://api.dicebear.com")}
                  />
                </div>
                <Button
                  type="button"
                  size="sm"
                  radius="full"
                  onPress={handleLogout}
                  className="font-semibold border border-[#FB8C00] bg-[#FB8C00]/15 text-[#FB8C00] hover:bg-[#FB8C00] hover:text-white shadow-[0_0_20px_rgba(251,140,0,0.25)] transition-all"
                  startContent={<IoLogOutOutline className="text-lg" />}
                >
                  Logout
                </Button>
              </div>

              {/* Mobile: compact avatar + colored logout icon button */}
              <div className="flex sm:hidden items-center gap-2">
                <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-[#FB8C00]/50">
                  <Image
                    src={avatarSrc}
                    alt="Profile"
                    fill
                    sizes="36px"
                    className="object-cover"
                    unoptimized={avatarSrc.startsWith("https://api.dicebear.com")}
                  />
                </div>
                <Button
                  type="button"
                  isIconOnly
                  size="sm"
                  radius="full"
                  aria-label="Logout"
                  onPress={handleLogout}
                  className="border border-[#FB8C00] bg-[#FB8C00]/15 text-[#FB8C00] hover:bg-[#FB8C00] hover:text-white"
                >
                  <IoLogOutOutline className="text-xl" />
                </Button>
              </div>
            </>
          ) : (
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Link
                href="/login"
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 border border-white/20 text-slate-300 hover:border-[#FB8C00] hover:text-[#FB8C00] hover:bg-[#FB8C00]/10 ${
                  isActive("/login")
                    ? "bg-[#FB8C00]/10 border-[#FB8C00] text-[#FB8C00]"
                    : ""
                }`}
              >
                <BiLogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#FB8C00] hover:bg-[#E65100] text-white px-4 sm:px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(251,140,0,0.3)] hover:shadow-[0_0_20px_rgba(251,140,0,0.5)] transition-all"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-white p-0 hover:bg-white/10 border border-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 z-100 p-4 shadow-2xl bg-[#1E293B] rounded-2xl w-[min(100vw-2rem,18rem)] border border-white/10 flex flex-col gap-1"
            >
              {navLinks}
              <div className="divider bg-white/5 h-px my-2" />

              {user ? (
                <>
                  <li className="px-2 py-2 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Signed in</p>
                    <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                  </li>
                  <li>
                    <Button
                      fullWidth
                      radius="lg"
                      onPress={handleLogout}
                      className="font-semibold border border-[#FB8C00] bg-[#FB8C00]/15 text-[#FB8C00] hover:bg-[#FB8C00] hover:text-white mt-1"
                      startContent={<IoLogOutOutline className="text-lg" />}
                    >
                      Logout
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      className="flex items-center gap-2 py-3 px-4 rounded-xl border border-white/10 bg-white/5 font-semibold text-slate-300 hover:text-[#FB8C00] active:bg-[#FB8C00]/10"
                    >
                      <BiLogIn className="w-5 h-5" /> Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className="flex items-center justify-center py-3 px-4 rounded-xl bg-[#FB8C00] text-white font-bold shadow-md active:bg-[#E65100]"
                    >
                      Register Now
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#FB8C00]/40 to-transparent" />
    </header>
  );
};

export default Navbar;
