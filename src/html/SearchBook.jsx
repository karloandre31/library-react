import { Col, Container, Form, Row } from "react-bootstrap";
import { useFilterGenreStore, useFilterStore } from "../store/zustand";

function SearchBook() {
  const setName = useFilterStore((state) => state.setName);
  const setGenre = useFilterGenreStore((state) => state.setGenre);
  return (
    <Container>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onKeyUp={(e) => setName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option disabled selected>Genres</option>
            <option>Terror</option>
            <option>Ciencia ficción</option>
            <option>Zombies</option>
            <option>Fantasía</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBook;
