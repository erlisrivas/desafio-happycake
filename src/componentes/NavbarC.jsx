import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
    <Navbar bg="danger" variant="danger">
        <Container>
          <div className="justify-content-start">
          <Link to="/" className="text-white ms-3 text-decoration-none"><span>🏠</span>
          Home 
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none"> <span>📩</span>
          Contacto 
          </Link>
          </div>
          <Navbar.Brand className ="text-white"><span>🍰</span>Happy Cake </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
