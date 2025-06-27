import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
 
const caseStudiesData = [
  {
    id: 1,
    title: "Health Consulting app",
    description:
      "Enrich your projects, however complex, with our extensive experience. Just the way they did!",
    imageSrc: "/media/home/health-consulting-app.webp",
    imageAlt: "health-consulting-app",
    link: "",
  },
  {
    id: 2,
    title: "Web Development for Tournament Management System",
    description:
      "Discover how Appeak developed a custom web-based Tournament Management System to streamline sports event.",
    imageSrc: "/media/home/tournamanet.webp",
    imageAlt: "tournamanet",
    link: "",
  },
  {
    id: 3,
    title: "Charity Exchange",
    description:
      "The charity exchange is a digital platform or bridge between donors and charity. As a donor advised fund they connect donors...",
    imageSrc: "/media/home/charity-exchange.webp",
    imageAlt: "charity-exchange",
    link: "",
  },
]
 
const CaseStudies = () => {
  return (
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
              {caseStudiesData.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="case rounded-15 logo-color serviceBg border-color p-2 pb-4"
                >
                  <a href={caseStudy.link}>
                    <div className="position-relative">
                      <Image
                        src={caseStudy.imageSrc}
                        width={402}
                        height={297}
                        alt={caseStudy.imageAlt}
                        className="rounded-10 mb-3"
                      />
                      <h3 className="title fw-semibold text-white ">
                        {caseStudy.title}
                      </h3>
                    </div>
                  </a>
                  <p className="text-white font-regular mb-0">
                    {caseStudy.description}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default CaseStudies
 