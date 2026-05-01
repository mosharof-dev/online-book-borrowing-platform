import Banner from "@/Components/home/Banner";
import NoticeMarquee from "@/Components/home/NoticeMarquee";
import FeaturedBooks from "@/Components/home/FeaturedBooks";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-12">
      <Banner />
      <NoticeMarquee />

      {/* Featured Books Section */}
      <FeaturedBooks />

      {/* 
        Next steps for Home Page:
        - Extra Section 1
        - Extra Section 2 
      */}
    </div>
  );
}
