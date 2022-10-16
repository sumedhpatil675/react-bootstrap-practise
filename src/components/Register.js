import React from 'react'
import {Card,Form,Container,Row,Col,Button} from 'react-bootstrap';

export const Register = () => {
  return (
   
        <Col xs={8}>
        <Card className="shadow-lg">

<Card.Header className="p-3" style={{backgroundColor:'#003f76', color:'rgb(255 255 255)' }}>
    <h4>Register</h4>
</Card.Header>

<Card.Body>
    <Form >
        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Username"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Email"/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Password"/>
        </Form.Group>

        <Form.Group className="mb-3">
      <Button className="success" type="submit" size="lg">Register</Button>{' '}
        </Form.Group>


    </Form>


</Card.Body>

</Card>

        </Col>


    
  )
}
