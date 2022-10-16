import React from 'react'
import {Button,Alert,Container,Row,Col} from 'react-bootstrap';


export default function Button1() {
  return (
    <div> <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button>{' '}
    <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button>{' '}
    <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
</div>
  )
}
