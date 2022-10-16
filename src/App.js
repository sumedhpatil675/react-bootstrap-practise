import './App.css';
import Button1 from './components/Button1';
import { Alert1 } from './components/Alert1';
import { Container1 } from './components/Container1';
import { Accordin1 } from './components/Accordin1';

import {Navbar,Container,Row,Col} from 'react-bootstrap';
import { Counter } from './components/Counter';
import { Register } from './components/Register';
import { UserList } from './components/UserList';




function App() {
  return (
    <div className="App" >
         <>
     {/* <Button1/>
     <Alert1/>
     <Container1/>
     <Accordin1/> */}
<Navbar bg="dark" expand="sm" variant='dark'>

     <Container>

        <Navbar.Brand href="/">React Bootrap</Navbar.Brand>

     </Container>
</Navbar>
<Container className="mt-3">

<Row>

<Counter/>


<Register/>


</Row>

<Row>
<UserList/>


</Row>


        
</Container>
    </>
    </div>
  );
}

export default App;
