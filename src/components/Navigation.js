import 'bootstrap/dist/css/bootstrap.min.css';
import '../component-css/Navigation_CSS.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation (){
    return(
        <Navbar bg="transparent" variant="dark" expand="lg">
            <Navbar.Brand href="#home">CM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Education</Nav.Link>
                    <Nav.Link href="#link">Work Experience</Nav.Link>
                    <Nav.Link href="#link">Projects</Nav.Link>
                    <Nav.Link href="#link">Galleria of Cats</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Navigation;