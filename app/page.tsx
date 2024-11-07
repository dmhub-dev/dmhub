import Hero from "@/components/home/Hero";
import OurExpertise from "@/components/home/OurExpertise";
import Packages from "@/components/home/Packages";
import MainCTA from "@/components/widgets/MainCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurExpertise />
      <Packages />
      <MainCTA />
    </main>
  );
}
