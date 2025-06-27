// components/Footer.tsx

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "../../app/styles/footer.module.css";

const Footer = () => {
  return (
    <section>
      <section
        className={`${styles.footer} serviceBg bgImage desktop-padding-100 position-relative`}
      >
        <Container>
          <Row>
            <Col md={8}>
              <h2 className="mil-h2 fw-semibold text-white mb-30 text-uppercase big">
                <span>
                  Our Global<span className="mil-accent"> Offices </span> Where
                  We Deliver{" "}
                </span>
              </h2>
              <p className="text-white mb-30">
                With strategically located offices worldwide, our global
                presence ensures efficient delivery to clients across the globe,
                no matter the distance or destination.
              </p>
              <div className={styles.locationBox}>
                <div className={`${styles.box} darkBlue rounded-10`}>
                  <div className="d-flex gap-25">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="71"
                          height="71"
                          rx="35.5"
                          fill="#021D3D"
                        ></rect>
                        <rect
                          x="0.5"
                          y="0.5"
                          width="71"
                          height="71"
                          rx="35.5"
                          stroke="#20528D"
                        ></rect>
                        <path
                          d="M34.8695 50.3947C26.5452 38.0526 25 36.7859 25 32.25C25 26.0368 29.9248 21 36 21C42.0752 21 47 26.0368 47 32.25C47 36.7859 45.4548 38.0526 37.1305 50.3947C36.5842 51.2018 35.4157 51.2017 34.8695 50.3947ZM36 36.9375C38.5313 36.9375 40.5833 34.8388 40.5833 32.25C40.5833 29.6611 38.5313 27.5625 36 27.5625C33.4687 27.5625 31.4167 29.6611 31.4167 32.25C31.4167 34.8388 33.4687 36.9375 36 36.9375Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="fw-semibold logo-color mb-3">
                        Gujarat, India{" "}
                      </h5>
                      <p className="text-white mb-0">
                        B-622 Sun Westbank, Ashram Road, Ahmedabad 380009.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.milDivider}  mil-divider-left`}
                  ></div>
                  <div className="d-flex gap-10 align-items-center justify-content-between">
                    <div className="d-flex gap-10 align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14.5 1.99902H1.5C0.671562 1.99902 0 2.67059 0 3.49902V12.499C0 13.3275 0.671562 13.999 1.5 13.999H14.5C15.3284 13.999 16 13.3275 16 12.499V3.49902C16 2.67059 15.3284 1.99902 14.5 1.99902ZM14.5 3.49902V4.77418C13.7993 5.34477 12.6823 6.23202 10.2942 8.10199C9.76787 8.51596 8.72538 9.51049 8 9.4989C7.27475 9.51062 6.23191 8.51581 5.70584 8.10199C3.31813 6.23231 2.20078 5.34487 1.5 4.77418V3.49902H14.5ZM1.5 12.499V6.69896C2.21606 7.2693 3.23153 8.06965 4.77931 9.28165C5.46234 9.8193 6.6585 11.0062 8 10.999C9.33491 11.0062 10.5159 9.83652 11.2204 9.2819C12.7682 8.06993 13.7839 7.26937 14.5 6.69899V12.499H1.5Z"
                          fill="white"
                        ></path>
                      </svg>
                      <a
                        href="mailto:info@appeaktech.com"
                        className="text-white text-decoration-none font-regular"
                      >
                        <span className="mil-accent"> info</span>@appeaktech.com
                      </a>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M13.6005 9.89272L10.538 8.58022C10.4072 8.52446 10.2618 8.51272 10.1237 8.54674C9.98562 8.58077 9.86233 8.65873 9.77238 8.76889L8.41613 10.4259C6.28763 9.42235 4.57467 7.70939 3.57109 5.58088L5.22813 4.22463C5.33851 4.13486 5.41663 4.01156 5.45068 3.87342C5.48472 3.73527 5.47283 3.58979 5.4168 3.45901L4.1043 0.39651C4.0428 0.255528 3.93405 0.140421 3.79678 0.0710369C3.65951 0.00165297 3.50233 -0.0176587 3.35234 0.0164317L0.508594 0.672682C0.363992 0.706073 0.234977 0.787492 0.142607 0.90365C0.0502374 1.01981 -3.33104e-05 1.16384 1.65599e-08 1.31225C1.65599e-08 8.32592 5.68477 13.9998 12.6875 13.9998C12.836 13.9998 12.9801 13.9496 13.0963 13.8572C13.2125 13.7649 13.2939 13.6358 13.3273 13.4912L13.9836 10.6474C14.0175 10.4967 13.9977 10.3389 13.9278 10.2011C13.8579 10.0634 13.7422 9.95434 13.6005 9.89272Z"
                          fill="white"
                        ></path>
                      </svg>
                      <a
                        href="tel:+91 8799459079"
                        className="text-white text-decoration-none font-regular"
                      >
                        <span className="mil-accent"> +91</span>8799459079
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`${styles.box} darkBlue rounded-10`}>
                  <div className="d-flex gap-25">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 72 72"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="71"
                          height="71"
                          rx="35.5"
                          fill="#021D3D"
                        ></rect>
                        <rect
                          x="0.5"
                          y="0.5"
                          width="71"
                          height="71"
                          rx="35.5"
                          stroke="#20528D"
                        ></rect>
                        <path
                          d="M34.8695 50.3947C26.5452 38.0526 25 36.7859 25 32.25C25 26.0368 29.9248 21 36 21C42.0752 21 47 26.0368 47 32.25C47 36.7859 45.4548 38.0526 37.1305 50.3947C36.5842 51.2018 35.4157 51.2017 34.8695 50.3947ZM36 36.9375C38.5313 36.9375 40.5833 34.8388 40.5833 32.25C40.5833 29.6611 38.5313 27.5625 36 27.5625C33.4687 27.5625 31.4167 29.6611 31.4167 32.25C31.4167 34.8388 33.4687 36.9375 36 36.9375Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="fw-semibold logo-color mb-3">
                        Australia, NSW
                      </h5>
                      <p className="text-white mb-0">
                        Unit 416, 91C Grima Street Schofields, NSW Australia,
                        2762
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${styles.milDivider} mil-divider-left`}
                  ></div>
                  <div className="d-flex gap-10 align-items-center justify-content-between">
                    <div className="d-flex gap-10 align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14.5 1.99902H1.5C0.671562 1.99902 0 2.67059 0 3.49902V12.499C0 13.3275 0.671562 13.999 1.5 13.999H14.5C15.3284 13.999 16 13.3275 16 12.499V3.49902C16 2.67059 15.3284 1.99902 14.5 1.99902ZM14.5 3.49902V4.77418C13.7993 5.34477 12.6823 6.23202 10.2942 8.10199C9.76787 8.51596 8.72538 9.51049 8 9.4989C7.27475 9.51062 6.23191 8.51581 5.70584 8.10199C3.31813 6.23231 2.20078 5.34487 1.5 4.77418V3.49902H14.5ZM1.5 12.499V6.69896C2.21606 7.2693 3.23153 8.06965 4.77931 9.28165C5.46234 9.8193 6.6585 11.0062 8 10.999C9.33491 11.0062 10.5159 9.83652 11.2204 9.2819C12.7682 8.06993 13.7839 7.26937 14.5 6.69899V12.499H1.5Z"
                          fill="white"
                        ></path>
                      </svg>
                      <a
                        href="mailto:info@appeaktech.com"
                        className="text-white text-decoration-none font-regular"
                      >
                        <span className="mil-accent"> info</span>@appeaktech.com
                      </a>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M13.6005 9.89272L10.538 8.58022C10.4072 8.52446 10.2618 8.51272 10.1237 8.54674C9.98562 8.58077 9.86233 8.65873 9.77238 8.76889L8.41613 10.4259C6.28763 9.42235 4.57467 7.70939 3.57109 5.58088L5.22813 4.22463C5.33851 4.13486 5.41663 4.01156 5.45068 3.87342C5.48472 3.73527 5.47283 3.58979 5.4168 3.45901L4.1043 0.39651C4.0428 0.255528 3.93405 0.140421 3.79678 0.0710369C3.65951 0.00165297 3.50233 -0.0176587 3.35234 0.0164317L0.508594 0.672682C0.363992 0.706073 0.234977 0.787492 0.142607 0.90365C0.0502374 1.01981 -3.33104e-05 1.16384 1.65599e-08 1.31225C1.65599e-08 8.32592 5.68477 13.9998 12.6875 13.9998C12.836 13.9998 12.9801 13.9496 13.0963 13.8572C13.2125 13.7649 13.2939 13.6358 13.3273 13.4912L13.9836 10.6474C14.0175 10.4967 13.9977 10.3389 13.9278 10.2011C13.8579 10.0634 13.7422 9.95434 13.6005 9.89272Z"
                          fill="white"
                        ></path>
                      </svg>
                      <a
                        href="tel:+91 8799459079"
                        className="text-white text-decoration-none font-regular"
                      >
                        <span className="mil-accent"> +91</span>8799459079
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className={`${styles.footerLast} darkBlue desktop-padding-100 position-relative`}
      >
        <Container>
          <Row>
            <Col md={3}>
              <h3 className="text-white fw-semibold mb-30">
                About <span className="mil-accent">Appeak</span>
              </h3>
              <p className="text-white">
                We are a software development consulting company with 80+ happy
                clients around the globe. At Appeak, new ideas attract us like
                strong magnets. You may not believe it, but we breathe, eat and
                sleep tech.
              </p>
              <div className="reviewOnSocial gap-15 mt-4 d-flex">
                <a
                  href="https://clutch.co/profile/appeak-technologies-llp?utm_source=widget&amp;utm_medium=1&amp;utm_campaign=widget&amp;utm_content=stars&amp;utm_term=www.appeaktech.com#reviews"
                  className="bg-white p-2 rounded-10 text-center"
                >
                  <img
                    src="/media/home/clutch-review.webp"
                    width="67"
                    height="auto"
                    alt="clutch review"
                  />
                </a>
                <a
                  href="https://www.goodfirms.co/company/appeak-technologies-llp"
                  className="bg-white p-2 rounded-10 text-center"
                >
                  <img
                    src="/media/home/good-firm.webp"
                    width="67"
                    height="auto"
                    alt="google firm review"
                  />
                </a>
                <a
                  href="https://www.google.com/search?q=appeaktech&amp;oq=appeaktech&amp;gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgYIARBFGDwyDQgCEC4YrwEYxwEYgAQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzMDY4ajBqN6gCALACAA&amp;sourceid=chrome&amp;ie=UTF-8#lrd=0x395e855f5b06b123:0xfe64469a5482576,1,,,,"
                  className="bg-white p-2 rounded-10 text-center"
                >
                  <img
                    src="/media/home/google-reviews.webp"
                    width="67"
                    height="auto"
                    alt="Google-Review"
                  />
                </a>
              </div>
            </Col>
            <Col md={3}>
              <h3 className="text-white fw-semibold mb-30">
                What We <span className="mil-accent">Provide</span>
              </h3>
              <ul className={styles.customFooterList}>
                <li>
                  <a href="https://www.appeaktech.com/services/web-design/">
                    Web Design Service
                  </a>
                </li>
                <li>
                  <a href="https://www.appeaktech.com/services/website-development/">
                    Website Development
                  </a>
                </li>
                <li>
                  <a href="https://appeaktech.com/services/e-commerce-development/">
                    E-Commerce Development
                  </a>
                </li>
                <li>
                  <a href="https://appeaktech.com/services/mobile-app-development/">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="https://appeaktech.com/services/software-development/">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="https://www.appeaktech.com/services/data-visualization-analytics/">
                    Data Visualization & Analytics
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h3 className="text-white fw-semibold mb-30">
                Hire <span className="mil-accent">Tech Experts</span>
              </h3>
              <ul className={styles.customFooterList}>
                <li>
                  <a href="https://www.appeaktech.com/hire-php-developers/">
                    Hire PHP Developers
                  </a>
                </li>
                <li>
                  <a href="https://www.appeaktech.com/hire-laravel-developers/">
                    Hire Laravel Developers
                  </a>
                </li>
                <li>
                  <a href="https://www.appeaktech.com/hire-wordpress-developers/">
                    Hire WordPress Developers
                  </a>
                </li>
                <li>
                  <a href="https://www.appeaktech.com/hire-flutter-developer/">
                    Hire Node.JS Developers
                  </a>
                </li>
                <li>
                  <a href="https://www.appeaktech.com/hire-flutter-developer/">
                    Hire Flutter Developers
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h3 className="text-white fw-semibold mb-30">
                Tech We <span className="mil-accent">Work with</span>
              </h3>
              <ul className={styles.customFooterList}>
                <li>
                  <a href="https://appeaktech.com/technology/e-commerce-web/">
                    E-Commerce Tech
                  </a>
                </li>
                <li>
                  <a href="https://appeaktech.com/technology/front-end/">
                    Front-End Frameworks
                  </a>
                </li>
                <li>
                  <a href="https://appeaktech.com/technology/back-end/">
                    Back-End Engines
                  </a>
                </li>
                <li>
                  <a href="https://appeaktech.com/technology/mobile/">
                    Mobile Frameworks
                  </a>
                </li>
              </ul>
              <h3 className="text-white fw-semibold mb-3 mt-5">
                Site<span className="mil-accent">map</span>
              </h3>
              <ul className={styles.customFooterList}>
                <li>
                  <a href="https://www.appeaktech.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Footer;
