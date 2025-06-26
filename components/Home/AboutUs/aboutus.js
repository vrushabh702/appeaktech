"use client"

import { Row, Col } from "react-bootstrap"
import { Container } from "react-bootstrap"
import "../../../app/page.module.css"
import styles from "../../../app/styles/Home.module.css"

// import styles from  "../../../app/styles/Home.module.css"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const AboutUsSection = () => {
  return (
    <section
      className={`blueBackground ${styles.sectionPadding} section-padding`}
    >
      <Container>
        <Row className="mb-4">
          <Col md={5}>
            <h2 className="mil-h2 text-white text-uppercase fw-semibold mb-4">
              <span>
                About <span className="mil-accent">Us</span>{" "}
              </span>
            </h2>
            <h5 className="text-white line-height">
              Every project is different and we might spend more or less time on
              each element, but you can expect yours to play out something like
              this.
            </h5>
            <ul className="logo-color customList">
              <li>Discovery</li>
              <li>Built</li>
              <li>Support</li>
            </ul>
            <h5 className="text-white line-height">
              Our tailored apps and web services have some unique features that
              form the core of our values i.e. all of our sites are optimized
              for easy SEO recognition based on the latest search engine
              algorithm updates.
            </h5>
          </Col>
          <Col md={2}></Col>
          <Col md={5}>
            <h2 className="mil-h2 text-white fw-semibold mb-5">
              <span>
                Accelerate<span className="mil-accent"> Innovation </span> with
                world className tech teams We’ll match you to an entire
                <span className="mil-accent"> Remote Technology</span>{" "}
              </span>
            </h2>
            <h5 className="text-white line-height">
              We are a creative and emerging software development consulting
              company with 80+ satisfied and happy clients with 25+ strategists,
              marketers, and multi-industry mobile app developers. With more
              than 4 years of experience in multiple fields and the expense to
              develop complex e-commerce development services, apps, and other
              tools with leading technologies and web development software we
              have handled more than 300 projects.
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
  )
}

export default AboutUsSection
