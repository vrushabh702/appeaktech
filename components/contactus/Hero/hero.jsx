"use client";

import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../../../app/page.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="blueBackground bgImage desktop-padding-100 HomeTech">
      <Container>
        <Row>
          <Col md={6} className="mb-2">
            <h1 className="text-white fw-semibold">CONTACT US</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="d-flex">
              <Image
                src="/svg/contactus/mobile-app-development.svg"
                width={50}
                height={50}
                alt="client"
              />
              <h4 className="text-white fw-semibold">
                A close <span className="mil-accent">circle of IT pros</span>{" "}
                who can make your dreams come true
              </h4>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <a
                href="#"
                className="bookNowButton d-inline-flex gap-20 text-white text-decoration-none m-auto"
              >
                Book a Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M1 7H17M17 7L11.4 1M17 7L11.4 13"
                    stroke="#2EDCCF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
