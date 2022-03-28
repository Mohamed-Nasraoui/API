import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <header>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Workshop API</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>
      <Nav.Link href="/admin">admin</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </header>
  )
}

export default NavBar