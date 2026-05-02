"use client";

import Link from "next/link";
import { CgEye } from "react-icons/cg";
import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-[#1E293B]/60 backdrop-blur-md shadow-2xl">
        <div className="relative p-8 md:p-12 bg-[#0F172A] border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="absolute inset-0 bg-linear-to-br from-[#FB8C00]/15 to-transparent pointer-events-none" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#FB8C00] font-semibold">
              Join Today
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Create your reader profile
              <br />
              in seconds.
            </h1>
            <p className="text-slate-300 max-w-md">
              Build your library identity, manage borrowed books, and keep track
              of your favorite categories from one place.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-lg font-bold text-white">Free</p>
                <p className="text-xs text-slate-400">Reader account</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-lg font-bold text-white">24/7</p>
                <p className="text-xs text-slate-400">Access anytime</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#FB8C00]/20 bg-[#FB8C00]/10 p-5">
              <p className="text-sm text-slate-200 leading-relaxed">
                &ldquo;Create your account once and unlock a curated world of digital books.&rdquo;
              </p>
              <p className="text-xs text-[#FB8C00] mt-2 font-semibold tracking-wide">
                PLATFORM PROMISE
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Register</h2>
          <p className="text-slate-400 mb-8">Create an account to start borrowing books.</p>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A]/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#FB8C00]/70 focus:ring-2 focus:ring-[#FB8C00]/20 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Photo URL</label>
              <input
                type="url"
                placeholder="Enter your photo URL"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A]/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#FB8C00]/70 focus:ring-2 focus:ring-[#FB8C00]/20 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A]/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#FB8C00]/70 focus:ring-2 focus:ring-[#FB8C00]/20 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <div className="flex items-center rounded-xl border border-white/10 bg-[#0F172A]/80 pr-3 focus-within:border-[#FB8C00]/70 focus-within:ring-2 focus-within:ring-[#FB8C00]/20 transition">
                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-transparent px-4 py-3 text-white placeholder:text-slate-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setIsVisible((prev) => !prev)}
                  className="text-slate-400 hover:text-[#FB8C00] transition"
                  aria-label={isVisible ? "Hide password" : "Show password"}
                >
                  {isVisible ? <CgEye className="size-5" /> : <BsEyeSlash className="size-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#FB8C00] hover:bg-[#E87500] text-white font-bold py-3 transition shadow-[0_10px_30px_rgba(251,140,0,0.3)] mt-2"
            >
              Register
            </button>

            <div className="relative py-2">
              <div className="h-px bg-white/10" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-1 bg-[#1E293B] px-3 text-xs text-slate-400">
                OR
              </span>
            </div>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 transition"
            >
              <FcGoogle className="size-5" />
              Continue with Google
            </button>
          </form>

          <p className="text-sm text-slate-400 mt-7">
            Already have an account?{" "}
            <Link href="/login" className="text-[#FB8C00] hover:underline font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
