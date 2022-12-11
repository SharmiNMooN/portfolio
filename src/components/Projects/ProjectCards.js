import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "yet-another-react-lightbox/styles.css";
import { useNavigate } from "react-router-dom";

function ProjectCards(props) {
  console.log(props);
  const navigate = useNavigate();

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button
          variant="primary"
          onClick={() => {
            navigate("/project/details", { state: props });
          }}
        >
          Details
        </Button>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
