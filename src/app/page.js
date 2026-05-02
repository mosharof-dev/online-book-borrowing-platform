import Banner from "@/Components/home/Banner";
import NoticeMarquee from "@/Components/home/NoticeMarquee";
import FeaturedBooks from "@/Components/home/FeaturedBooks";
import HowItWorks from "@/Components/home/HowItWorks";
import LibraryBenefits from "@/Components/home/LibraryBenefits";

import TrendingSlider from "@/Components/home/TrendingSlider";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-12">
      <Banner />
      <NoticeMarquee />

      {/* Featured Books Section */}
      <FeaturedBooks />

      {/* Extra Section 1: How It Works */}
      <HowItWorks />
    {/* Extra Section 2: User Reviews  */}
      <TrendingSlider/>
      {/* Extra Section 3: Modern Library Benefits */}
      <LibraryBenefits />

    
    </div>
  );
}
