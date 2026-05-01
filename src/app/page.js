import Banner from "@/Components/home/Banner";
import NoticeMarquee from "@/Components/home/NoticeMarquee";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-12">
      <Banner />
      <NoticeMarquee />
      
      {/* 
        Next steps for Home Page:
        - Featured Books Section
        - Extra Section 1
        - Extra Section 2 
      */}
    </div>
  );
}
