import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import "../styles/Header.css";
import Logo from "../assets/Logo@2x.png";
import ListImg from "../assets//Group 4.svg";
// import addoutline from "../assets/add-outline@2x.png"
import { NavLink } from "react-router-dom";

function Header() {


  
  return (
    <Navbar
      expand="md"
      sticky="top"
      style={{
        backgroundColor: "#FFF",
      }}
    >
      <Container className="customNav">
        <NavLink to="/">
          <img src={Logo} className="logo" alt="/logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end ">
            <nav>
              <div className="wrapper">
                <ul className="nav-links">
                  <li>
                    <a href="/">
                      <NavDropdown
                        title="Categories"
                        className="navbar_lists"
                        style={{
                          color: "#c4c2c2",
                        }}
                      />
                    </a>
                    <div className="mega-box">
                      <div className="contentes">
                        <div className="main">
                          <p>
                            <span>|</span> All
                          </p>
                          <ul className="mega-links">
                            <li>
                              <NavLink to="/community">Community</NavLink>
                            </li>
                            <li>
                              <NavLink to="/libraries">Libraries</NavLink>
                            </li>
                            <li>
                              <NavLink to="/network">Network</NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="main">
                          <ul className="mega-links">
                            <li>
                              <NavLink to="/nodesoftware">
                                Node Software
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/protocols">Protocols</NavLink>
                            </li>
                            <li>
                              <NavLink to="/services">Services</NavLink>
                            </li>
                            <li>
                              <NavLink to="/tools">Tools</NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <Nav.Link as={NavLink} to="/list" className="navbar_list">
              <span>
                {" "}
                <img src={ListImg} alt="" />
              </span>{" "}
              List
            </Nav.Link>
          </Nav>

          <Nav.Link as={NavLink} to="/resource">
            <Button className="btn">+ Add Resource</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
