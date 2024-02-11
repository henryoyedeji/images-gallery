import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = (props) => {
  return (
    <Container className="mt-4" fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form
            noValidate
            validated={props.validated}
            onSubmit={props.handleFormSubmit}
          >
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={props.word}
                  onChange={(e) => props.setWord(e.target.value)}
                  placeholder="Search for an image..."
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter a word to search
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Button as="input" type="submit" value="Search" />{" "}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
