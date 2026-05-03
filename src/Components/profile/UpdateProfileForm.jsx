"use client";
import React, { useState } from "react";
import { Button, TextField, Label, Input, Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { FaUser, FaLink, FaEdit, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UpdateProfileForm({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await authClient.updateUser({
        name: name,
        image: image,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully!");
        router.push("/profile");
        router.refresh();
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 ">
      <div className="bg-[#1E293B] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-8 sm:p-12 border-b border-white/5">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Update Profile
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Manage your digital library identity and preferences.
          </p>
        </div>

        <div className="p-8 sm:p-12 space-y-8">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 ring-4 ring-[#FB8C00]/20 rounded-full overflow-hidden bg-[#0F172A]">
                {image && (
                  <Avatar.Image
                    src={image}
                    className="object-cover w-full h-full"
                  />
                )}
                <Avatar.Fallback className="bg-[#FB8C00]/20 text-[#FB8C00] flex items-center justify-center text-2xl sm:text-3xl font-bold w-full h-full">
                  {name ? name.charAt(0).toUpperCase() : "?"}
                </Avatar.Fallback>
              </Avatar>
              <div className="absolute bottom-1 right-1 bg-[#FB8C00] p-2 sm:p-3 rounded-full border-4 border-[#1E293B] shadow-lg">
                <FaEdit className="text-white text-xs sm:text-sm" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <TextField className="flex flex-col gap-2">
              <Label className="text-sm font-semibold text-slate-300">
                Full Name
              </Label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 z-20 text-slate-500 group-focus-within:text-[#FB8C00] transition-colors">
                  <FaUser size={18} />
                </div>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0F172A] border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-[#FB8C00] focus:ring-1 focus:ring-[#FB8C00]/30 transition-all placeholder:text-slate-600"
                />
              </div>
            </TextField>

            <TextField className="flex flex-col gap-2">
              <Label className="text-sm font-semibold text-slate-300">
                Profile Image URL
              </Label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 z-20 text-slate-500 group-focus-within:text-[#FB8C00] transition-colors">
                  <FaLink size={18} />
                </div>
                <Input
                  placeholder="Paste image URL here"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full bg-[#0F172A] border border-white/10 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-[#FB8C00] focus:ring-1 focus:ring-[#FB8C00]/30 transition-all placeholder:text-slate-600"
                />
              </div>
            </TextField>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button
              onPress={() => router.push("/profile")}
              className="w-full sm:w-1/3 bg-white/5 text-white hover:bg-white/10 py-4 rounded-2xl transition-all font-semibold"
            >
              Discard Changes
            </Button>
            <Button
              onPress={handleUpdate}
              isDisabled={loading}
              className="w-full sm:w-2/3 bg-[#FB8C00] text-white font-bold py-4 rounded-2xl shadow-xl shadow-[#FB8C00]/20 hover:bg-[#E65100] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              {loading && (
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {loading ? "Saving Changes..." : "Update Information"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
