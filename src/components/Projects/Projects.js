import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quiz.png";
import resell from "../../Assets/Projects/resell.png";
import shikkhayon from "../../Assets/Projects/shikkhayon.png";
import immigration from "../../Assets/Projects/immigration.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shikkhayon}
              isBlog={false}
              title="Sikkayon Academy"
              images={[
                { src: "/images/shikkhayon.png" },
                { src: "/images/shikkhayon-1.png" },
                { src: "/images/shikkhayon-2.png" },
              ]}
              description="This is a platform where we provide different education courses, guidelines, and career consultations. With this changing world, online classes have become more accessible. Online classes have made our learning process more manageable with our busy schedules. The online classes have been beneficial to the students who do not have access to proper schooling and quality education."
              ghLink="https://github.com/SharmiNMooN/educational-online-platform"
              demoLink="https://sikkhayon-academy.web.app/"
              feature={[
                "Can download course details as PDF",
                "Category wise courses",
                "User can checkout course",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={immigration}
              images={[
                { src: "/images/immigration.png" },
                { src: "/images/immigration-1.png" },
                { src: "/images/immigration-2.png" },
              ]}
              isBlog={false}
              title="immigration-and-consultancy"
              description="I provide Immigration, visa consultancy, and I am providing career counselling for professionals. I have several years experience in visa consultancy and career counselling arena. I have counselled 30+ professionals, and help them to grow in their career.Immigration is the process of moving to a new country or region with the intention of staying and living there."
              ghLink="https://github.com/SharmiNMooN/immigration-and-consultancy"
              demoLink="https://immigration-and-consultancy.web.app/"
              feature={[
                "Firebase social login (Google/Github)",
                "Slider on home page",
                "User can provide their review in the service",
                "User can see others review",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resell}
              isBlog={false}
              images={[
                { src: "/images/resell.png" },
                { src: "/images/resell-1.png" },
                { src: "/images/resell-2.png" },
              ]}
              title="Used Laptop Buy & Sell"
              description="This is an open platform where buyer can buy used laptop, and seller can sell their used laptop using this platform. Though the definition can no longer be used in a single direction, thanks to its ability to store songs, watch movies on, store snaps, files, and many more. But primarily it is used widely for work purposes. It brings a sense of style and status."
              ghLink="https://github.com/SharmiNMooN/online-resell-platform"
              demoLink="https://resell-laptop.web.app/"
              feature={[
                "Stripe Payment gateway",
                "Admin can manage Buyer, Seller",
                "Admin can monitor & manage Reported Products",
                "Buyer can report any product if they find any issue",
                "Buyer can see their orders and payment status",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              images={[
                { src: "/images/quiz.png" },
                { src: "/images/quiz-1.png" },
                { src: "/images/quiz-2.png" },
              ]}
              isBlog={false}
              title="Quiz Hunter"
              description="This is an quiz application where peoples can do quiz test in various topics and justify their knowledges."
              ghLink="https://github.com/SharmiNMooN/online-quiz-web-app"
              demoLink="https://63455aa31c79403e760f17f2--quiz-hunter.netlify.app/"
              feature={[
                "Quiz in different topics",
                "All questions are multiple choice question",
                "Responsive application",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
