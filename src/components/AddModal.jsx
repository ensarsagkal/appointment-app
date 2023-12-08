import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddModal({ doctor, onClose }) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><h4 className='text-danger'>Appointment For {doctor.name}</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><p className="fw-bold">Patient Name</p></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>
           <p>Date</p>
          </Form.Label>
          <Form.Control
            type="datetime-local"
            
          />
        </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='mx-auto'>
       
        <Button variant="success" type='submit' onClick={handleClose}>
          Submit
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
