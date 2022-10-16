import React, { useState } from 'react'
import {Card,Form,Container,Row,Col,Button} from 'react-bootstrap';

export const Register = () => {

    const [state,setState] = useState({

        user:{
            username:'',
            email:'',
            password:'',
        }

    })

    let updateInput=(e)=>
    {
        setState(
            {
                ...state,
                [e.target.name]:e.target.value,
            }
        )
    }

    let registerUser=(e)=>
    {
        e.preventDefault();
        console.log(state);
    }


  return (    
    

        <Col xs={8}>
   <pre>{JSON.stringify(state)}</pre> 

        <Card className="shadow-lg">

<Card.Header className="p-3" style={{backgroundColor:'#003f76', color:'rgb(255 255 255)' }}>
    <h4>Register</h4>
</Card.Header>

<Card.Body>
    <Form >
        <Form.Group className="mb-3">
            <Form.Control type="text" name="username" placeholder="Username" onChange={updateInput}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Control type="text" name="email" placeholder="Email"  onChange={updateInput}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Control type="text" name="password" placeholder="Password"  onChange={updateInput} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Button type="submit" variant="primary" size="lg" onClick={registerUser}>Register</Button>{' '}
        </Form.Group>


    </Form>


</Card.Body>

</Card>

        </Col>


    
  )
}
