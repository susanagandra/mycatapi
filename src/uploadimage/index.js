import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UploadCat = () => {
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState(null);
  const [newImage, setNewImage] = useState([]);

  const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";
  const url = "https://api.thecatapi.com/v1/images/upload";

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleUpdateCat = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("file", file);

    const requestOptions = {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
      },
      body: formData,
    };

    fetch(url, requestOptions)
      .then((response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          throw new Error("Upload failed.");
        }
        return response.json();
      })
      .then((data) => {
        setNewImage((prevImage) => [...prevImage, { id: data.id, url: data.url }]);
        handleCloseModal();
        setFile(null);
      })
      .catch((error) => {
        setIsSubmitting(false);
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
            <Form.Group controlId="catImage">
              <Form.Label>New Cat image</Form.Label>
              <Form.Control
                type="file"
                id="file-input"
                placeholder="Choose an image file"
                onChange={(event) => setFile(event.target.files[0])}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={!file || isSubmitting}
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
      <div className="gridUpload">
        {newImage.map((uploadImage) => (
          <div key={uploadImage.id}>
            <img src={uploadImage.url} alt="cat" />
          </div>
        ))}
      </div>
    </>
  );
};

export default UploadCat;
