import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';




function SiteNavBar() {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container>
        <NavLink className='navbar-brand' to="/">Anasayfa</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className='nav-link' to="/todo">Yemekler</NavLink>
          </Nav>
        </Navbar.Collapse>

        <div className='text-light'>
        <NavLink className='nav-link' to="giris-yap">Giriş Yap</NavLink>
        </div>


      </Container>
    </Navbar>
  );
}

export default SiteNavBar;


