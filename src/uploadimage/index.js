import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UploadCat = () => {
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newImage, setNewImage] = useState([]);
  

  const apiKey ="live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";
  const url = "https://api.thecatapi.com/v1/images/upload";

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleUpdateCat = (event) => {

    event.preventDefault();
    setIsSubmitting(true);
    

    const formData = new FormData();

    const requestOptions = {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    };

    fetch(url, requestOptions)
      .then((response) => {
        setIsSubmitting(false);
        console.log(response.response);
        handleCloseModal();
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Upload your favorite Cat Image
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upload your breed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateCat}>
            <Form.Group controlId="catimage">
              <Form.Label>New Cat image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Choose an image file"
                onChange={(e) => setNewImage((e.target.files[0]))}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={!newImage || isSubmitting}
            >
              {isSubmitting ? "Uploading..." : "Upload"}
            </Button>{" "}
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {error && <div className="text-danger">{error}</div>}
      {newImage && (
        <div>
          <img src={newImage} alt="cat" />
        </div>
      )}
    </>
  );
};

export default UploadCat;
