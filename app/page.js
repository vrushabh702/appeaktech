"use client"
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
import Image from "next/image"
import HeroSection from "@/components/Home/Hero/hero"
import ServiceSection from "@/components/Home/Services/services"
import AboutUsSection from "@/components/Home/AboutUs/aboutus"
import TechnologySection from "@/components/Home/Technology/technology"
import FaqSection from "@/components/Home/FAQ/faq"
import CaseStudies from "@/components/Home/CaseStudies/caseStudies"

//
export default function WelcomePage() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <AboutUsSection />
      <TechnologySection />
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
                  That&apos;s Us{" "}
                </span>
              </h2>
              <div className="integrity">
                <div className="box rounded-15">
                  <Image
                    src="/media/home/agile-at-the-core.webp"
                    alt="Agile at the Core"
                    width={113}
                    height={113}
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    Agile at the Core
                  </h4>
                  <p className="text-white text-center">
                    Each project&apos;s unique nature means we don&apos;t adopt
                    Agile end-to-end in every case but we uphold an Agile
                    Methods internally. We champion self-governing teams of
                    developers, UX architects, and QA experts, giving them the
                    autonomy to assign tasks and hone details.
                  </p>
                </div>
                <div className="box rounded-15">
                  <Image
                    src="/media/home/transparancy.webp"
                    alt="Transparency"
                    width={113}
                    height={113}
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
                  <Image
                    src="/media/home/creativity.webp"
                    alt="Creativity"
                    width={113}
                    height={113}
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    Creativity
                  </h4>
                  <p className="text-white text-center">
                    We push the boundaries of creativity in our solutions.
                    Whether it&apos;s reimagining an architecture or devising a
                    revolutionary interaction, we strive for the best. Our
                    emphasis on user-centric discovery means our output remains
                    relevant for years to come.
                  </p>
                </div>
                <div className="box rounded-15">
                  <Image
                    src="/media/home/quality-assurance-testing.webp"
                    alt="Quality Assurance- Testing"
                    width={113}
                    height={113}
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
                  <Image
                    src="/media/home/success-with-technology.webp"
                    alt="Success with Technology"
                    width={113}
                    height={113}
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
                  <Image
                    src="/media/home/around-our-clients.webp"
                    alt="Around Our Clients"
                    width={113}
                    height={113}
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
                  <Image
                    src="/media/home/Figure-→-Letyouknow.webp"
                    width={223}
                    height={91}
                    alt="client"
                  />
                  <Image
                    src="/media/home/Figure-→-Nixi.webp"
                    width={223}
                    height={91}
                    alt="client"
                  />
                  <Image
                    src="/media/home/Figure-→-Nsi.webp"
                    width={223}
                    height={91}
                    alt="client"
                  />
                  <Image
                    src="/media/home/Figure-→-Wealth.webp"
                    width={223}
                    height={91}
                    alt="client"
                  />
                  <Image
                    src="/media/home/Figure-→-Zigram.webp"
                    width={223}
                    height={91}
                    alt="client"
                  />
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
                    <Image
                      src="/media/home/clutch-review.webp"
                      width={111}
                      height={48}
                      alt="clutch review"
                    />
                  </a>
                  <a
                    href="https://www.goodfirms.co/company/appeak-technologies-llp"
                    className="bg-white p-2 rounded-15 text-center"
                  >
                    <Image
                      src="/media/home/good-firm.webp"
                      width={111}
                      height={48}
                      alt="google firm review"
                    />
                  </a>
                  <a
                    href="https://www.google.com/search?q=appeaktech&oq=appeaktech&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyDQgCEC4YrwEYxwEYgAQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzMDY4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x395e855f5b06b123:0xfe64469a5482576,1,,,,"
                    className="bg-white p-2 rounded-15 text-center"
                  >
                    <Image
                      src="/media/home/google-reviews.webp"
                      width={111}
                      height={48}
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
                        <Image
                          src="/media/home/Elke-Freed.webp"
                          width={50}
                          height={50}
                          alt="client"
                          className="rounded-circle"
                        />
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
                        <Image
                          src="/media/home/Alesio.webp"
                          width={50}
                          height={50}
                          alt="client"
                          className="rounded-circle"
                        />
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
                          Appeak has successfully released the apps they&apos;ve
                          developed into the application stores. Appeak also
                          leads a responsive and punctual process. We are
                          fainted with team&apos;s dedication, professionalism,
                          work quality, and commitment to top-quality products.
                        </h4>
                      </div>
                      <div className="info d-flex gap-20">
                        <Image
                          src="/media/home/Boris.webp"
                          width={50}
                          height={50}
                          alt="client"
                          className="rounded-circle"
                        />
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
                        <Image
                          src="/media/home/cole.webp"
                          width={50}
                          height={50}
                          alt="client"
                          className="rounded-circle"
                        />
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
      <CaseStudies />
      <FaqSection />
    </div>
  )
}
