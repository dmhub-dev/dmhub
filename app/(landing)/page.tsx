import AboutUs from "@/components/home/AboutUs";
import CTA from "@/components/home/CTA";
import FeaturesList from "@/components/home/FeaturesList";
import FuneralDirectorsSpotlight from "@/components/home/FuneralDirectorsSpotlight";
import Search from "@/components/home/Search";
import Testimonials from "@/components/home/Testimonials";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen">
        <Hero />
        <Search />
        <FeaturesList />
        <Testimonials />
        <AboutUs />
        {/* <FuneralDirectorsSpotlight /> */}
        <CTA
          title="Voor uitvaartverzorgers"
          description="Wilt u zich aansluiten bij myFunus en ook makkelijk en snel gevonden worden voor het verzorgen van de perfecte uitvaart?"
          linkText="Meer informatie"
          link="/aanmelden"
        />
      </main>
    </>
  );
}
