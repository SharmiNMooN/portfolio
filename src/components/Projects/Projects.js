import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quiz.png";
import worldcup from "../../Assets/Projects/worldcup.png";
import resell from "../../Assets/Projects/resell.png";
import shikkhayon from "../../Assets/Projects/shikkhayon.png";
import football from "../../Assets/Projects/football.png";
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
              description="This is a platform where we provide different education courses, guidelines, and career consultations. With this changing world, online classes have become more accessible. Online classes have made our learning process more manageable with our busy schedules. The online classes have been beneficial to the students who do not have access to proper schooling and quality education."
              ghLink="https://github.com/SharmiNMooN/educational-online-platform"
              demoLink="https://sikkhayon-academy.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={immigration}
              isBlog={false}
              title="immigration-and-consultancy"
              description="I provide Immigration, visa consultancy, and I am providing career counselling for professionals. I have several years experience in visa consultancy and career counselling arena. I have counselled 30+ professionals, and help them to grow in their career.Immigration is the process of moving to a new country or region with the intention of staying and living there."
              ghLink="https://github.com/SharmiNMooN/immigration-and-consultancy"
              demoLink="https://immigration-and-consultancy.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resell}
              isBlog={false}
              title="Used Laptop Buy & Sell"
              description="This is an open platform where buyer can buy used laptop, and seller can sell their used laptop using this platform. Though the definition can no longer be used in a single direction, thanks to its ability to store songs, watch movies on, store snaps, files, and many more. But primarily it is used widely for work purposes. It brings a sense of style and status."
              ghLink="https://github.com/SharmiNMooN/online-resell-platform"
              demoLink="https://resell-laptop.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz Hunter"
              description="This is an quiz application where peoples can do quiz test in various topics and justify their knowledges."
              ghLink="https://github.com/SharmiNMooN/online-quiz-web-app"
              demoLink="https://63455aa31c79403e760f17f2--quiz-hunter.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={football}
              isBlog={false}
              title="Best Five Players"
              description="The creativity and zeal that typify the beautiful game of football (soccer) would render it an art form if not for the physical context within which the sport is played. What distinguishes football from most other sports is the freedom of expression granted to the players."
              ghLink="https://github.com/SharmiNMooN/football-players"
              demoLink=""
            ></ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldcup}
              isBlog={false}
              title="The Greatest
              show on the
              earth"
              description="The FIFA World Cup 2022™ in Qatar is the first to be hosted in the Middle East and the most geographically compact since the inaugural edition of the tournament in 1930."
              ghLink="https://github.com/SharmiNMooN/world-cup"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
