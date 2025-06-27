"use client";
import { Row, Col } from "react-bootstrap";
import { Container, Accordion } from "react-bootstrap";
import "./page.module.css";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import HeroSection from "@/components/Home/Hero/hero";
import ServiceSection from "@/components/Home/Services/services";
import AboutUsSection from "@/components/Home/AboutUs/aboutus";
import TechnologySection from "@/components/Home/Technology/technology";
import WhyUsSection from "@/components/Home/Whyus/whyus";
import ClientSection from "@/components/Home/Client/client";

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
                      <Image
                        src="/media/home/health-consulting-app.webp"
                        width={402}
                        height={297}
                        alt="health-consulting-app"
                        className="rounded-10 mb-3"
                      />
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
                      <Image
                        src="/media/home/tournamanet.webp"
                        width={402}
                        height={297}
                        alt="tournamanet"
                        className="rounded-10 mb-3"
                      />
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
                      <Image
                        src="/media/home/charity-exchange.webp"
                        width={402}
                        height={297}
                        className="rounded-10 mb-3"
                        alt="charity-exchange"
                      />
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
  );
}
