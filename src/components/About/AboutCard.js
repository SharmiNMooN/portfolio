import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sharmin Akter </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />A software engineer with passion of developing full stack applications using NodeJS, ReactJS, MongoDB, MySQL.
            I have good knowledge and experience in NodeJS, ReactJS and HTML/CSS, bootstrap, tailwind css, and have develop some applications and most of them for learning purpose.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Love Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The will must be stronger than the skill."{" "}
          </p>
          <footer className="blockquote-footer">Mohammad Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
