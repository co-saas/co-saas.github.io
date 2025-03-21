// app/page.tsx
"use client";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const handleNull = () => {
    const footer = document.getElementById("footer");
    if (footer) {        
        footer.scrollIntoView();
    }
}

export default function Home() {
  return (
  <>
      <Navbar highlightForm={handleNull}/>
      <Hero />
      <HowItWorks />
      <Pricing />
      <Footer />
  </>
  );
}
