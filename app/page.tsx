import Hero from "@/components/home/Hero";
import OurExpertise from "@/components/home/OurExpertise";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainCTA from "@/components/widgets/MainCTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <OurExpertise />
      <MainCTA />
      <Footer />
    </main>
  );
}
