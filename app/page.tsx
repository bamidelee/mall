import Image from "next/image";
import HeroSection from "@/components/landingPage/heroSection/heroSection";
import ServiceSection from "@/components/landingPage/serviceSection/serviceSection";
import ShopByCategory from "@/components/landingPage/shopByCategory/shopByCategory";
import PopularProducts from "@/components/landingPage/popularProducts/popularProducts";
import Ads from "@/components/landingPage/ads";
import BestSeller from "@/components/landingPage/bestSeller/bestSeller";
import Discount from "@/components/landingPage/discount/discount";
import Footer from "@/components/landingPage/footer";


export default function Home() {
  return (
    <main className="min-h-screen  lg:py-8 lg:px-16">
      <HeroSection/>
      <ServiceSection/>
      <ShopByCategory/>
      <PopularProducts/>
      <Ads/>
      <BestSeller/>
      <Discount/>
      <Footer/>
    </main>
  );
}
