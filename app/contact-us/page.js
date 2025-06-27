"use client";
import ContactFormSection from "@/components/contactus/contactform/contactform";
import HeroSection from "@/components/contactus/Hero/hero";
import ProcessSection from "@/components/contactus/process/process";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//
export default function WelcomePage() {
  return (
    <div>
      <HeroSection />
      <ProcessSection />
      <ContactFormSection />
    </div>
  );
}
