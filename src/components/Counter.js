import React,{useState} from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap';


export const Counter = () => {

        let [state,setState] = useState(
         {
            count:0,
        });

        let incr=()=>
        {
            setState({
                count: state.count+1,
            })
        };
        
        let decr=()=>
        {
            setState({
                count: state.count-1,
            })
        };



    return (
   

            <Col xs="4" >
            
        <Card className="shadow-lg">
                    <Card.Body>
                            <p className="display-5">{state.count}</p>
                            <Button variant="success" onClick={incr}>+</Button>{' '}
      <Button variant="danger" onClick={decr}>-</Button>{' '}

                    </Card.Body>
            
            </Card>            
         
</Col>


  )
}
