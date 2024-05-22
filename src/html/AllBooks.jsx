import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/booksAPI";
import AlertError from "../Components/AlertError";
import WaitSpinner from "../Components/Spinner";
import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import ModalBook from "../Components/ModalBook";
import { useState } from "react";
import { useFilterGenreStore, useFilterStore, useReadingBookStore } from "../store/zustand";

function AllBooks() {

  const author = useFilterStore((state) => state.author);
  const genre = useFilterGenreStore((state) => state.genre);
  const addBook = useReadingBookStore((state) => state.addBook);
  const {
    isLoading,
    data: allBooks,
    isError,
    error,
  } = useQuery({
    queryKey: ["default", author, genre],
    queryFn: () => getBooks(author,genre) , //
  });

  const [selectedBook, setSelectedBook] = useState(null);
  const handleOpenModal = (bookInfo) => {
    setSelectedBook(bookInfo);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  if (isLoading) return <WaitSpinner />;
  if (isError) return <AlertError message={error.message} />;
  return (
    <Container>
      <Row>
        {allBooks.map((book) => {
          const bookReduce = book.book;
          return (
            <Col xl={2} xs={'auto'} key={bookReduce.title}>
              <div className="rounded-md ficha-container">
                <Button
                  variant="outline-success"
                  onClick={() => handleOpenModal(bookReduce)}
                  className="m-2"
                >
                  📖
                </Button>
                <Button key={bookReduce.title} onClick={() => {addBook(bookReduce)}} >
                  Add  
                </Button>
                  <img src={bookReduce.cover} className="image-container" />
              </div>
            </Col>
          );
        })}
      </Row>
      {selectedBook && (
        <ModalBook
          bookInfo={selectedBook}
          handleCloseModal={handleCloseModal}
        />
        //Modal para mostrar solo si se acciona el Handle
      )}
    </Container>
  );
}

export default AllBooks;
