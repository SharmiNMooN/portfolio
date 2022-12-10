import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Sharmin </span>
            from <span className="blue"> Dhaka, Bangladesh.</span>
            <br />A software engineer with passion of developing full stack
            applications using MERN stack. <br />I have good knowledge and
            experience in NodeJS, ExpressJS, ReactJS and HTML5, CSS3, bootstrap,
            tailwind css, and have develop some applications and most of them
            for learning purpose.
            <br /> I started learning programming from my University, though it
            was always more of a hobby than a career focus. After complete the
            CSE degree and continuing to pursue that hobby, I realised software
            engineering was the right field for me.
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
