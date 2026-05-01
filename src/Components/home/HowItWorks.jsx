import React from 'react';
import { FaSearch, FaBookOpen, FaTabletAlt } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <FaSearch className="text-3xl text-white" />,
            title: "Browse",
            description: "Search our vast digital catalog of over 50,000 titles across all possible genres.",
            color: "bg-blue-600"
        },
        {
            id: 2,
            icon: <FaBookOpen className="text-3xl text-white" />,
            title: "Borrow",
            description: "Click 'Borrow' and instantly add titles to your personal digital library shelf.",
            color: "bg-[#FB8C00]"
        },
        {
            id: 3,
            icon: <FaTabletAlt className="text-3xl text-white" />,
            title: "Read",
            description: "Read online or download to your favorite device for offline focus anytime.",
            color: "bg-emerald-600"
        }
    ];

    return (
        <div className="w-full mb-10  mt-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    How It <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FB8C00] to-yellow-400">Works</span>
                </h2>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                    Borrowing your favorite books is now easier than ever. Just follow these three simple steps to start reading.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {steps.map((step) => (
                    <div 
                        key={step.id} 
                        className="relative overflow-hidden rounded-xl p-0.5 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(251,140,0,0.15)] group"
                    >
                        
                        <span 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] animate-spin bg-linear-to-r from-transparent via-[#FB8C00] to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500" 
                            style={{ animationDuration: '3s' }} 
                        />
                        
                       
                        <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-transparent transition-colors duration-500"></div>

                        {/* Inner Card */}
                        <div className="relative z-10 bg-[#1E293B] rounded-[22px] p-8 text-center h-full flex flex-col">
                            <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${step.color}`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
