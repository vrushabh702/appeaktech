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

const ServiceSection = () => {
  const Service = [
    {
      id: 1,
      name: "E-commerce Development",
      image: "/media/home/Frame.svg",
      discription:
        "Our e-commerce web developer creates bespoke, feature-rich e-commerce solutions that deliver seamless and compelling experiences for your shoppers. We have a unique way of matching what your customers expect with our tech skills. This helps you provide engaging, flexible, safe, and strong online shopping solutions.",
      urlTitle: "See Our Ecommerce Expertise",
    },
    {
      id: 2,
      name: "Web Development",
      image: "/svg/home/web-development.svg",
      discription:
        "Appeak web developers craft client-centric website solutions, prioritizing customer needs and delivering tangible business results in the dynamic digital landscape. We develop websites for high-performing, user-friendly, advanced functional experiences for our customers. Give your business the boost it needs for scalability.",
      urlTitle: "Explore Website Development Services",
    },
    {
      id: 3,
      name: "Mobile Application",
      image: "/svg/home/mobile-application.svg",
      discription:
        "Appeak offers full-cycle mobile app development. We offer product design, mobile app consulting, design, and development with full-time maintenance and support. Our skilled team focuses on making strong and flexible mobile apps that set new standards in the mobile world. We can help you confidently navigate the changing mobile world and grab…",
      urlTitle: "Explore Custom Mobile App Solutions",
    },
    {
      id: 4,
      name: "Software Development",
      image: "/svg/home/software-development.svg",
      discription:
        "Appeak offers everything you need for software development. Whether it’s planning your IT strategy, mapping out the technology you’ll use, or creating scalable solutions from start to finish, we’ve got you covered. Our services adjust easily to what you need for your project and your business.",
      urlTitle: "Explore Our Software Services",
    },
    {
      id: 5,
      name: "Web Design",
      image: "/svg/home/web-design.svg",
      discription:
        "Your website is the online foundation of your business. Get website design services with Appeak that maximize conversion, engagement, and traffic. Build a mobile-friendly website with stunning designs and layouts that work the best to scale your business. With our expert team create a website that is easy to navigate, catches your potential customer’s attention….",
      urlTitle: "Explore UI/UX Solutions",
    },
  ];

  return (
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
              From our software development services through digital technology
              strategy to expert E-commerce Development and mobile app
              development services, we’re with you every step of the way.
            </p>
          </div>
          {Service.map((service) => (
            <div className="service rounded-10" key={service.id}>
              <div className="position-relative">
                <h4 className="mb-0 logo-color d-flex gap-15 fw-semibold">
                  <span>{service.id}.</span>{" "}
                  <span>
                    {service.name.split(" ").map((word, i, arr) => (
                      <span key={i}>
                        {word}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}{" "}
                  </span>
                </h4>
                <div className="roundshape">
                  <Image
                    src={"/media/home/Frame.svg"}
                    alt="Frame"
                    width={75}
                    height={75}
                  />
                </div>
              </div>
              <span className="logo-color">
                <hr />
              </span>
              <div>
                <p className="text-white mb-4">{service.discription}</p>
                <a href="#" className="logo-color d-block text-end">
                  {service.urlTitle}{" "}
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
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;
