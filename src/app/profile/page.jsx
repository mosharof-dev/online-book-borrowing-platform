"use client";
import React, { useState } from 'react';
import { useSession } from "@/lib/auth-client";
import { Avatar, Button, Card, CardContent, Separator, Skeleton } from "@heroui/react";
import { FaEdit, FaBook, FaClock, FaHeart, FaEnvelope, FaUserAlt } from "react-icons/fa";
import UpdateProfileModal from "@/Components/profile/UpdateProfileModal";

const ProfilePage = () => {
    const { data: session, isPending } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isPending) {
        return (
            <div className="max-w-4xl mx-auto py-6 sm:py-10 px-4">
                <Card className="bg-[#1E293B] border-none rounded-[2rem]">
                    <CardContent className="p-6 sm:p-8">
                        <div className="flex flex-col items-center gap-4">
                            <Skeleton className="rounded-full w-24 h-24 sm:w-32 sm:h-32" />
                            <Skeleton className="h-6 sm:h-8 w-32 sm:w-48 rounded-lg" />
                            <Skeleton className="h-3 sm:h-4 w-48 sm:w-64 rounded-lg" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const { user } = session;

    return (
        <div className="max-w-5xl mx-auto py-8 sm:py-12 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                
                {/* Left Column: Profile Card */}
                <div className="lg:col-span-1">
                    <Card className="bg-[#1E293B]/50 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden rounded-xl">
                        <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                            <div className="relative mb-6">
                                <Avatar className="w-24 h-24 sm:w-32 sm:h-32 ring-4 ring-[#FB8C00]/20 rounded-full overflow-hidden">
                                    {user.image && <Avatar.Image src={user.image} />}
                                    <Avatar.Fallback className="bg-[#FB8C00]/20 text-[#FB8C00] flex items-center justify-center text-2xl sm:text-3xl font-bold">
                                        {user.name.charAt(0).toUpperCase()}
                                    </Avatar.Fallback>
                                </Avatar>
                                
                            </div>
                            
                            <h2 className="flex justify-center items-center gap-2 text-xl sm:text-2xl font-bold text-white mb-1"><FaUserAlt className="text-[#FB8C00]/60 text-base sm:text-lg" /> {user.name}</h2>
                            <p className="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8 flex items-center gap-2">
                                <FaEnvelope className="text-[#FB8C00]/60" />
                                {user.email}
                            </p>

                            <Button 
                                className="w-full bg-[#FB8C00] text-white font-bold py-5 sm:py-6 rounded-2xl shadow-lg shadow-[#FB8C00]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                                onPress={() => setIsModalOpen(true)}
                            >
                                <FaEdit />
                                Update Profile
                            </Button>

                            <Separator className="my-6 sm:my-8 bg-white/5 h-px w-full" />

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
                                <div className="flex flex-col items-center">
                                    <span className="text-lg sm:text-xl font-bold text-white">12</span>
                                    <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-slate-500 font-bold">Read</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-lg sm:text-xl font-bold text-white">4</span>
                                    <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-slate-500 font-bold">Current</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-lg sm:text-xl font-bold text-white">48</span>
                                    <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-slate-500 font-bold">Wishlist</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-2 space-y-6 sm:gap-8">
                    {/* Welcome Banner */}
                    <div className="bg-linear-to-r from-[#FB8C00]/20 to-transparent border border-[#FB8C00]/10 rounded-xl p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Welcome back, {user.name.split(' ')[0]}! 👋</h3>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            Your digital library is growing. You&apos;ve read 12 books this month, which is 3 more than your average. Keep exploring new titles!
                        </p>
                    </div>

                    {/* Cards Sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                         <Card className="bg-[#1E293B]/30 border border-white/5 p-6 hover:border-[#FB8C00]/30 transition-colors rounded-xl">
                            <div className="w-10 h-10 bg-[#FB8C00]/10 rounded-xl flex items-center justify-center text-[#FB8C00] mb-4">
                                <FaBook />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">Borrowed Books</h4>
                            <p className="text-slate-500 text-sm">View and manage your currently borrowed titles.</p>
                        </Card>
                         <Card className="bg-[#1E293B]/30 border border-white/5 p-6 hover:border-[#FB8C00]/30 transition-colors rounded-xl">
                            <div className="w-10 h-10 bg-[#FB8C00]/10 rounded-xl flex items-center justify-center text-[#FB8C00] mb-4">
                                <FaHeart />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">Your Favorites</h4>
                            <p className="text-slate-500 text-sm">A curated list of books you&apos;ve loved reading.</p>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Update Modal */}
            <UpdateProfileModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                user={user}
            />
        </div>
    );
};

export default ProfilePage;