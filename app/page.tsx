import Hero from "@/components/home/Hero";
import HomeIndustries from "@/components/home/HomeIndustries";
import OurExpertise from "@/components/home/OurExpertise";
import Packages from "@/components/home/Packages";
import Testimonials from "@/components/home/Testimonials";
import MainCTA from "@/components/widgets/MainCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurExpertise />
      <Testimonials />
      <Packages />
      <HomeIndustries />
      <MainCTA />
    </main>
  );
}
