"use client";

import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../../../app/page.module.css";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const HeroSection = () => {
  const TechStack = [
    { name: "Node Js", image: "/media/home/node-js.svg" },
    { name: "React JS", image: "/media/home/React-js.svg" },
    { name: "Laravel", image: "/media/home/laravel.svg" },
    { name: "Shopify", image: "/media/home/shopify.svg" },
    { name: "Wordpress", image: "/media/home/wordpress.svg" },
    { name: "Flutter", image: "/media/home/flutter.webp" },
    { name: "Android", image: "/media/home/android.svg" },
    { name: "Ios", image: "/media/home/ios.svg" },
    { name: "PHP", image: "/media/home/php.svg" },
  ];
  return (
    <section className="blueBackground bgImage desktop-padding-100 HomeTech">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="text-white fw-semibold">
              <span className="mil-accent">Appeak -</span> Where Innovation{" "}
              <span className="mil-accent">Meets Expertise</span>
            </h1>
          </Col>
          <Col md={6}>
            <h5 className="mb-0 text-white line-height">
              Your Reliable Partner in Driving Business Success, Delivering
              Next-Gen IT Solutions for Empowered Growth.
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-5 position-relative">
            <div className="swiper-navigation">
              <div
                className="custom-prev"
                style={{
                  position: "absolute",
                  left: "-60px",
                  top: "20%",
                  // zIndex: 10,
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    transform="matrix(-1 0 0 1 47 0)"
                    stroke="#2EDCCF"
                  />
                  <path
                    d="M32 24H16M16 24L21.6 18M16 24L21.6 30"
                    stroke="#2EDCCF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="custom-next"
                style={{
                  position: "absolute",
                  right: "-60px",
                  top: "20%",
                  // zIndex: 10,
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#2EDCCF"
                  />
                  <path
                    d="M16 24H32M32 24L26.4 18M32 24L26.4 30"
                    stroke="#2EDCCF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={15}
              slidesPerView={6}
              loop={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
            >
              {TechStack.map((tech, index) => (
                <SwiperSlide key={index}>
                  <div className="homeTechslider rounded-10">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={53}
                      height={53}
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      {tech.name}
                    </h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-center">
              <a
                href="#"
                className="bookNowButton d-inline-flex gap-20 text-white text-decoration-none mt-5 m-auto"
              >
                Explore Tech Solutions That Deliver
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
