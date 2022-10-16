import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';


export const Container1 = () => {
  return (
    <div> <Container fluid="sm">

    <Row style={{backgroundColor:"#fff3cd"}}>
      <p>fluid example</p>
      <Col>1 of 1</Col>
    </Row>
  </Container>
  <Container>
    <Row style={{backgroundColor:"rgb(101 255 221)"}}> 
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row style={{backgroundColor:"#fff3cd"}}>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
  </div>
  )
}
