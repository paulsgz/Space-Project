import { Navbar, Container, Nav} from "react-bootstrap";
import Logo from '../images/logo.png'
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/github.png';
import navIcon3 from '../images/nav-icon3.svg';
import { HashLink as Link} from 'react-router-hash-link';
import { ExternalLink } from 'react-external-link';

export const NavBar = () => {
    return(
    <Navbar collapseOnSelect expand="xl" className="nav sticky-top">
        <Container className="container">
        <Navbar.Brand href="#ome" className="img-fluid">
        <img src={Logo} alt="Logo" />
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="collapsedNav">
                <Nav className="ms-auto nav-link nav1 col-xl-1">
                    <Nav.Link href="/home" className="link ">Home</Nav.Link>
                    <Link to="#contacts" className="link ">Contact</Link>
                    <Link to="/login" className="link ">LogIn</Link>
                </Nav>
                <Nav className="ms-auto nav-link nav2">
                <div className="social-icon">
                    <ExternalLink href="http://linkedin.com/in/christian-paul-seguiza-394292195"><img src={navIcon1} alt=""></img></ExternalLink>
                    <ExternalLink href="https://github.com/paulsgz"><img src={navIcon2} alt=""></img></ExternalLink>
                    <ExternalLink href="https://www.instagram.com/paulsgz31/"><img src={navIcon3} alt=""></img></ExternalLink>
                </div>
                <button className="button" href="#Explore">
                    <span><Link className="explore" to="#explore">Explore</Link></span>
                </button>
            </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
}