import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import leftSiteImage from '@/assets/LibraryBenefits.jpg'

const LibraryBenefits = () => {
    return (
        <div className="w-full mb-10 ">
            <div className=" bg-[#1E293B] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col lg:flex-row">

                {/* Image Section */}
                <div className="lg:w-1/2 relative h-80 lg:h-auto overflow-hidden">
                    <Image
                        src={leftSiteImage}
                        alt="Aesthetic Dark Library"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#0F172A]/90 to-[#0F172A]/30 lg:bg-linear-to-t"></div>
                    <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10">
                        <span className="text-[#FB8C00] font-bold tracking-widest text-xs uppercase mb-1 block">Members Favorite</span>
                        <h3 className="text-white text-2xl lg:text-3xl font-bold">Digital First Approach</h3>
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FB8C00] rounded-full blur-[100px] opacity-5 pointer-events-none"></div>

                    <h2 className="text-3xl font-extrabold text-white mb-8 relative z-10">
                        Modern Library <span className="text-[#FB8C00]">Benefits</span>
                    </h2>

                    <div className="space-y-6 mb-12 relative z-10">
                        <div className="flex gap-4">
                            <FaCheckCircle className="text-[#FB8C00] text-xl shrink-0 mt-1" />
                            <div>
                                <h4 className="text-white font-bold mb-1">24/7 Global Access</h4>
                                <p className="text-slate-400 text-sm">Access your library from anywhere in the world, at any time of day or night.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <FaCheckCircle className="text-[#FB8C00] text-xl shrink-0 mt-1" />
                            <div>
                                <h4 className="text-white font-bold mb-1">Huge Collection</h4>
                                <p className="text-slate-400 text-sm">From academic journals to graphic novels, we have it all under one digital roof.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <FaCheckCircle className="text-[#FB8C00] text-xl shrink-0 mt-1" />
                            <div>
                                <h4 className="text-white font-bold mb-1">Multi-Device Syncing</h4>
                                <p className="text-slate-400 text-sm">Start reading on your phone during your commute and finish on your tablet at home.</p>
                            </div>
                        </div>
                    </div>

                    {/*  Animated Border Button */}
                    <Link
                        href="/register"
                        className="relative inline-flex items-center justify-center overflow-hidden rounded-xl p-0.5 w-fit shadow-[0_0_20px_rgba(251,140,0,0.15)] hover:shadow-[0_0_30px_rgba(251,140,0,0.3)] transition-all duration-300 hover:-translate-y-1 group"
                    >
                        {/* Rotating Gradient Background */}
                        <span 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-spin bg-linear-to-r from-transparent via-[#FB8C00] to-transparent opacity-70 group-hover:opacity-100" 
                            style={{ animationDuration: '3s' }} 
                        />
                        
                        {/* Inner Button Area */}
                        <span className="relative z-10 flex h-full w-full items-center justify-center rounded-[10px] bg-[#0F172A] px-8 py-3.5 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-slate-900">
                            Join BookBorrowingToday
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default LibraryBenefits;
