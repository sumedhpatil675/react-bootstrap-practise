import './App.css';
import Button1 from './components/Button1';
import { Alert1 } from './components/Alert1';
import { Container1 } from './components/Container1';
import { Accordin1 } from './components/Accordin1';

import {Navbar,Container} from 'react-bootstrap';
import { Counter } from './components/Counter';




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
<Counter/>

    </>
    </div>
  );
}

export default App;
