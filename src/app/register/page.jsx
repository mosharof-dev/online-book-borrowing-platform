"use client";

import Link from "next/link";
import { CgEye } from "react-icons/cg";
import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const  RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const [isVisible, setIsVisible] = useState(false);

  const handleRegisterSubmit = async(data) => {
    // .preventDefault();
    console.log(data, "Name, Email and Password");
    
    const { data: res, error } = await authClient.signUp.email({
     
      name: data.name,
      email: data.email,
      password: data.password, 
      image: data.photoURL,
      callbackURL: "/login",
    });
    if (error) {
     
      toast.error(`Registration Failed: ${error.message || "Something went wrong!"}`);
      console.log("Error details:", error);
    } 
    if (res) {
      
      toast.success("Registration Successful! 🎉 Please login to continue.");
      
     
    }
 
    
    console.log(res, error);
  };

  return (
    <section className=" py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden border border-white/10 bg-[#1E293B]/60 backdrop-blur-md shadow-2xl">
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3">
              <p className="text-sm font-semibold text-white">Why readers join us</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Personal profile with your photo and reading identity.</li>
                <li>Simple borrow flow with clear availability updates.</li>
                <li>Modern dashboard experience across mobile and desktop.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Register</h2>
          <p className="text-slate-400 mb-8">Create an account to start borrowing books.</p>

          <Form className="space-y-4" onSubmit={handleSubmit(handleRegisterSubmit)}>
            <TextField
              isRequired
              name="name"
              type="text"
              className="space-y-2"
              validate={(value) => {
                if (!value.trim()) return "Name is required";
                if (value.trim().length < 3) return "Name must be at least 3 characters";
                return null;
              }}
            >
              <Label className="text-sm font-medium text-slate-300">Name</Label>
              <Input
                {...register("name")}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A]/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#FB8C00]/70 focus:ring-2 focus:ring-[#FB8C00]/20 transition"
              />
              <FieldError className="text-xs text-red-300" />
            </TextField>

            <TextField
              isRequired
              name="photoURL"
              type="url"
              className="space-y-2"
              validate={(value) => {
                if (!value.trim()) return "Photo URL is required";
                if (!/^https?:\/\/.*/i.test(value)) return "Please enter a valid URL (https://...)";
                return null;
              }}
            >
              <Label className="text-sm font-medium text-slate-300">Photo URL</Label>
              <Input
                {...register("photoURL")}
                placeholder="Enter your photo URL"
                className="w-full rounded-xl border border-white/10 bg-[#0F172A]/80 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-[#FB8C00]/70 focus:ring-2 focus:ring-[#FB8C00]/20 transition"
              />
              <FieldError className="text-xs text-red-300" />
            </TextField>

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
                {...register("password")}
                  minLength={8}
                  type={isVisible ? "text" : "password"}
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
              <Description className="text-xs text-slate-400">
                Must be 8+ characters with 1 uppercase and 1 number.
              </Description>
              <FieldError className="text-xs text-red-300" />
            </TextField>

            <Button
              type="submit"
              className="w-full rounded-xl bg-[#FB8C00] hover:bg-[#E87500] text-white font-bold py-3 transition  mt-2"
            >
              Register
            </Button>

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
          </Form>

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
export default RegisterPage;
