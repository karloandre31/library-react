import { CloseButton, Col, Container, Row } from "react-bootstrap";
import { useReadingBookStore } from "../store/zustand";

function ReadingList() {
  const books = useReadingBookStore((state) => state.books);
  const deleteBook = useReadingBookStore((state) => state.deleteBook);

  return (
    <div>
      <Container>
        <Row>
          {books.map((book) => {
            {
              return (
                <Col xl={4} xs={'auto'} key={book.title}>
                  <div className="rounded-md ficha-container">
                    <div className="right-full">
                      <CloseButton
                        key={book.title}
                        onClick={() => deleteBook(book.title)}
                      />
                    </div>
                    <img src={book.cover} className="image-container" />
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ReadingList;
