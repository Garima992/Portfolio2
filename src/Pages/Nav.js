import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';




const NavBar=()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
           {/* <div className='garima'>GarimaC.</div>  */}
          
          <Navbar.Brand href="/"> 
         <img src="logo.png"  className='d-inline-block align-top' alt='logo'/>
          </Navbar.Brand>

          <Nav className="d-flex">
            <Nav.Link>
              <Link className='no-link' to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='no-link' to="/About">About</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='no-link' to="/Skills">Skills</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='no-link' to="/Portfolio">Portfolio</Link>
            </Nav.Link>
            <Nav.Link>
            <Link className='no-link' to="/Contact">Contact</Link>
            </Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;
  