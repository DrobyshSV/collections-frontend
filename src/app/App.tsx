import React, { memo } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { AppRouter } from './providers/AppRouter';

const App = memo(() => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/profile/1">profile</Nav.Link>
            <Nav.Link href="/collections">collections</Nav.Link>
            <Nav.Link href="/collections/1">collection/detail</Nav.Link>
            <Nav.Link href="/collections/1/edit">
              collection/detail/edit
            </Nav.Link>
            <Nav.Link href="/admin">admin</Nav.Link>
            <Nav.Link href="/forbidden">forbidden</Nav.Link>
            <Nav.Link href="/wdcsdvdsv">notfound</Nav.Link>
            <Nav.Link href="/about">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <AppRouter />
    </>
  );
});
App.displayName = 'App';

export default App;
