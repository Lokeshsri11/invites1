import { useState, useEffect } from "react";
import { Navbar, Nav, Container, copyToClipboard } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon7 from '../assets/img/nav-icon7.png';
import navIcon6 from '../assets/img/nav-icon6.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';


import { HashLink } from 'react-router-hash-link';


import {
  BrowserRouter as Router
} from "react-router-dom";







export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="https://nsnco.in/" target="_blank">
            <img src={logo} alt="Logo" />


          </Navbar.Brand>
          {/* <div class="tooltip-content">
            <h2>Share to invite </h2>
          </div>
 */}






          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Share to invite </Nav.Link>
              {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Projects</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Videos</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="whatsapp://send?text= We invite you to join us and take part in this moment for change (Link - https://www.nsnco.in/invite)" data-action="share/whatsapp/share"
                  target="_blank"><img src={navIcon7} alt="" /></a>
                <a href="https://twitter.com/intent/tweet?via= We invite you to join us and take part in this moment for change (Link - https://www.nsnco.in/invite)" data-action="share/whatsapp/share"
                  target="_blank"><img src={navIcon6} alt="" /></a>
                {/* <a href="https://www.linkedin.com/shareArticle?mini=true&url=[https://www.nsnco.in/invite]&title=[We invite you to join us and take part in this moment for change]" target="_blank" ><img src={navIcon1} alt="" /></a>
                <a href="http://www.facebook.com/sharer.php?u=<https://www.nsnco.in/invite>&p[title]=<We invite you to join us and take part in this moment for change>" data-action="share/facebook/share" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/?url=https://www.drdrop.co/= We invite you to join us and take part in this moment for change (Link - https://www.nsnco.in/invite)" data-action="share/instagram/share" target="_blank"><img src={navIcon3} alt="" /></a> */}



              </div>


              <HashLink to='Footer.js'>

                {/* <button className="vvd" ><span>Invites</span></button> */}


              </HashLink>
            </span>
          </Navbar.Collapse>


        </Container>
      </Navbar>
    </Router>
  )
}
