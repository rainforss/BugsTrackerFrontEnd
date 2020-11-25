import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { IBug } from "../../types/entityTypes.d";

interface Props {
  bugs: IBug[];
}

export default function FrameworkBugList({ bugs }: Props) {
  return (
    <Container className="mt-5">
      <Row>
        {bugs.map((bug) => (
          <Card key={bug.id} className="mx-2">
            <Card.Header as="h5">{bug.name}</Card.Header>
            <Card.Body>
              <Card.Text>{bug.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button variant="info">See solutions</Button>
              <Button variant="danger">Delete</Button>
            </Card.Footer>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
