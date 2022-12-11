import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLocation } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
function ProjectDetails() {
  const [open, setOpen] = React.useState(false);
  const { state: project } = useLocation();

  console.log({ project });
  const features = project.feature.map((number, idx) => (
    <li key={idx}>{number}</li>
  ));
  return (
    <Container fluid className="project-section">
      <Row>
        <Col md={8} className="m-auto">
          <Card className="project-card-view">
            <Card.Img
              onClick={() => setOpen(true)}
              variant="top"
              src={project.imgPath}
              alt="card-img"
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                {project.description}
              </Card.Text>

              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={project.images}
              />

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
