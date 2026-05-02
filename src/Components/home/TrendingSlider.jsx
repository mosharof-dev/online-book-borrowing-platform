"use client";

import React from 'react';
import Image from 'next/image'; 

// Swiper core components
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Review Data
const reviews = [
  {
    id: 1,
    name: "Jenny Wilson",
    rating: 5.0,
    text: "Found the exact 'Clean Code' book I was looking for! The borrowing process is instant, and reading on this platform is a breeze.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Arif Hossain",
    rating: 4.5,
    text: "Their Science Fiction collection is mind-blowing. I borrowed 'Dune' last night, and the reading interface is incredibly smooth.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sadia Rahman",
    rating: 5.0,
    text: "As a computer science student, getting access to premium tech books for free is a blessing. BookBorrow is my go-to library now!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Tanvir Ahmed",
    rating: 4.5,
    text: "Love the category filtering system. It makes finding classic storybooks so much easier. Highly recommend this to all avid readers.",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    rating: 5.0,
    text: "Best digital library experience ever! The dark mode makes reading at night so comfortable without hurting my eyes.",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 6,
    name: "Rahul Dev",
    rating: 5.0,
    text: "I used to buy physical books, but this platform changed my habit. Returning and borrowing new titles is just one click away.",
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

const TrendingSlider = () => {
    return (
       
<section className="w-full py-16 bg-linear-to-b from-[#0F172A] via-[#172540] to-[#0F172A] border border-[#F59E0B]/30  rounded-xl overflow-hidden ">
<div className="max-w-7xl mx-auto px-4 ">

{/* Header Section */}
<div className="text-center mb-12">
    <span className="bg-[#F59E0B]/10 text-[#F59E0B] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-[#F59E0B]/20">
        Reader Feedback
    </span>
    <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
        What Our <span className="text-[#F59E0B] drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">Readers</span> Say
    </h2>
    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Discover why thousands of readers choose BookBorrowing for their daily reading habits.
    </p>
</div>

{/* Swiper Slider  */}
<Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    
    style={{
        '--swiper-pagination-color': '#F59E0B',
        '--swiper-pagination-bullet-inactive-color': '#475569',
    }}
    breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }, 
    }}
    coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
        scale: 0.85,
        slideShadows: true,
    }}
    autoplay={{
        delay: 3500,
        disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    className="mySwiper w-full py-16" 
>
    {reviews.map((review) => (
<SwiperSlide 
 key={review.id} 
 className="bg-transparent h-auto"
        >
            {/* Card Design */}
<div className="bg-[#1E293B] border border-gray-700/60 p-6 md:p-8 rounded-2xl flex flex-col shadow-2xl h-full transition-all duration-300 relative text-left">
                
<div className="flex justify-between items-start mb-5">
    <div className="flex items-center gap-4">
        
        
        <div className="relative w-14 h-14">
            <Image 
                src={review.image} 
                alt={review.name} 
                fill
                sizes="(max-width: 768px) 56px, 56px"
                className="rounded-full object-cover border-2 border-[#F59E0B]"
            />
        </div>
        
        <div>
            <h4 className="text-white font-bold text-lg">{review.name}</h4>
            <div className="flex items-center gap-1.5 mt-1">
                <span className="text-white font-semibold text-sm">{review.rating}</span>
                <div className="flex text-[#F59E0B] text-sm">
                    {"★".repeat(Math.floor(review.rating))}
                    {review.rating % 1 !== 0 ? "★" : ""}
                </div>
            </div>
        </div>
    </div>

    <div className="text-6xl text-[#F59E0B]/20 font-serif leading-none mt-2.5">
        ”
    </div>
</div>
                
                {/* ✅ Quotation marks fixed */}
                <p className="text-gray-300 italic text-[15px] leading-relaxed">
                    &quot;{review.text}&quot;
                </p>

            </div>
        </SwiperSlide>
    ))}
</Swiper>
</div>
        </section>
    );
};

export default TrendingSlider;