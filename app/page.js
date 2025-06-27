"use client"
import { Row, Col } from "react-bootstrap"
import { Container, Accordion } from "react-bootstrap"
import "./page.module.css"
import { Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Image from "next/image"
import HeroSection from "@/components/Home/Hero/hero"
import ServiceSection from "@/components/Home/Services/services"
import AboutUsSection from "@/components/Home/AboutUs/aboutus"
import TechnologySection from "@/components/Home/Technology/technology"
import WhyUsSection from "@/components/Home/Whyus/whyus"
import ClientSection from "@/components/Home/Client/client"
import CaseStudies from "@/components/Home/CaseStudies/caseStudies"
import FaqSection from "@/components/Home/FAQ/faq"

//
export default function WelcomePage() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutUsSection />
      <TechnologySection />
      <WhyUsSection />
      <ClientSection />
      <CaseStudies />
      <FaqSection />
    </div>
  )
}
