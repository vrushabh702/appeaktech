"use client"

import { useState } from "react"
import { Row, Col, Tab, Tabs } from "react-bootstrap"
import { Navbar, Nav, Dropdown, Container, Accordion } from "react-bootstrap"
import "./page.module.css"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

export default function WelcomePage() {
  const [key, setKey] = useState("home")

  return (
    <div>
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
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/node-js.svg"
                      alt="Node Js"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      Node Js
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/React-js.svg"
                      alt="React-js"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      React JS
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/laravel.svg"
                      alt="laravel"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      Laravel
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/shopify.svg"
                      alt="shopify"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      Shopify
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/wordpress.svg"
                      alt="wordpress"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      Wordpress
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/flutter.webp"
                      alt="flutter"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      Flutter
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/android.svg"
                      alt="android"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      Android
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/ios.svg"
                      alt="ios"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      Ios
                    </h5>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="homeTechslider rounded-10">
                    <img
                      src="/media/home/php.svg"
                      alt="php"
                      width="53"
                      height="53"
                      className="m-auto"
                    />
                    <h5 className="fw-semibold logo-color text-center mb-2">
                      PHP
                    </h5>
                  </div>
                </SwiperSlide>
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
      <section className="blueBackground section-padding">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="mb-0 text-white text-center text-uppercase fw-semibold">
                Trusted{" "}
                <span className="mil-accent">
                  &nbsp;web and <br />
                </span>
                <span className="mil-accent">mobile app </span>development
                <span className="mil-accent"> company </span>
              </h2>
            </Col>
          </Row>
          <div className="ourServices">
            <div className="position-relative">
              <h2 className="mil-h2 text-white text-uppercase fw-semibold mb-4">
                <span>
                  Our <span className="mil-accent">Services</span>{" "}
                </span>
              </h2>
              <p>
                From our software development services through digital
                technology strategy to expert E-commerce Development and mobile
                app development services, we’re with you every step of the way.
              </p>
            </div>
            <div className="service rounded-10">
              <div className="position-relative">
                <h4 className="mb-0 logo-color d-flex gap-15 fw-semibold">
                  <span>1.</span>{" "}
                  <span>
                    E-commerce
                    <br /> Development
                  </span>
                </h4>
                <div className="roundshape">
                  <img src={"/media/home/Frame.svg"} />
                </div>
              </div>
              <span className="logo-color">
                <hr />
              </span>
              <div>
                <p className="text-white mb-4">
                  Our e-commerce web developer creates bespoke, feature-rich
                  e-commerce solutions that deliver seamless and compelling
                  experiences for your shoppers. We have a unique way of
                  matching what your customers expect with our tech skills. This
                  helps you provide engaging, flexible, safe, and strong online
                  shopping solutions.
                </p>
                <a href="#" className="logo-color d-block text-end">
                  See Our Ecommerce Expertise{" "}
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
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="service rounded-10">
              <div className="position-relative">
                <h4 className="mb-0 logo-color d-flex gap-15 fw-semibold">
                  <span>2.</span>{" "}
                  <span>
                    Web
                    <br /> Development
                  </span>
                </h4>
                <div className="roundshape">
                  <img
                    src={"/media/home/web-development.webp"}
                    alt="web-development"
                  />
                </div>
              </div>
              <span className="logo-color">
                <hr />
              </span>
              <div>
                <p className="text-white mb-4">
                  Appeak web developers craft client-centric website solutions,
                  prioritizing customer needs and delivering tangible business
                  results in the dynamic digital landscape. We develop websites
                  for high-performing, user-friendly, advanced functional
                  experiences for our customers. Give your business the boost it
                  needs for scalability.
                </p>
                <a href="#" className="logo-color d-block text-end">
                  Explore Website Development Services{" "}
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
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="service rounded-10">
              <div className="position-relative">
                <h4 className="mb-0 logo-color d-flex gap-15 fw-semibold">
                  <span>3.</span>{" "}
                  <span>
                    Mobile
                    <br /> Application
                  </span>
                </h4>
                <div className="roundshape">
                  <img
                    src={"/media/home/mobile-application.webp"}
                    alt="mobile-application"
                  />
                </div>
              </div>
              <span className="logo-color">
                <hr />
              </span>
              <div>
                <p className="text-white mb-4">
                  Appeak offers full-cycle mobile app development. We offer
                  product design, mobile app consulting, design, and development
                  with full-time maintenance and support. Our skilled team
                  focuses on making strong and flexible mobile apps that set new
                  standards in the mobile world. We can help you confidently
                  navigate the changing mobile world and grab…
                </p>
                <a href="#" className="logo-color d-block text-end">
                  Explore Custom Mobile App Solutions
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
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="service rounded-10">
              <div className="position-relative">
                <h4 className="mb-0 logo-color d-flex gap-15 fw-semibold">
                  <span>4.</span>{" "}
                  <span>
                    Software
                    <br /> Development
                  </span>
                </h4>
                <div className="roundshape">
                  <img
                    src={"/media/home/software-development.webp"}
                    alt="software-development"
                  />
                </div>
              </div>
              <span className="logo-color">
                <hr />
              </span>
              <div>
                <p className="text-white mb-4">
                  Appeak offers everything you need for software development.
                  Whether it’s planning your IT strategy, mapping out the
                  technology you’ll use, or creating scalable solutions from
                  start to finish, we’ve got you covered. Our services adjust
                  easily to what you need for your project and your business.
                </p>
                <a href="#" className="logo-color d-block text-end">
                  Explore Our Software Services
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
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="service rounded-10">
              <div className="position-relative">
                <h4 className="mb-0 logo-color d-flex gap-15 fw-semibold">
                  <span>5.</span>{" "}
                  <span>
                    Web
                    <br /> Design
                  </span>
                </h4>
                <div className="roundshape">
                  <img src={"/media/home/web-design.webp"} alt="web-design" />
                </div>
              </div>
              <span className="logo-color">
                <hr />
              </span>
              <div>
                <p className="text-white mb-4">
                  Your website is the online foundation of your business. Get
                  website design services with Appeak that maximize conversion,
                  engagement, and traffic. Build a mobile-friendly website with
                  stunning designs and layouts that work the best to scale your
                  business. With our expert team create a website that is easy
                  to navigate, catches your potential customer’s attention….
                </p>
                <a href="#" className="logo-color d-block text-end">
                  Explore UI/UX Solutions
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
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="blueBackground section-padding">
        <Container>
          <Row className="mb-4">
            <Col md={5}>
              <h2 className="mil-h2 text-white text-uppercase fw-semibold mb-4">
                <span>
                  About <span className="mil-accent">Us</span>{" "}
                </span>
              </h2>
              <h5 className="text-white line-height">
                Every project is different and we might spend more or less time
                on each element, but you can expect yours to play out something
                like this.
              </h5>
              <ul className="logo-color customList">
                <li>Discovery</li>
                <li>Built</li>
                <li>Support</li>
              </ul>
              <h5 className="text-white line-height">
                Our tailored apps and web services have some unique features
                that form the core of our values i.e. all of our sites are
                optimized for easy SEO recognition based on the latest search
                engine algorithm updates.
              </h5>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <h2 className="mil-h2 text-white fw-semibold mb-5">
                <span>
                  Accelerate<span className="mil-accent"> Innovation </span>{" "}
                  with world className tech teams We’ll match you to an entire
                  <span className="mil-accent"> Remote Technology</span>{" "}
                </span>
              </h2>
              <h5 className="text-white line-height">
                We are a creative and emerging software development consulting
                company with 80+ satisfied and happy clients with 25+
                strategists, marketers, and multi-industry mobile app
                developers. With more than 4 years of experience in multiple
                fields and the expense to develop complex e-commerce development
                services, apps, and other tools with leading technologies and
                web development software we have handled more than 300 projects.
              </h5>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={3}>
              <div className="counterBox rounded-15 d-flex mt-4 gap-15 justify-content-between position-relative overflow-hidden">
                <div>
                  <h2 className="logo-color fw-bold mb-3">80+</h2>
                  <h6 className="text-white mb-0">Client Success Stories</h6>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="53"
                      height="53"
                      rx="26.5"
                      fill="#021D3D"
                    ></rect>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="53"
                      height="53"
                      rx="26.5"
                      stroke="#20528D"
                    ></rect>
                    <path
                      d="M26.4425 27.5592C29.8333 27.5592 32.5822 24.8104 32.5822 21.4195C32.5822 18.0286 29.8333 15.2798 26.4425 15.2798C23.0516 15.2798 20.3027 18.0286 20.3027 21.4195C20.3027 24.8104 23.0516 27.5592 26.4425 27.5592Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.5486 38.4844C32.7056 38.6412 32.9184 38.7292 33.1402 38.7292C33.3621 38.7292 33.5749 38.6412 33.7319 38.4844L37.8946 34.3217C38.6028 33.6123 39.0006 32.651 39.0006 31.6487C39.0006 30.6463 38.6028 29.685 37.8946 28.9756C37.2786 28.3605 36.4694 27.9766 35.6034 27.8886C34.7373 27.8005 33.8674 28.0137 33.1402 28.4923C32.4131 28.0137 31.5431 27.8005 30.6771 27.8886C29.811 27.9766 29.0018 28.3605 28.3858 28.9756C27.6808 29.6822 27.2834 30.6387 27.2803 31.6368C27.2772 32.635 27.6685 33.594 28.3691 34.3049L32.5486 38.4844Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.663 38.1776L27.5741 35.0887C26.7239 34.2266 26.2231 33.0801 26.1683 31.8705C26.1135 30.6609 26.5085 29.4738 27.2772 28.5382C27.0015 28.5271 26.7235 28.5215 26.4422 28.5215C22.7338 28.5215 19.4507 29.4491 17.4123 30.8389C15.8573 31.8994 15 33.2468 15 34.6612V36.2799C15.0006 36.783 15.2007 37.2653 15.5565 37.6211C15.9123 37.9769 16.3946 38.177 16.8977 38.1776H30.663Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="counterBox rounded-15 d-flex mt-4 gap-15 justify-content-between position-relative overflow-hidden">
                <div>
                  <h2 className="logo-color fw-bold mb-3">300+</h2>
                  <h6 className="text-white mb-0">Project Delivered</h6>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="53"
                      height="53"
                      rx="26.5"
                      fill="#021D3D"
                    ></rect>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="53"
                      height="53"
                      rx="26.5"
                      stroke="#20528D"
                    ></rect>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.7682 18.0697V32.1191C36.7682 32.6371 36.5628 33.1338 36.1955 33.5L31.2683 38.4272C31.0871 38.6088 30.8719 38.7529 30.6349 38.8512C30.398 38.9494 30.144 39 29.8875 38.9998H20.3031C19.4894 38.9998 18.708 38.6761 18.132 38.1012C17.5569 37.525 17.2337 36.7442 17.2334 35.9301V18.0697C17.2334 17.256 17.5571 16.4746 18.132 15.8986C18.7082 15.3235 19.489 15.0003 20.3031 15H33.6984C34.5122 15 35.2936 15.3237 35.8696 15.8986C36.4444 16.4746 36.7682 17.256 36.7682 18.0697ZM29.7915 37.0464L34.8147 32.0231H30.9077C30.6117 32.0231 30.3277 32.1407 30.1184 32.3501C29.9091 32.5594 29.7915 32.8434 29.7915 33.1394V37.0464ZM22.5357 21.1395H31.4659C31.6879 21.1395 31.9008 21.0513 32.0579 20.8943C32.2149 20.7373 32.3031 20.5243 32.3031 20.3023C32.3031 20.0802 32.2149 19.8673 32.0579 19.7103C31.9008 19.5533 31.6879 19.4651 31.4659 19.4651H22.5357C22.3136 19.4651 22.1007 19.5533 21.9437 19.7103C21.7867 19.8673 21.6985 20.0802 21.6985 20.3023C21.6985 20.5243 21.7867 20.7373 21.9437 20.8943C22.1007 21.0513 22.3136 21.1395 22.5357 21.1395ZM22.5357 34.5348H26.4426C26.6647 34.5348 26.8776 34.4465 27.0346 34.2895C27.1916 34.1325 27.2798 33.9196 27.2798 33.6975C27.2798 33.4755 27.1916 33.2626 27.0346 33.1056C26.8776 32.9485 26.6647 32.8603 26.4426 32.8603H22.5357C22.3136 32.8603 22.1007 32.9485 21.9437 33.1056C21.7867 33.2626 21.6985 33.4755 21.6985 33.6975C21.6985 33.9196 21.7867 34.1325 21.9437 34.2895C22.1007 34.4465 22.3136 34.5348 22.5357 34.5348ZM22.5357 30.0697H28.117C28.3391 30.0697 28.552 29.9815 28.709 29.8245C28.866 29.6674 28.9542 29.4545 28.9542 29.2325C28.9542 29.0104 28.866 28.7975 28.709 28.6405C28.552 28.4835 28.3391 28.3953 28.117 28.3953H22.5357C22.3136 28.3953 22.1007 28.4835 21.9437 28.6405C21.7867 28.7975 21.6985 29.0104 21.6985 29.2325C21.6985 29.4545 21.7867 29.6674 21.9437 29.8245C22.1007 29.9815 22.3136 30.0697 22.5357 30.0697ZM22.5357 25.6046H31.4659C31.6879 25.6046 31.9008 25.5164 32.0579 25.3594C32.2149 25.2024 32.3031 24.9894 32.3031 24.7674C32.3031 24.5453 32.2149 24.3324 32.0579 24.1754C31.9008 24.0184 31.6879 23.9302 31.4659 23.9302H22.5357C22.3136 23.9302 22.1007 24.0184 21.9437 24.1754C21.7867 24.3324 21.6985 24.5453 21.6985 24.7674C21.6985 24.9894 21.7867 25.2024 21.9437 25.3594C22.1007 25.5164 22.3136 25.6046 22.5357 25.6046Z"
                      fill="#F5FEFE"
                    ></path>
                  </svg>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="counterBox rounded-15 d-flex mt-4 gap-15 justify-content-between position-relative overflow-hidden">
                <div>
                  <h2 className="logo-color fw-bold mb-3">5+</h2>
                  <h6 className="text-white mb-0">Years Leading the Way</h6>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="53"
                      height="53"
                      rx="26.5"
                      fill="#021D3D"
                    ></rect>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="53"
                      height="53"
                      rx="26.5"
                      stroke="#20528D"
                    ></rect>
                    <path
                      d="M27.0004 12C20.673 12 15.5254 17.1477 15.5254 23.475C15.5254 29.8023 20.6731 34.95 27.0004 34.95C33.3277 34.95 38.4754 29.8023 38.4754 23.475C38.4754 17.1477 33.3278 12 27.0004 12ZM32.3851 30.8864L27.0004 28.3382L21.6157 30.8864L22.3752 24.9779L18.2878 20.6442L24.1418 19.5407L27.0004 14.314L29.8589 19.5406L35.713 20.6441L31.6256 24.9778L32.3851 30.8864Z"
                      fill="#F5FEFE"
                    ></path>
                    <path
                      d="M28.7157 21.1141L27.0003 17.9775L25.2848 21.1141L21.7717 21.7763L24.2246 24.377L23.7688 27.9229L27.0003 26.3937L30.2317 27.9229L29.7759 24.377L32.2289 21.7763L28.7157 21.1141ZM18.9844 37.9837C19.7599 37.8712 20.5059 37.6075 21.1798 37.2077V35.3658C20.4051 34.9855 19.6698 34.5299 18.9844 34.0056V37.9837ZM32.8208 37.2077C33.4947 37.6075 34.2407 37.8712 35.0162 37.9837V34.0056C34.3308 34.5299 33.5954 34.9855 32.8208 35.3658V37.2077ZM22.9376 36.0749V42.0002C24.2389 41.8123 25.4355 41.2079 26.3726 40.2518L27.0003 39.6115L27.6279 40.2518C28.5651 41.2078 29.7616 41.8123 31.0629 42.0002V36.0749C29.7672 36.4912 28.4005 36.708 27.0003 36.708C25.6001 36.708 24.2334 36.4912 22.9376 36.0749Z"
                      fill="#F5FEFE"
                    ></path>
                  </svg>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="counterBox rounded-15 d-flex mt-4 gap-15 justify-content-between position-relative overflow-hidden">
                <div>
                  <h2 className="logo-color fw-bold mb-3">25+</h2>
                  <h6 className="text-white mb-0">Tech Experts Onboard</h6>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="53"
                      height="53"
                      rx="26.5"
                      fill="#021D3D"
                    ></rect>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="53"
                      height="53"
                      rx="26.5"
                      stroke="#20528D"
                    ></rect>
                    <path
                      d="M39.2875 30.4799V28.7127H31.1407C31.1407 30.9994 29.2869 32.8532 27.0002 32.8532C24.7134 32.8532 22.8597 30.9995 22.8597 28.7127H14.7129V30.4799L18.2505 30.8545C18.4683 31.7467 18.822 32.6 19.2993 33.3845L17.0621 36.1515L19.5614 38.6508L22.3284 36.4136C23.1129 36.8909 23.9662 37.2446 24.8584 37.4624L25.233 41H28.7674L29.142 37.4624C30.0341 37.2446 30.8874 36.8909 31.672 36.4136L34.439 38.6508L36.9383 36.1515L34.7011 33.3845C35.1784 32.6 35.5321 31.7467 35.7499 30.8545L39.2875 30.4799ZM27.0002 13C25.2502 13 23.8265 14.4237 23.8265 16.1737C23.8265 17.9236 25.2502 19.3473 27.0002 19.3473C28.7501 19.3473 30.1739 17.9236 30.1739 16.1737C30.1739 14.4237 28.7501 13 27.0002 13ZM30.3792 20.2247H23.6212C22.0654 20.2248 20.7997 21.4905 20.7997 23.0463V27.072H33.2007V23.0463C33.2007 21.4905 31.935 20.2247 30.3792 20.2247ZM20.2674 14.4661C18.6998 14.4661 17.4244 15.7415 17.4244 17.3091C17.4244 18.8641 18.6795 20.1309 20.2299 20.1512C20.8719 19.4002 21.7578 18.8642 22.7643 18.6676C22.992 18.251 23.111 17.7838 23.1105 17.3091C23.1105 15.7414 21.8351 14.4661 20.2674 14.4661ZM17.2405 20.9381C15.8468 20.9381 14.7129 22.0719 14.7129 23.4657V27.0721H19.159V23.0463C19.1582 22.3104 19.3406 21.5859 19.6897 20.9381H17.2405ZM33.7329 14.4661C32.1653 14.4661 30.8899 15.7415 30.8899 17.3091C30.8893 17.7838 31.0084 18.251 31.2361 18.6676C32.2426 18.8642 33.1285 19.4002 33.7705 20.1512C35.3208 20.1309 36.576 18.8641 36.576 17.3091C36.576 15.7414 35.3006 14.4661 33.7329 14.4661ZM36.7599 20.9381H34.3107C34.6598 21.5859 34.8421 22.3104 34.8413 23.0463V27.072H39.2875V23.4657C39.2875 22.0719 38.1536 20.9381 36.7599 20.9381Z"
                      fill="#F5FEFE"
                    ></path>
                  </svg>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-5">
              <a
                href="#"
                className="bookNowButton d-inline-flex gap-20 text-white text-decoration-none"
              >
                Discover Our DNA
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
                  ></path>{" "}
                </svg>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="lightbluebg desktop-padding-100">
        <Container>
          <Row>
            <Col md={10}>
              <h2 className="mil-h2 fw-semibold text-white mb-30">
                <span>
                  Driving<span className="mil-accent"> Business </span> Triumph
                  Through<span className="mil-accent"> Technology</span>
                </span>
              </h2>
              <h5 className="text-white line-height">
                Empower your business with cutting-edge technology solutions
                tailored to your needs. From streamlined operations to enhanced
                customer experiences, our tech-driven approach ensures your
                success. Harness the latest innovations and stay ahead in
                today’s dynamic market landscape. Discover the transformative
                potential of technology for your business growth.
              </h5>
            </Col>
            <Col md={2}>
              <img
                src="/media/home/readmore.webp"
                alt="reamore"
                width="100%"
                height="auto"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="technologytabs">
                <Tab.Container id="" defaultActiveKey="frontend">
                  <Row>
                    <Col sm={12}>
                      <Nav
                        variant="pills"
                        className="list gap-30 justify-content-center mt-5 mb-5"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="frontend">
                            <div className="tech">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="55"
                                height="55"
                                viewBox="0 0 55 55"
                                fill="none"
                              >
                                <rect
                                  x="0.600488"
                                  y="0.911035"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  fill="#021D3D"
                                ></rect>
                                <rect
                                  x="0.600488"
                                  y="0.911035"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  stroke="#20528D"
                                  strokeWidth="0.829882"
                                ></rect>
                                <g clipPath="url(#clip0_300_953)">
                                  <path
                                    d="M31.9663 37.6421C31.7475 37.9976 31.3686 38.2085 30.9467 38.2085H23.9545C23.5327 38.2085 23.1538 37.9976 22.935 37.6421C22.7241 37.2944 22.7045 36.8726 22.892 36.5093L23.6186 35.0835H31.2827L32.0092 36.5093C32.1967 36.8726 32.1772 37.2944 31.9663 37.6421Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M27.0601 19.0679H18.4663C18.0348 19.0679 17.6851 19.4176 17.6851 19.8491V23.7554C17.6851 24.1868 18.0348 24.5366 18.4663 24.5366H27.0601C27.4915 24.5366 27.8413 24.1868 27.8413 23.7554V19.8491C27.8413 19.4176 27.4915 19.0679 27.0601 19.0679Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M21.5913 25.3179H18.4663C18.0348 25.3179 17.6851 25.6676 17.6851 26.0991V29.2241C17.6851 29.6556 18.0348 30.0054 18.4663 30.0054H21.5913C22.0228 30.0054 22.3726 29.6556 22.3726 29.2241V26.0991C22.3726 25.6676 22.0228 25.3179 21.5913 25.3179Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M27.0601 25.3179H23.9351C23.5036 25.3179 23.1538 25.6676 23.1538 26.0991V29.2241C23.1538 29.6556 23.5036 30.0054 23.9351 30.0054H27.0601C27.4915 30.0054 27.8413 29.6556 27.8413 29.2241V26.0991C27.8413 25.6676 27.4915 25.3179 27.0601 25.3179Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M36.8257 30.0054H30.9663C30.7515 30.0054 30.5757 29.8296 30.5757 29.6147C30.5757 29.3999 30.7515 29.2241 30.9663 29.2241H36.8257C37.0405 29.2241 37.2163 29.3999 37.2163 29.6147C37.2163 29.8296 37.0405 30.0054 36.8257 30.0054ZM36.8257 28.0522H30.9663C30.7515 28.0522 30.5757 27.8765 30.5757 27.6616C30.5757 27.4468 30.7515 27.271 30.9663 27.271H36.8257C37.0405 27.271 37.2163 27.4468 37.2163 27.6616C37.2163 27.8765 37.0405 28.0522 36.8257 28.0522ZM36.8257 26.0991H30.9663C30.7515 26.0991 30.5757 25.9233 30.5757 25.7085C30.5757 25.4937 30.7515 25.3179 30.9663 25.3179H36.8257C37.0405 25.3179 37.2163 25.4937 37.2163 25.7085C37.2163 25.9233 37.0405 26.0991 36.8257 26.0991Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M37.2163 17.1147H17.6851C16.6069 17.1147 15.7319 17.9897 15.7319 19.0679V32.3491C15.7319 33.4272 16.6069 34.3022 17.6851 34.3022H37.2163C38.2944 34.3022 39.1694 33.4272 39.1694 32.3491V19.0679C39.1694 17.9897 38.2944 17.1147 37.2163 17.1147ZM16.5132 31.1772V19.0679C16.5132 18.4233 17.0405 17.896 17.6851 17.896H28.6226V31.1772H16.5132ZM38.3882 31.1772H29.4038V17.896H37.2163C37.8608 17.896 38.3882 18.4233 38.3882 19.0679V31.1772Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M35.6538 23.3648C35.5718 23.3648 35.4898 23.3375 35.4194 23.2867C35.2476 23.1578 35.2124 22.9117 35.3413 22.7398L36.3374 21.4117L35.3413 20.0836C35.2124 19.9117 35.2476 19.6656 35.4194 19.5367C35.5913 19.4078 35.8374 19.4429 35.9663 19.6148L37.1382 21.1773C37.2437 21.3179 37.2437 21.5054 37.1382 21.6461L35.9663 23.2086C35.8882 23.3101 35.771 23.3648 35.6538 23.3648ZM31.7476 23.3648C31.6304 23.3648 31.5132 23.3101 31.4351 23.2086L30.2632 21.6461C30.2119 21.5787 30.1841 21.4964 30.1841 21.4117C30.1841 21.327 30.2119 21.2447 30.2632 21.1773L31.4351 19.6148C31.564 19.4429 31.8101 19.4078 31.9819 19.5367C32.1538 19.6656 32.189 19.9117 32.0601 20.0836L31.064 21.4117L32.0601 22.7398C32.189 22.9117 32.1538 23.1578 31.9819 23.2867C31.9116 23.3375 31.8296 23.3648 31.7476 23.3648ZM33.3101 23.3648C33.2788 23.3648 33.2476 23.3648 33.2163 23.3531C33.1159 23.3282 33.0294 23.2644 32.976 23.1758C32.9225 23.0871 32.9064 22.9809 32.9312 22.8804L33.7124 19.7554C33.7404 19.6584 33.805 19.576 33.8924 19.5256C33.9799 19.4751 34.0835 19.4604 34.1815 19.4847C34.2795 19.5089 34.3644 19.5702 34.4182 19.6557C34.472 19.7411 34.4907 19.8441 34.4702 19.9429L33.689 23.0679C33.646 23.2476 33.4859 23.3648 33.3101 23.3648Z"
                                    fill="white"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_300_953">
                                    <rect
                                      width="25"
                                      height="25"
                                      fill="white"
                                      transform="translate(14.9507 15.1616)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <h6 className="mb-0 text-white fw-semibold mt-3 line-height">
                                Front End <br />
                                Development
                              </h6>
                            </div>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="backend">
                            <div className="tech">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="55"
                                viewBox="0 0 56 55"
                                fill="none"
                              >
                                <rect
                                  x="0.942285"
                                  y="0.911035"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  fill="#021D3D"
                                ></rect>
                                <rect
                                  x="0.942285"
                                  y="0.911035"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  stroke="#20528D"
                                  strokeWidth="0.829882"
                                ></rect>
                                <path
                                  d="M37.855 16.9043H17.73C17.1499 16.9045 16.5936 17.1433 16.1834 17.5681C15.7733 17.993 15.5427 18.5691 15.5425 19.1699V21.8751H40.0425V19.1699C40.0422 18.5691 39.8117 17.993 39.4015 17.5681C38.9913 17.1433 38.4351 16.9045 37.855 16.9043ZM27.3944 19.8451H19.0906C18.9746 19.8451 18.8633 19.7973 18.7812 19.7124C18.6992 19.6274 18.6531 19.5121 18.6531 19.392C18.6531 19.2718 18.6992 19.1565 18.7812 19.0715C18.8633 18.9866 18.9746 18.9388 19.0906 18.9388H27.3944C27.5104 18.9388 27.6217 18.9866 27.7037 19.0715C27.7858 19.1565 27.8319 19.2718 27.8319 19.392C27.8319 19.5121 27.7858 19.6274 27.7037 19.7124C27.6217 19.7973 27.5104 19.8451 27.3944 19.8451ZM31.4194 19.8949C31.3227 19.8954 31.2281 19.8661 31.1475 19.8107C31.067 19.7554 31.0041 19.6765 30.9669 19.5841C30.9297 19.4917 30.9199 19.3899 30.9386 19.2917C30.9574 19.1935 31.0039 19.1032 31.0722 19.0324C31.1406 18.9616 31.2277 18.9135 31.3225 18.8941C31.4174 18.8746 31.5156 18.8848 31.6049 18.9234C31.6941 18.9619 31.7702 19.027 31.8237 19.1104C31.8771 19.1938 31.9054 19.2918 31.905 19.392C31.9045 19.5252 31.8532 19.6529 31.7622 19.7471C31.6713 19.8413 31.548 19.8944 31.4194 19.8949ZM33.7119 19.8949C33.6152 19.8954 33.5206 19.8661 33.44 19.8107C33.3595 19.7554 33.2966 19.6765 33.2594 19.5841C33.2222 19.4917 33.2124 19.3899 33.2311 19.2917C33.2499 19.1935 33.2964 19.1032 33.3647 19.0324C33.4331 18.9616 33.5202 18.9135 33.615 18.8941C33.7099 18.8746 33.8081 18.8848 33.8974 18.9234C33.9866 18.9619 34.0627 19.027 34.1162 19.1104C34.1696 19.1938 34.1979 19.2918 34.1975 19.392C34.197 19.5252 34.1457 19.6529 34.0547 19.7471C33.9638 19.8413 33.8405 19.8944 33.7119 19.8949ZM36.0044 19.8949C35.9079 19.8945 35.8137 19.8644 35.7337 19.8085C35.6537 19.7526 35.5916 19.6734 35.555 19.5809C35.5185 19.4884 35.5093 19.3868 35.5285 19.2889C35.5478 19.191 35.5946 19.1012 35.6632 19.0308C35.7317 18.9605 35.8188 18.9128 35.9135 18.8937C36.0082 18.8747 36.1063 18.8851 36.1952 18.9238C36.2842 18.9624 36.3601 19.0275 36.4134 19.1109C36.4666 19.1942 36.4948 19.292 36.4944 19.392C36.4941 19.4583 36.4813 19.524 36.4565 19.5852C36.4317 19.6464 36.3956 19.702 36.3501 19.7487C36.3045 19.7954 36.2506 19.8324 36.1913 19.8575C36.1319 19.8825 36.0684 19.8953 36.0044 19.8949ZM15.5425 22.7813V36.153C15.5427 36.7539 15.7733 37.33 16.1834 37.7548C16.5936 38.1797 17.1499 38.4184 17.73 38.4187H37.855C38.4351 38.4184 38.9913 38.1797 39.4015 37.7548C39.8117 37.33 40.0422 36.7539 40.0425 36.153V22.7813H15.5425ZM30.5837 27.3941C30.4984 27.3124 30.448 27.199 30.4435 27.0787C30.439 26.9585 30.4808 26.8413 30.5597 26.753C30.6386 26.6646 30.7481 26.6124 30.8642 26.6077C30.9803 26.603 31.0934 26.6463 31.1787 26.728L34.6744 30.0766C34.7183 30.1199 34.7533 30.1719 34.7774 30.2295C34.8014 30.2871 34.814 30.3492 34.8144 30.412C34.814 30.4741 34.8014 30.5354 34.7773 30.5923C34.7532 30.6492 34.7182 30.7004 34.6744 30.7427L31.1787 34.0959C31.0967 34.1712 30.9909 34.2131 30.8812 34.2137C30.7936 34.2134 30.7081 34.1858 30.6358 34.1346C30.5634 34.0833 30.5076 34.0108 30.4756 33.9263C30.4435 33.8418 30.4367 33.7494 30.456 33.6608C30.4753 33.5723 30.5198 33.4918 30.5837 33.4298L33.7294 30.412L30.5837 27.3941ZM25.7844 35.5323L28.8031 25.4049C28.8197 25.3479 28.8471 25.2948 28.8837 25.2488C28.9203 25.2028 28.9653 25.1648 29.0162 25.137C29.0671 25.1092 29.1228 25.0921 29.1801 25.0867C29.2374 25.0814 29.2951 25.0879 29.35 25.1059C29.4604 25.142 29.5525 25.2217 29.6066 25.3277C29.6606 25.4337 29.6722 25.5575 29.6387 25.6723L26.62 35.7996C26.5926 35.8916 26.5374 35.972 26.4626 36.0291C26.3878 36.0862 26.2973 36.1169 26.2044 36.1168C26.16 36.1175 26.1158 36.1114 26.0731 36.0987C25.9627 36.0626 25.8705 35.9829 25.8165 35.8768C25.7625 35.7708 25.7509 35.647 25.7844 35.5323ZM20.9106 30.0766L24.4062 26.728C24.4915 26.6463 24.6046 26.603 24.7207 26.6077C24.8368 26.6124 24.9464 26.6646 25.0253 26.753C25.1042 26.8413 25.146 26.9585 25.1415 27.0787C25.137 27.199 25.0865 27.3124 25.0012 27.3941L21.8556 30.412L25.0012 33.4298C25.0652 33.4918 25.1097 33.5723 25.129 33.6608C25.1483 33.7494 25.1415 33.8418 25.1094 33.9263C25.0773 34.0108 25.0215 34.0833 24.9492 34.1346C24.8769 34.1858 24.7914 34.2134 24.7037 34.2137C24.594 34.2131 24.4883 34.1712 24.4062 34.0959L20.9106 30.7427C20.8668 30.7004 20.8317 30.6492 20.8077 30.5923C20.7836 30.5354 20.771 30.4741 20.7706 30.412C20.7709 30.3492 20.7835 30.2871 20.8076 30.2295C20.8316 30.1719 20.8667 30.1199 20.9106 30.0766Z"
                                  fill="white"
                                ></path>
                              </svg>
                              <h6 className="mb-0 text-white fw-semibold mt-3 line-height">
                                Back End <br />
                                Development
                              </h6>
                            </div>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="ecommerce">
                            <div className="tech">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="55"
                                viewBox="0 0 56 55"
                                fill="none"
                              >
                                <rect
                                  x="0.941308"
                                  y="0.910546"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  fill="#021D3D"
                                ></rect>
                                <rect
                                  x="0.941308"
                                  y="0.910546"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  stroke="#20528D"
                                  strokeWidth="0.829882"
                                ></rect>
                                <path
                                  d="M37.4821 15.9473H18.1008C16.6833 15.9473 15.5327 17.1801 15.5327 18.6988V21.7223H40.0502V18.6988C40.0502 17.1801 38.8996 15.9473 37.4821 15.9473ZM19.0415 20.0676C18.4552 20.0676 17.9827 19.5613 17.9827 18.9332C17.9827 18.3051 18.4552 17.8035 19.0415 17.8035C19.6277 17.8035 20.0958 18.3098 20.0958 18.9332C20.0958 19.5566 19.6233 20.0676 19.0415 20.0676ZM22.4671 20.0676C21.8808 20.0676 21.4083 19.5613 21.4083 18.9332C21.4083 18.3051 21.8808 17.8035 22.4671 17.8035C23.0533 17.8035 23.5215 18.3098 23.5215 18.9332C23.5215 19.5566 23.049 20.0676 22.4671 20.0676ZM37.1627 19.402H25.6696C25.429 19.402 25.2321 19.191 25.2321 18.9332C25.2321 18.6754 25.429 18.4645 25.6696 18.4645H37.1627C37.4033 18.4645 37.6002 18.6754 37.6002 18.9332C37.6002 19.191 37.4033 19.402 37.1627 19.402ZM29.4452 25.5895C29.4452 25.0223 29.0165 24.5629 28.4871 24.5629H27.0215C26.4921 24.5629 26.0633 25.0223 26.0633 25.5895V26.7941H29.4452V25.5895Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M15.5327 22.6597V36.6237C15.5327 38.1425 16.6833 39.3753 18.1008 39.3753H37.4865C38.904 39.3753 40.0546 38.1425 40.0546 36.6237V22.6597H15.5327ZM31.5846 36.5675H23.994C23.2415 36.5675 22.629 35.9112 22.629 35.105L23.1715 27.38C23.1933 27.0519 23.4515 26.794 23.7577 26.794H24.309V28.5378C24.309 28.7956 24.5058 29.0065 24.7465 29.0065C24.9871 29.0065 25.184 28.7956 25.184 28.5378V25.5894C25.184 24.5065 26.0065 23.6253 27.0171 23.6253H28.4827C29.4933 23.6253 30.3158 24.5065 30.3158 25.5894V28.5378C30.3158 28.7956 30.5127 29.0065 30.7533 29.0065C30.994 29.0065 31.1908 28.7956 31.1908 28.5378V26.794H31.8165C32.1271 26.794 32.3808 27.0472 32.4027 27.38L32.6302 30.6144L32.2015 30.4315C31.9644 30.3309 31.7023 30.3202 31.4588 30.4012C31.2152 30.4822 31.0049 30.65 30.8627 30.8769C30.6527 31.205 30.609 31.6222 30.7446 31.9972L32.3371 36.3284C32.1227 36.4831 31.8646 36.5722 31.589 36.5722L31.5846 36.5675ZM36.734 36.0284L35.9727 36.844C35.9253 36.8936 35.8617 36.9213 35.7955 36.9213C35.7293 36.9213 35.6657 36.8936 35.6183 36.844L34.4721 35.6159L33.6977 36.4456C33.5708 36.5815 33.3521 36.5347 33.2865 36.3565L31.5583 31.6503C31.4796 31.43 31.6808 31.219 31.8821 31.3034L36.2746 33.155C36.4408 33.2253 36.489 33.4597 36.3577 33.5956L35.5833 34.4253L36.7296 35.6534C36.8258 35.7565 36.8258 35.93 36.7296 36.0331L36.734 36.0284Z"
                                  fill="white"
                                ></path>
                              </svg>
                              <h6 className="mb-0 text-white fw-semibold mt-3 line-height">
                                E-Commerce
                              </h6>
                            </div>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="mobilleapp">
                            <div className="tech">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="55"
                                viewBox="0 0 56 55"
                                fill="none"
                              >
                                <rect
                                  x="0.943261"
                                  y="0.911035"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  fill="#021D3D"
                                ></rect>
                                <rect
                                  x="0.943261"
                                  y="0.911035"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  stroke="#20528D"
                                  strokeWidth="0.829882"
                                ></rect>
                                <path
                                  d="M28.6685 14.9741H18.1685C17.4723 14.9741 16.8046 15.2606 16.3123 15.7704C15.82 16.2803 15.5435 16.9718 15.5435 17.6929V37.6304C15.5435 38.3514 15.82 39.043 16.3123 39.5528C16.8046 40.0627 17.4723 40.3491 18.1685 40.3491H28.6685C29.3647 40.3491 30.0323 40.0627 30.5246 39.5528C31.0169 39.043 31.2935 38.3514 31.2935 37.6304V17.6929C31.2935 16.9718 31.0169 16.2803 30.5246 15.7704C30.0323 15.2606 29.3647 14.9741 28.6685 14.9741ZM30.4185 37.1772C30.4185 38.4261 29.4376 39.4429 28.231 39.4429H18.606C18.026 39.4422 17.47 39.2032 17.0599 38.7785C16.6498 38.3538 16.4192 37.7779 16.4185 37.1772V18.146C16.4185 16.8972 17.4002 15.8804 18.606 15.8804H28.231C29.4376 15.8804 30.4185 16.8972 30.4185 18.146V37.1772Z"
                                  fill="white"
                                ></path>
                                <path
                                  d="M28.231 16.7866H25.1685C25.1685 17.2673 24.9841 17.7283 24.6559 18.0683C24.3277 18.4082 23.8826 18.5991 23.4185 18.5991C22.9543 18.5991 22.5092 18.4082 22.181 18.0683C21.8528 17.7283 21.6685 17.2673 21.6685 16.7866H18.606C17.8823 16.7866 17.2935 17.3965 17.2935 18.146V37.1772C17.2935 37.9267 17.8823 38.5366 18.606 38.5366H28.231C28.9546 38.5366 29.5435 37.9267 29.5435 37.1772V18.146C29.5435 17.3965 28.9546 16.7866 28.231 16.7866ZM22.3947 30.4927C22.482 30.5721 22.5352 30.684 22.5428 30.804C22.5503 30.924 22.5115 31.0422 22.435 31.1326C22.3584 31.2229 22.2503 31.2781 22.1344 31.2859C22.0186 31.2937 21.9045 31.2536 21.8172 31.1742L18.3172 28.0024C18.2704 27.9598 18.2328 27.9074 18.2071 27.8487C18.1814 27.7899 18.1681 27.7261 18.1681 27.6616C18.1681 27.5971 18.1814 27.5333 18.2071 27.4746C18.2328 27.4158 18.2704 27.3634 18.3172 27.3209L21.8172 24.149C21.9047 24.0707 22.0185 24.0314 22.1339 24.0397C22.2493 24.0481 22.3567 24.1034 22.4328 24.1936C22.5089 24.2838 22.5474 24.4015 22.54 24.521C22.5325 24.6405 22.4796 24.7521 22.393 24.8314L19.271 27.6616L22.3947 30.4927ZM28.5197 28.0024L25.0197 31.1742C24.9766 31.2138 24.9264 31.2442 24.8719 31.2635C24.8174 31.2828 24.7597 31.2907 24.7022 31.2867C24.6448 31.2828 24.5886 31.267 24.5371 31.2404C24.4855 31.2138 24.4396 31.1768 24.402 31.1317C24.3257 31.0412 24.2872 30.9232 24.2949 30.8034C24.3026 30.6836 24.3559 30.5719 24.4431 30.4927L27.566 27.6616L24.4422 24.8305C24.3601 24.75 24.3113 24.6397 24.306 24.5227C24.3006 24.4057 24.3393 24.2912 24.4137 24.203C24.4882 24.1149 24.5927 24.0601 24.7053 24.05C24.818 24.0399 24.93 24.0754 25.018 24.149L28.518 27.3209C28.5648 27.3634 28.6023 27.4158 28.6281 27.4746C28.6538 27.5333 28.6671 27.5971 28.6671 27.6616C28.6671 27.7261 28.6538 27.7899 28.6281 27.8487C28.6023 27.9074 28.5648 27.9598 28.518 28.0024H28.5197ZM39.5981 29.3808L38.3652 28.6603C38.4133 28.3232 38.437 27.9897 38.437 27.6616C38.437 27.3336 38.4133 27.0001 38.3652 26.6629L39.599 25.9425C39.7004 25.8833 39.7894 25.8037 39.8608 25.7084C39.9321 25.6132 39.9844 25.5041 40.0146 25.3876C40.0447 25.2711 40.0521 25.1496 40.0364 25.0301C40.0206 24.9107 39.9819 24.7957 39.9227 24.6918L38.1298 21.5535C38.0133 21.3494 37.8241 21.2007 37.603 21.1394C37.3818 21.0781 37.1463 21.1089 36.9468 21.2254L35.6921 21.9595C35.1627 21.5378 34.5794 21.1944 33.9587 20.9391V19.5054C33.9587 19.265 33.8665 19.0345 33.7024 18.8646C33.5383 18.6946 33.3158 18.5991 33.0837 18.5991H32.1685V24.0366C33.0967 24.0366 33.987 24.4185 34.6433 25.0984C35.2997 25.7782 35.6685 26.7002 35.6685 27.6616C35.6685 28.623 35.2997 29.5451 34.6433 30.2249C33.987 30.9047 33.0967 31.2866 32.1685 31.2866V36.7241H33.0846C33.3166 36.7241 33.5392 36.6286 33.7033 36.4587C33.8674 36.2887 33.9596 36.0582 33.9596 35.8179V34.386C34.5801 34.1303 35.1634 33.7869 35.693 33.3656L36.9477 34.0987C37.1471 34.2152 37.3827 34.2461 37.6039 34.1848C37.825 34.1234 38.0142 33.9748 38.1307 33.7707L39.9218 30.6314C39.9811 30.5276 40.0197 30.4126 40.0355 30.2931C40.0513 30.1736 40.0438 30.0521 40.0137 29.9356C39.9835 29.8192 39.9313 29.7101 39.8599 29.6148C39.7885 29.5195 39.6995 29.44 39.5981 29.3808Z"
                                  fill="white"
                                ></path>
                              </svg>
                              <h6 className="mb-0 text-white fw-semibold mt-3 line-height">
                                Mobile
                                <br /> Application{" "}
                              </h6>
                            </div>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="database">
                            <div className="tech">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="56"
                                height="55"
                                viewBox="0 0 56 55"
                                fill="none"
                              >
                                <rect
                                  x="0.942285"
                                  y="0.911035"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  fill="#021D3D"
                                ></rect>
                                <rect
                                  x="0.942285"
                                  y="0.911035"
                                  width="53.7003"
                                  height="53.5013"
                                  rx="26.7507"
                                  stroke="#20528D"
                                  strokeWidth="0.829882"
                                ></rect>
                                <g clipPath="url(#clip0_300_1002)">
                                  <path
                                    d="M25.7649 24.2303C31.5487 24.2303 36.2374 21.9763 36.2374 19.1959C36.2374 16.4156 31.5487 14.1616 25.7649 14.1616C19.9811 14.1616 15.2925 16.4156 15.2925 19.1959C15.2925 21.9763 19.9811 24.2303 25.7649 24.2303Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M28.1901 37.6849C27.8336 37.586 27.5105 37.3793 27.2589 37.0892C27.0073 36.7991 26.8374 36.4375 26.7693 36.0469C26.438 36.0626 26.1029 36.0709 25.7649 36.0709C19.98 36.0709 15.2925 33.8189 15.2925 31.0366V34.8858C15.2925 37.6671 19.98 39.9202 25.7649 39.9202C26.5969 39.9202 27.4027 39.8689 28.1794 39.78C28.009 39.4611 27.9202 39.0991 27.9221 38.7309C27.924 38.3627 28.0164 38.0017 28.1901 37.6849Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7649 34.6901C26.0923 34.6901 26.4138 34.6807 26.7334 34.6671V34.0897C26.7334 33.1232 27.3445 32.2917 28.1997 32.0616C27.9805 31.6612 27.8912 31.1934 27.946 30.7321C27.2419 30.8032 26.5136 30.8419 25.7649 30.8419C19.98 30.8419 15.2925 28.5899 15.2925 25.8076V29.6568C15.2934 32.4371 19.98 34.6901 25.7649 34.6901Z"
                                    fill="white"
                                  ></path>
                                  <path
                                    d="M25.7649 29.4602C26.7993 29.4602 27.7968 29.3859 28.7411 29.251L29.5237 28.4059C29.8257 28.0778 30.2203 27.8675 30.6451 27.8083C31.07 27.749 31.501 27.8441 31.8704 28.0785C31.9791 27.6314 32.2218 27.2358 32.5607 26.9535C32.8996 26.6711 33.3155 26.5179 33.7435 26.5179H35.1962C35.2224 26.5179 35.2485 26.5241 35.2737 26.5252C35.8868 25.8861 36.2364 25.1759 36.2364 24.4259V20.5767C36.2364 23.3579 31.5488 25.611 25.764 25.611C19.9791 25.611 15.2935 23.3579 15.2935 20.5767V24.4259C15.2935 27.2072 19.98 29.4602 25.7649 29.4602ZM40.2925 35.6577V34.0887L38.5637 33.7833C38.4631 33.347 38.3032 32.9293 38.0891 32.5438L39.0964 30.9936L38.0688 29.8838L36.6509 30.9853C36.2931 30.7508 35.9046 30.5762 35.4984 30.4675L35.1962 28.6098H33.7435L33.4636 30.4623C33.0566 30.5693 32.6668 30.7417 32.3072 30.9737L30.8932 29.8838L29.8656 30.9936L30.8602 32.5291C30.6416 32.918 30.479 33.3405 30.3779 33.7822L28.6704 34.0887V35.6577L30.3769 35.984C30.4786 36.4327 30.6423 36.8532 30.8593 37.2381L29.851 38.7601L30.8786 39.8709L32.3023 38.7946C32.6587 39.0257 33.0471 39.1994 33.4587 39.3092L33.7435 41.1616H35.1962L35.5013 39.304C35.9067 39.1936 36.2945 39.0184 36.6519 38.7841L38.0862 39.8709L39.1129 38.7601L38.0891 37.2256C38.3038 36.8397 38.4634 36.4212 38.5627 35.984L40.2925 35.6577ZM34.4815 37.0739C34.2153 37.0739 33.9518 37.0172 33.706 36.9071C33.4601 36.7971 33.2367 36.6358 33.0486 36.4325C32.8604 36.2292 32.7112 35.9879 32.6094 35.7223C32.5076 35.4567 32.4553 35.1721 32.4554 34.8847C32.4554 34.5973 32.5079 34.3127 32.6098 34.0471C32.7117 33.7816 32.861 33.5404 33.0493 33.3372C33.2375 33.134 33.461 32.9728 33.7069 32.8629C33.9528 32.753 34.2163 32.6964 34.4824 32.6965C35.0199 32.6966 35.5353 32.9274 35.9153 33.3379C36.2953 33.7485 36.5087 34.3052 36.5085 34.8857C36.5084 35.4662 36.2948 36.0229 35.9146 36.4332C35.5345 36.8436 35.019 37.0741 34.4815 37.0739Z"
                                    fill="white"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_300_1002">
                                    <rect
                                      width="25"
                                      height="27"
                                      fill="white"
                                      transform="translate(15.2925 14.1616)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <h6 className="mb-0 text-white fw-semibold mt-3 line-height">
                                Database
                              </h6>
                            </div>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content>
                        <Tab.Pane eventKey="frontend">
                          <div className="techlist mt-3">
                            <div className="text-center">
                              <img
                                src="/media/home/html.webp"
                                alt="html"
                                width="35"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                HTML
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/css.webp"
                                alt="css"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                CSS
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/bootstrap.webp"
                                alt="bootstrap"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Bootstrap
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/js.webp"
                                alt="Javascript"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Javascript
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/angular.webp"
                                alt="angular"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Angular
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/reactjs.webp"
                                alt="reactjs"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                React JS
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/view-js.webp"
                                alt="view-js"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                View JS
                              </p>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="backend">
                          <div className="techlist mt-3">
                            <div className="text-center">
                              <img
                                src="/media/home/php.webp"
                                alt="php"
                                width="35"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                PHP
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/laravel.webp"
                                alt="laravel"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Laravel
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Python.webp"
                                alt="Python"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Python
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/mn.webp"
                                alt="Microsoft.net"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                MVC.Net
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/node.webp"
                                alt="node"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Node JS
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/newrubyrails.webp"
                                alt="newrubyrails"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Ruby On Rails
                              </p>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ecommerce">
                          <div className="techlist mt-3">
                            <div className="text-center">
                              <img
                                src="/media/home/magento.webp"
                                alt="magento"
                                width="35"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Magento
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/shopfiy.webp"
                                alt="shopfiy"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Shopfiy
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/woo.webp"
                                alt="woo-commerce"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                WooCommerce
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/wordpress.webp"
                                alt="wordpress"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Wordpress
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/BigCommerce.webp"
                                alt="BigCommerce"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                BigCommerce
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Joomla.webp"
                                alt="Joomla"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Joomla
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Drupal.webp"
                                alt="Drupal"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Drupal
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Moodle.webp"
                                alt="Moodle"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Moodle
                              </p>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="mobilleapp">
                          <div className="techlist mt-3">
                            <div className="text-center">
                              <img
                                src="/media/home/ios.webp"
                                alt="ios"
                                width="35"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                IOS
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Android.webp"
                                alt="Android"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Android
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/flutter.webp"
                                alt="flutter"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Flutter
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/reactjs.webp"
                                alt="react native"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                React Native
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Kotlin.webp"
                                alt="Kotlin"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Kotlin
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Swift.webp"
                                alt="Swift"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Swift
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/IONIC.webp"
                                alt="IONIC"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                IONIC
                              </p>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="database">
                          <div className="techlist mt-3">
                            <div className="text-center">
                              <img
                                src="/media/home/mysql.webp"
                                alt="mysql"
                                width="35"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                MYSQL
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Sql.webp"
                                alt="Sql"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                SQL
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Postgre.webp"
                                alt="Postgre SOL"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Postgre SOL
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/MongoDB.webp"
                                alt="MongoDB"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                MongoDB
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/SQLite.webp"
                                alt="SQlLite"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                SQL-LITE
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Firebase.webp"
                                alt="Firebase"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Firebase
                              </p>
                            </div>
                            <div className="text-center">
                              <img
                                src="/media/home/Snowflake.webp"
                                alt="Snowflake"
                                width="auto"
                                height="35"
                              ></img>
                              <p className="text-white mb-0 fw-semibold mt-3">
                                Snowflake
                              </p>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="blueBackground desktop-padding-100">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="mil-h2 text-white fw-semibold text-center text-uppercase mb-100">
                <span>
                  <span className="mil-accent">
                    Innovation, Integrity, and{" "}
                  </span>{" "}
                  <br />
                  <span className="mil-accent"> Impeccable </span> Service –
                  That's Us{" "}
                </span>
              </h2>
              <div className="integrity">
                <div className="box rounded-15">
                  <img
                    src="/media/home/agile-at-the-core.webp"
                    alt="Agile at the Core"
                    width="100%"
                    height="auto"
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    Agile at the Core
                  </h4>
                  <p className="text-white text-center">
                    Each project's unique nature means we don't adopt Agile
                    end-to-end in every case but we uphold an Agile Methods
                    internally. We champion self-governing teams of developers,
                    UX architects, and QA experts, giving them the autonomy to
                    assign tasks and hone details.
                  </p>
                </div>
                <div className="box rounded-15">
                  <img
                    src="/media/home/transparancy.webp"
                    alt="Transparency"
                    width="100%"
                    height="auto"
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    Transparency
                  </h4>
                  <p className="text-white text-center">
                    We respect your time and with our core approach to
                    relationship building, we ensure clear and precise
                    communication for the product progress, milestones,
                    deadlines, and overall cost with no hidden charges for
                    enterprise web development. Consumer trust is our priority
                    and we ensure to maintain the same at any cost. We schedule
                    meetings on a weekly and monthly basis for feedback, ensure
                    constant meetings to share progress, etc.
                  </p>
                </div>
                <div className="box rounded-15">
                  <img
                    src="/media/home/creativity.webp"
                    alt="Creativity"
                    width="100%"
                    height="auto"
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    Creativity
                  </h4>
                  <p className="text-white text-center">
                    We push the boundaries of creativity in our solutions.
                    Whether it's reimagining an architecture or devising a
                    revolutionary interaction, we strive for the best. Our
                    emphasis on user-centric discovery means our output remains
                    relevant for years to come.
                  </p>
                </div>
                <div className="box rounded-15">
                  <img
                    src="/media/home/quality-assurance-testing.webp"
                    alt="Quality Assurance- Testing"
                    width="100%"
                    height="auto"
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    Quality Assurance- Testing
                  </h4>
                  <p className="text-white text-center">
                    One of the major reasons our clients have been with us till
                    now is our serious focus on quality assurance and testing.
                    Any mobile app development, custom software development, or
                    e-commerce website services developed at Appeak are passed
                    through suit of quality checks and filters that ensure the
                    things are working for which they are made, and many other
                    areas are reviewed for improvement.
                  </p>
                </div>
                <div className="box rounded-15">
                  <img
                    src="/media/home/success-with-technology.webp"
                    alt="Success with Technology"
                    width="100%"
                    height="auto"
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    Success with Technology
                  </h4>
                  <p className="text-white text-center">
                    Technology is the base of all that we do, and it is very
                    important to know what platform to use for which software in
                    which industry to ensure the best performance and security.
                    We are proud to say that our experienced app designers know
                    this very well. Proper use of technology leads to proper
                    communication, automation, and collaboration across
                    departments and the operational chain.
                  </p>
                </div>
                <div className="box rounded-15">
                  <img
                    src="/media/home/around-our-clients.webp"
                    alt="Around Our Clients"
                    width="100%"
                    height="auto"
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    Around Our Clients
                  </h4>
                  <p className="text-white text-center">
                    We offer comprehensive solutions to your every need, since
                    all of our planning, and resource management occur and
                    revolve around client needs. No matter what business and at
                    what stage you are, we have a range of solutions to your
                    every need from setting up a UI/UX-based website and mobile
                    apps to ensuring that you have a long list of landing
                    customers.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="clients desktop-padding-100 pt-0">
        <Container className="lightbluebg bgImage">
          <Row>
            <Col md={12}>
              <div className=" section-padding ">
                <h2 className="mil-h2 fw-semibold text-white mb-30 text-center text-uppercase">
                  <span>
                    Our clients are
                    <span className="mil-accent"> associated </span> with
                  </span>
                </h2>
                <div className="logos">
                  <img
                    src="/media/home/Figure-→-Letyouknow.webp"
                    width="100%"
                    height="auto"
                    alt="client"
                  ></img>
                  <img
                    src="/media/home/Figure-→-Nixi.webp"
                    width="100%"
                    height="auto"
                    alt="client"
                  ></img>
                  <img
                    src="/media/home/Figure-→-Nsi.webp"
                    width="100%"
                    height="auto"
                    alt="client"
                  ></img>
                  <img
                    src="/media/home/Figure-→-Wealth.webp"
                    width="100%"
                    height="auto"
                    alt="client"
                  ></img>
                  <img
                    src="/media/home/Figure-→-Zigram.webp"
                    width="100%"
                    height="auto"
                    alt="client"
                  ></img>
                </div>
              </div>
            </Col>
          </Row>
          <div className="clientsays pb-5">
            <Row>
              <Col md={6}>
                <h2 className="mil-h2 fw-semibold text-white mb-30 text-uppercase">
                  <span>
                    What Our<span className="mil-accent"> Clients </span> Say
                  </span>
                </h2>
                <p className="text-white">
                  These voices echo the confidence and satisfaction of clients
                  who have witnessed firsthand the impact of our solutions.
                </p>
                <div className="reviewOnSocial gap-15 mt-4 d-flex">
                  <a
                    href="https://clutch.co/profile/appeak-technologies-llp?utm_source=widget&utm_medium=1&utm_campaign=widget&utm_content=stars&utm_term=www.appeaktech.com#reviews"
                    className="bg-white p-2 rounded-15 text-center"
                  >
                    <img
                      src="/media/home/clutch-review.webp"
                      width="111"
                      height="auto"
                      alt="clutch review"
                    />
                  </a>
                  <a
                    href="https://www.goodfirms.co/company/appeak-technologies-llp"
                    className="bg-white p-2 rounded-15 text-center"
                  >
                    <img
                      src="/media/home/good-firm.webp"
                      width="111"
                      height="auto"
                      alt="google firm review"
                    />
                  </a>
                  <a
                    href="https://www.google.com/search?q=appeaktech&oq=appeaktech&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyDQgCEC4YrwEYxwEYgAQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzMDY4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x395e855f5b06b123:0xfe64469a5482576,1,,,,"
                    className="bg-white p-2 rounded-15 text-center"
                  >
                    <img
                      src="/media/home/google-reviews.webp"
                      width="111"
                      height="auto"
                      alt="Google-Review"
                    />
                  </a>
                </div>
              </Col>
              <Col md={6}>
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  navigation={{
                    prevEl: ".custom-prev-testi",
                    nextEl: ".custom-next-testi",
                  }}
                  //pagination={{ clickable: true }}
                  //scrollbar={{ draggable: true }}
                >
                  <SwiperSlide>
                    <div className="box rounded-10">
                      <div className="content">
                        <h3 className="mb-0 text-white line-height">
                          Appeak is an incredible company to work with. I have
                          hired them to do several projects for me. They are
                          fast, accurate and communication is spot on. These
                          guys are the best!{" "}
                        </h3>
                      </div>
                      <div className="info d-flex gap-20">
                        <img
                          src="/media/home/Elke-Freed.webp"
                          width="50"
                          height="50"
                          alt="client"
                          className="rounded-circle"
                        ></img>
                        <div>
                          <p className="logo-color mb-1 font-regular fw-semibold">
                            Elke Hinze
                          </p>
                          <h6 className="mb-0 text-white">
                            CEO - Plumeria Webdesign
                          </h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box rounded-10">
                      <div className="content">
                        <h3 className="mb-0 text-white line-height">
                          The high responsiveness of Appeak impressed us. They
                          delivered the tasks on time and adapted flexibly to
                          our business needs.
                        </h3>
                      </div>
                      <div className="info d-flex gap-20">
                        <img
                          src="/media/home/Alesio.webp"
                          width="50"
                          height="50"
                          alt="client"
                          className="rounded-circle"
                        ></img>
                        <div>
                          <p className="logo-color mb-1 font-regular fw-semibold">
                            Alesio
                          </p>
                          <h6 className="mb-0 text-white">
                            CEO - Piceci Services
                          </h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box rounded-10">
                      <div className="content">
                        <h4 className="mb-0 text-white line-height">
                          Appeak has successfully released the apps they've
                          developed into the application stores. Appeak also
                          leads a responsive and punctual process. We are
                          fainted with team's dedication, professionalism, work
                          quality, and commitment to top-quality products.
                        </h4>
                      </div>
                      <div className="info d-flex gap-20">
                        <img
                          src="/media/home/Boris.webp"
                          width="50"
                          height="50"
                          alt="client"
                          className="rounded-circle"
                        ></img>
                        <div>
                          <p className="logo-color mb-1 font-regular fw-semibold">
                            Boris A. Zhukov
                          </p>
                          <h6 className="mb-0 text-white">
                            Founder - Let you know, inc.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="box rounded-10">
                      <div className="content">
                        <h5 className="mb-0 text-white line-height">
                          Since the hiring of Appeak Team to work on most of my
                          projects, They have been nothing short of exemplary
                          and highly professional. The work is of a very high
                          quality and standard and always delivered on time and
                          within the scope of hours and budget. If there are
                          ever any queries or concerns on any projects, They are
                          always available to assist, even after hours, on
                          urgent tasks. I would highly recommend working with
                          Appeak Team for any of your projects.
                        </h5>
                      </div>
                      <div className="info d-flex gap-20">
                        <img
                          src="/media/home/cole.webp"
                          width="50"
                          height="50"
                          alt="client"
                          className="rounded-circle"
                        ></img>
                        <div>
                          <p className="logo-color mb-1 font-regular fw-semibold">
                            Cole Harrup
                          </p>
                          <h6 className="mb-0 text-white">
                            Director & Digital Media Specialist
                          </h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <div className="swiper-button-prev custom-prev-testi">
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
                  <div className="swiper-button-next custom-next-testi">
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
                      ></rect>
                      <path
                        d="M16 24H32M32 24L26.4 18M32 24L26.4 30"
                        stroke="#2EDCCF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Swiper>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="desktop-padding-100">
        <Container>
          <Row>
            <Col>
              <h2 className="mil-h2 fw-semibold text-white mb-30 text-uppercase text-center">
                <span>
                  Case<span className="mil-accent"> Studies </span>
                </span>
              </h2>
              <p className="text-white text-center mb-30">
                Enrich your projects, however complex, with our extensive
                <br />
                experience. Just the way they did!
              </p>
              <div className="caseStudies mt-5">
                <div className="case rounded-15 logo-color serviceBg border-color p-2 pb-4">
                  <a href="">
                    <div className="position-relative">
                      <img
                        src="/media/home/health-consulting-app.webp"
                        width="100%"
                        height="auto"
                        className="rounded-10 mb-3"
                      ></img>
                      <h3 className="title fw-semibold text-white ">
                        Health Consulting app
                      </h3>
                    </div>
                  </a>
                  <p className="text-white font-regular mb-0">
                    Enrich your projects, however complex, with our extensive
                    experience. Just the way they did!
                  </p>
                </div>
                <div className="case rounded-15 logo-color serviceBg border-color p-2 pb-4">
                  <a href="">
                    <div className="position-relative">
                      <img
                        src="/media/home/tournamanet.webp"
                        width="100%"
                        height="auto"
                        className="rounded-10 mb-3"
                      ></img>
                      <h3 className="title fw-semibold text-white">
                        Web Development for Tournament Management System
                      </h3>
                    </div>
                  </a>
                  <p className="text-white font-regular mb-0">
                    Discover how Appeak developed a custom web-based Tournament
                    Management System to streamline sports event.
                  </p>
                </div>
                <div className="case rounded-15 logo-color serviceBg border-color p-2 pb-4">
                  <a href="">
                    <div className="position-relative">
                      <img
                        src="/media/home/charity-exchange.webp"
                        width="100%"
                        height="auto"
                        className="rounded-10 mb-3"
                      ></img>
                      <h3 className="title fw-semibold text-white">
                        Charity Exchange
                      </h3>
                    </div>
                  </a>
                  <p className="text-white font-regular mb-0">
                    The charity exchange is a digital platform or bridge between
                    donors and charity. As a donor advised fund they connect
                    donors...
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="faq pt-3 desktop-padding-100">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="mil-h2 fw-semibold text-white mb-30 text-uppercase">
                <span>
                  Frequently Asked
                  <span className="mil-accent">
                    <br /> Questions{" "}
                  </span>
                </span>
              </h2>
            </Col>
            <Col md={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    1. Why should I choose web design services from appeak?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our unique selling point (USP) makes us unique and preferred
                    for your web development needs i.e. expertise and experience
                    in the market and web design services. A customized and
                    customer-centric approach leads us to meet specific software
                    needs and affordable pricing through effective management of
                    resources.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    2. What is the Appeak development process?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Our development process typically involves:</p>
                    <ul className="faqul">
                      <li>
                        Consultation: We discuss your project requirements and
                        goals in detail.
                      </li>
                      <li>
                        Planning and Strategy: We define the project scope,
                        features, timeline, and budget.
                      </li>
                      <li>
                        Design and Development: Our team designs, develops, and
                        tests your app or software.
                      </li>
                      <li>
                        Deployment and Launch: We launch your app on the app
                        stores or deploy your software solution.
                      </li>
                      <li>
                        Maintenance and Support: We provide ongoing maintenance
                        and support to ensure your app or software runs
                        smoothly.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    3. How much does it cost to develop a mobile app or
                    software?
                  </Accordion.Header>
                  <Accordion.Body>
                    The cost of development depends on various factors like the
                    complexity of your project, features, design requirements,
                    and development platform. We offer flexible engagement
                    models to suit your budget, so please contact us for a free
                    quote.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    4. What are the benefits of choosing Appeak for my project?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Appeak offers several benefits, including:</p>
                    <ul className="faqul">
                      <li>
                        <strong>Experienced and Skilled Developers:</strong>
                        &nbsp;Our team has extensive experience in developing
                        mobile apps, software solutions, and e-commerce
                        platforms.
                      </li>
                      <li>
                        <strong>Custom Development:</strong>&nbsp;We build
                        solutions tailored to your specific needs and
                        requirements.
                      </li>
                      <li>
                        <strong>Focus on Quality and User Experience:</strong>
                        &nbsp;We prioritize delivering high-quality apps and
                        software that are user-friendly and engaging.
                      </li>
                      <li>
                        <strong>Transparent Communication:</strong>&nbsp;We keep
                        you informed throughout the development process.
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    5. How can I get started with Appeak?
                  </Accordion.Header>
                  <Accordion.Body>
                    Contact us today for a free consultation! We’ll discuss your
                    project requirements and answer any questions you may have.
                    We look forward to helping you bring your mobile app,
                    software, or e-commerce project to life.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    6. Which technology suits best for web development?
                  </Accordion.Header>
                  <Accordion.Body>
                    The type of technology to use differs from project to
                    project and the objective of the website for which it is
                    developed. If it is a normal information awareness website
                    then a normal CMS system like WordPress will be effective.
                    If you aim for an e-commerce website then the use of
                    Magento, WooCommerce, Joomla, drupal, and more is
                    recommended. Custom web applications can use Mean and Mern
                    stack. For mobile applications use of Swift, kotlin, flutter
                    and React Native is suitable. Feel free to contact us to
                    know which technology suits best your specific project
                    needs.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
