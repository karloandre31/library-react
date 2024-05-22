import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import AllBooks from "./html/AllBooks";
import SearchBook from "./html/SearchBook";
import ReadingList from "./html/ReadingList";
import BtnDayOrNigth from "./Components/BtnDayOrNight";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xl={9} xs={"auto"} md={7}>
            <BtnDayOrNigth />
            <div className="mb-4">
              <SearchBook />
            </div>
            <div>
              <AllBooks />
            </div>
          </Col>
          <Col>
            <p className="text-4xl">Reading List</p>
            <ReadingList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
