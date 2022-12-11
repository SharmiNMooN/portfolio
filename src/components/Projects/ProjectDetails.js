import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Row, Col, Container, Carousel } from "react-bootstrap";
function ProjectDetails() {
  const { state: project } = useLocation();

  console.log({ project });
  const features = project.feature.map((number, idx) => (
    <li key={idx}>{number}</li>
  ));

  const sliderImage = project.images.map((img, idx) => (
    <Carousel.Item key={idx}>
      <img className="d-block w-100" src={img.src} alt="Project Pic" />
    </Carousel.Item>
  ));

  return (
    <Container fluid className="project-section">
      <Row>
        <Col md={8} className="m-auto">
          <Card className="project-card-view">
            <Carousel nextLabel="Next" prevLabel="Prev" variant="dark" fade>
              {sliderImage}
            </Carousel>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                {project.description}
              </Card.Text>

              <div className="text-start">
                <Card.Subtitle>Features</Card.Subtitle>
                <ul>{features}</ul>
              </div>

              <Button variant="primary" href={project.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {project.isBlog ? "Blog" : "GitHub"}
              </Button>
              {"\n"}
              {"\n"}
              {!project.isBlog && project.demoLink && (
                <Button
                  variant="primary"
                  href={project.demoLink}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <CgWebsite /> &nbsp;
                  {"Demo"}
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default ProjectDetails;
