"use client";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBackdrop,
  ModalContainer,
  ModalDialog,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalHeading,
  Button,
  TextField,
  Label,
  Input,
  Avatar,
  Spinner,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { FaUser, FaLink, FaEdit } from "react-icons/fa";

import { useRouter } from "next/navigation";

export default function UpdateProfileModal({ isOpen, onClose, user }) {
  const router = useRouter();
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen && user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }

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
        router.refresh();
        onClose();
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="center">
      <ModalBackdrop className="fixed inset-0 z-999 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" />

      <ModalContainer className="fixed inset-0 z-1000 overflow-y-auto outline-none w-full min-h-full flex items-center justify-center p-2 sm:p-4 px-4 sm:px-6 lg:px-8 py-8 ">
        <ModalDialog className="bg-[#1E293B] border border-white/10 rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl outline-none ring-0 animate-in zoom-in-95 duration-200">
          <ModalHeader className="p-4 sm:p-8 border-b border-white/5">
            <ModalHeading className="text-lg sm:text-2xl font-bold text-white">
              Update Profile
            </ModalHeading>
            <p className="text-[10px] sm:text-sm text-slate-400 mt-0.5 sm:mt-1">
              Manage your digital library identity and preferences.
            </p>
          </ModalHeader>

          <ModalBody className="p-4 sm:p-8 space-y-4 sm:space-y-6">
            <div className="flex flex-col items-center mb-1">
              <div className="relative group">
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24 ring-4 ring-[#FB8C00]/20 rounded-full overflow-hidden bg-[#0F172A]">
                  {image && (
                    <Avatar.Image
                      src={image}
                      className="object-cover w-full h-full"
                    />
                  )}
                  <Avatar.Fallback className="bg-[#FB8C00]/20 text-[#FB8C00] flex items-center justify-center text-xl sm:text-2xl font-bold w-full h-full">
                    {name ? name.charAt(0).toUpperCase() : "?"}
                  </Avatar.Fallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 bg-[#FB8C00] p-1.5 sm:p-2 rounded-full border-2 border-[#1E293B] shadow-lg">
                  <FaEdit className="text-white text-[10px] sm:text-xs" />
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <TextField className="flex flex-col gap-1 sm:gap-1.5">
                <Label className="text-xs sm:text-sm font-medium text-slate-300">
                  Full Name
                </Label>
                <div className="relative flex items-center group">
                  <div className="absolute left-4 z-20 text-slate-500 group-focus-within:text-[#FB8C00] transition-colors">
                    <FaUser size={14} className="sm:text-base" />
                  </div>
                  <Input
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0F172A] border border-white/10 text-white pl-10 sm:pl-12 pr-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#FB8C00] focus:ring-1 focus:ring-[#FB8C00]/30 transition-all placeholder:text-slate-600 text-xs sm:text-base"
                  />
                </div>
              </TextField>

              <TextField className="flex flex-col gap-1 sm:gap-1.5">
                <Label className="text-xs sm:text-sm font-medium text-slate-300">
                  Profile Image URL
                </Label>
                <div className="relative flex items-center group">
                  <div className="absolute left-4 z-20 text-slate-500 group-focus-within:text-[#FB8C00] transition-colors">
                    <FaLink size={14} className="sm:text-base" />
                  </div>
                  <Input
                    placeholder="Paste image URL here"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full bg-[#0F172A] border border-white/10 text-white pl-10 sm:pl-12 pr-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl focus:outline-none focus:border-[#FB8C00] focus:ring-1 focus:ring-[#FB8C00]/30 transition-all placeholder:text-slate-600 text-xs sm:text-base"
                  />
                </div>
              </TextField>
            </div>
          </ModalBody>

          <ModalFooter className="p-4 sm:p-8 border-t border-white/5 flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 bg-white/2">
            <Button
              onPress={onClose}
              className="order-2 sm:order-1 w-full sm:w-auto px-6 py-2 rounded-xl sm:rounded-2xl text-slate-950 hover:text-white hover:bg-white/10 transition-colors font-medium text-xs sm:text-base border border-white/5 sm:border-none"
            >
              Discard
            </Button>
            <Button
              onPress={handleUpdate}
              isDisabled={loading}
              className="order-1 sm:order-2 w-full sm:w-auto bg-[#FB8C00] text-white font-bold px-8 py-2 rounded-xl sm:rounded-2xl shadow-lg shadow-[#FB8C00]/20 hover:bg-[#E65100] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-xs sm:text-base"
            >
              {loading && (
                <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {loading ? "Updating..." : "Update Information"}
            </Button>
          </ModalFooter>
        </ModalDialog>
      </ModalContainer>
    </Modal>
  );
}
