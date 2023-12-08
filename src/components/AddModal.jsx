import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddModal({ doctor, onClose }) {
  const [show, setShow] = useState(true);
  const[appointment,setAppointment]= useState({
    doctorID:doctor.id,
    patientName:"",
    appointmentDate:""
  })
  const{doctorID,patientName,appointmentDate}=appointment
  const handleName=(e)=>{
    setAppointment({...appointment,[e.target.id]:e.target.value})
  }
  // console.log(appointment);
  const handleDate=(e)=>{
    setAppointment({...appointment,[e.target.id]:e.target.value})
  }

  console.log(appointment);

  const handleClose = () => {
    setShow(false);
    onClose();
  };
  const handleAppointmentSubmit=(e)=>{
    e.preventDefault()
    alert("randevu kaydedildi")
    onClose()
   
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><h4 className='text-danger'>Appointment For {doctor.name}</h4></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleAppointmentSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label><p className="fw-bold">Patient Name</p></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={handleName}
              id='patientName'
              value={patientName}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label>
           <p>Date</p>
          </Form.Label>
          <Form.Control
            type="datetime-local"
            onChange={handleDate}
            id='appointmentDate'
            value={appointmentDate}
            
          />
        </Form.Group>
        <Button variant="success" type='submit'>
          Submit
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        </Form>
      </Modal.Body>
    
    </Modal>
  );
}

export default AddModal;
