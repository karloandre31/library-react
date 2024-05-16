import { Modal, Button } from "react-bootstrap";

function ModalBook({ bookInfo, handleCloseModal }) {
  return (
    <Modal
      show={true}
      onHide={handleCloseModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title><p className="text 2xl text-red-500">{bookInfo.title}</p></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-lg text-red-500">Genre: {bookInfo.genre}</p>
        <p className="text-lg text-red-500">Synopsis: {bookInfo.synopsis}</p>
        <p className="text-lg text-red-500">Year: {bookInfo.year}</p>
        <p className="text-lg text-red-500">Pages: {bookInfo.pages}</p>
        <p className="text-lg text-red-500">Pages: {bookInfo.author.name}</p>
        <p className="text-lg text-red-500">Pages: {bookInfo.author.otherBooks}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBook;
