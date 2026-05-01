import React from 'react';
import Marquee from 'react-fast-marquee';

const NoticeMarquee = () => {
    return (
        <div className="flex items-center bg-[#1E293B] border border-white/10 rounded-xl overflow-hidden  mb-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            
            {/* Left Static Label Area */}
            <div className="bg-linear-to-r from-[#FB8C00] to-[#E65100] text-white px-4 md:px-6 py-3.5 flex items-center gap-2 font-bold z-10 shadow-[5px_0_15px_rgba(0,0,0,0.3)] shrink-0 border-r border-[#FB8C00]/50">
                {/* Speaker/Notification Icon with Pulse Animation */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 animate-pulse drop-shadow-md">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>
                <span className="hidden sm:inline whitespace-nowrap uppercase tracking-widest text-sm drop-shadow-sm">Updates</span>
            </div>

            {/* Marquee Area - Scrolling Text */}
            <div className="flex-1 overflow-hidden flex items-center">
                <Marquee 
                    pauseOnHover={true} 
                    speed={50} 
                    gradient={true}
                    gradientColor={[30, 41, 59]} 
                    gradientWidth={40}
                    className="text-slate-300 font-medium text-sm md:text-base overflow-y-hidden"
                >
                    {/* Notice 1 */}
                    <span className="mx-6 md:mx-10 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FB8C00] shadow-[0_0_8px_#FB8C00] animate-pulse"></span>
                        <span className="text-white font-bold tracking-wide">New Arrivals:</span> 
                        &quot;Atomic Habits&quot; and &quot;Deep Work&quot; are now available! 📘
                    </span>
                    
                    {/* Notice 2 */}
                    <span className="mx-6 md:mx-10 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60A5FA]"></span>
                        <span className="text-blue-400 font-bold tracking-wide">Special Offer:</span> 
                        Get 30% Discount on Premium Memberships this weekend! 🎉
                    </span>

                    {/* Notice 3 */}
                    <span className="mx-6 md:mx-10 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ADE80]"></span>
                        <span className="text-green-400 font-bold tracking-wide">Upcoming Event:</span> 
                        Join our Virtual Book Reading Session next Friday! 🎧
                    </span>
                </Marquee>
            </div>
        </div>
    );
};

export default NoticeMarquee;
