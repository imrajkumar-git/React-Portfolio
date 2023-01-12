import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/3.ico";
import {
  AiOutlineTeam,
  AiOutlineUser,
  AiFillCustomerService,
  AiFillPhone,
  AiFillProject,
  AiFillHome,
  AiFillFileWord
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/home" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
            <a class="nav-link click-scroll" href="#section_1">

                <AiFillHome style={{ marginBottom: "2px" }} /> Home
                </a>
            </Nav.Item>

            <Nav.Item>
            <a class="nav-link click-scroll" href="#section_2">

                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </a>
           </Nav.Item>
 <Nav.Item>
            <a class="nav-link click-scroll" href="#section_3">

                <AiFillFileWord style={{ marginBottom: "2px" }} /> Skills
                </a>
</Nav.Item>

<Nav.Item>
            <a class="nav-link click-scroll" href="#section_4">

                <AiFillCustomerService style={{ marginBottom: "2px" }} /> Services
                </a>
</Nav.Item>

            <Nav.Item>
            <a class="nav-link click-scroll" href="#section_5">

                <AiOutlineTeam style={{ marginBottom: "2px" }} />My Team
                </a></Nav.Item>

                <Nav.Item>
            <a class="nav-link click-scroll" href="#section_6">

                <AiFillProject style={{ marginBottom: "2px" }} />My Projects
                </a></Nav.Item>
            <Nav.Item>
            <a class="nav-link click-scroll" href="#section_7">

<AiFillPhone style={{ marginBottom: "2px" }} /> Contact Us
</a>
            </Nav.Item>

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
