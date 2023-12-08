import React, { useState } from 'react';
import { doctorData } from '../helpers/data';
import AddModal from './AddModal';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctor = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <Container>
      <Row>
        {doctorData.map((doctor) => (
          <Col key={doctor.id}>
            <Card style={{ width: '18rem' }} onClick={() => handleDoctor(doctor)}>
              <Card.Img variant="top" src={doctor.img} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>
                  {doctor.dep}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedDoctor && <AddModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />}
    </Container>
  );
}

export default Doctors;