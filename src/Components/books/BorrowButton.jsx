"use client";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const BorrowButton = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleBorrowBook = () => {
    if (!session?.user) {
      toast.error("Please login to borrow this book.");
      router.push("/login");
      return;
    }

    toast.success("Borrow request received. Feature will be activated soon.");
  };

  return (
    <button
      onClick={handleBorrowBook}
      type="button"
      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#FB8C00] hover:bg-[#E87500] text-white font-bold shadow-[0_10px_30px_rgba(251,140,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
    >
      <FaBookOpen />
      Borrow This Book
    </button>
  );
};

export default BorrowButton;
