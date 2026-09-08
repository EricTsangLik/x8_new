import Hero from "@/components/home/Hero";
import ClientCarousel from "@/components/home/ClientCarousel";
import Services from "@/components/home/Services";
import WhyX8 from "@/components/home/WhyX8";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientCarousel />
      <Services />
      <WhyX8 />
      <ContactCTA />
    </>
  );
}