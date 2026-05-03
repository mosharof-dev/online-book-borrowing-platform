"use client";

import Link from "next/link";
import { CgEye } from "react-icons/cg";
import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { authClient, loginWithGoogle } from "@/lib/auth-client";
import { toast } from "sonner";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  const handleLoginSubmit = async(data) => {
    console.log("Trying to login with:", data.email);
    
    
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
    callbackURL: "/",
    });
    
    // Login er Conditions 
    if (error) {
      
      toast.error(`Login Failed: ${error.message || "Invalid credentials!"}`);
      console.log("Login Error:", error);
    } 
    else if (res) {
      // Login success hole
      toast.success("Welcome back! Login Successful. 🎉");
    
    }
    
  };

  return (
    <section className=" py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden border border-white/10 bg-[#1E293B]/60 backdrop-blur-md shadow-2xl">
        <div className="relative p-8 md:p-12 bg-[#0F172A] border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="absolute inset-0 bg-linear-to-br from-[#FB8C00]/15 to-transparent pointer-events-none" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#FB8C00] font-semibold">
              Welcome Back
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Borrow smarter.
              <br />
              Read better.
            </h1>
            <p className="text-slate-300 max-w-md">
              Access thousands of books, track your reading journey, and manage
              your borrowed titles from one modern dashboard.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-lg font-bold text-white">12+</p>
                <p className="text-xs text-slate-400">Featured titles</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-lg font-bold text-white">3</p>
                <p className="text-xs text-slate-400">Main categories</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Discover Story, Tech, and Science collections with smart filtering, quick previews,
              and a distraction-free reading focused experience.
            </p>
            <div className="rounded-2xl border border-[#FB8C00]/20 bg-[#FB8C00]/10 p-5">
              <p className="text-sm text-slate-200 leading-relaxed">
                &ldquo;Fast login, smooth browsing, and a modern library experience in one place.&rdquo;
              </p>
              <p className="text-xs text-[#FB8C00] mt-2 font-semibold tracking-wide">
                READER FEEDBACK
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Login</h2>
          <p className="text-slate-400 mb-8">Sign in to continue to your library.</p>

  
          <Form className="space-y-5" 
          onSubmit={handleSubmit(handleLoginSubmit)}>
            <TextField
              isRequired
              name="email"
              type="email"
              className="space-y-2"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-slate-300">Email</Label>
              <Input
                {...register("email")}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A]/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#FB8C00]/70 focus:ring-2 focus:ring-[#FB8C00]/20 transition"
              />
              <FieldError className="text-xs text-red-300" />
            </TextField>

            <TextField
              isRequired
              name="password"
              className="space-y-2"
              validate={(value) => {
                if (value.length < 8) return "Password must be at least 8 characters";
                if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                return null;
              }}
            >
              <Label className="text-sm font-medium text-slate-300">Password</Label>
              <InputGroup className="flex items-center rounded-xl border border-white/10 bg-[#0F172A]/80 pr-3 focus-within:border-[#FB8C00]/70 focus-within:ring-2 focus-within:ring-[#FB8C00]/20 transition">
                <InputGroup.Input
                  minLength={8}
                  type={isVisible ? "text" : "password"}
                  {...register("password")}
                  placeholder="Enter your password"
                  className="w-full bg-transparent px-4 py-3 text-white placeholder:text-slate-500 outline-none"
                />
                <InputGroup.Suffix className="pr-0">
                  <Button
                    isIconOnly
                    type="button"
                    variant="ghost"
                    onPress={() => setIsVisible((prev) => !prev)}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    className="text-slate-400 hover:text-[#FB8C00] bg-transparent hover:bg-transparent"
                  >
                    {isVisible ? <CgEye className="size-5" /> : <BsEyeSlash className="size-5" />}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <FieldError className="text-xs text-red-300" />
            </TextField>

            <Button
              type="submit"
              className="w-full rounded-xl bg-[#FB8C00] hover:bg-[#E87500] text-white font-bold py-3 transition "
            >
              Login
            </Button>

            <div className="relative py-2">
              <div className="h-px bg-white/10" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-1 bg-[#1E293B] px-3 text-xs text-slate-400">
                OR
              </span>
            </div>

            <button
            onClick={loginWithGoogle}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 transition"
            >
              <FcGoogle className="size-5" />
              Continue with Google
            </button>
          </Form>

          <p className="text-sm text-slate-400 mt-7">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#FB8C00] hover:underline font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
