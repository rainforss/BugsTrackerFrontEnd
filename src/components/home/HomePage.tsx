import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Bugs Administration</h1>
          <p>Bugs and solutions tracker for developers</p>
          <Link to="about" className="btn btn-primary btn-lg">
            Learn more
          </Link>
        </Container>
      </Jumbotron>
    </div>
  );
}
