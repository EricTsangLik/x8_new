import Hero from "@/components/home/Hero";
import ClientCarousel from "@/components/home/ClientCarousel";
import Services from "@/components/home/Services";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientCarousel />
      <Services />
      <ContactCTA />
    </>
  );
}