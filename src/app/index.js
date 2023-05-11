import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Home from "../home";
import CatImage from "../catimage/";
import FavoriteCat from "../favorites";
import Breeds from "../breeds";
import UploadCat from "../uploadimage";

import "bootstrap/dist/css/bootstrap.min.css";
import '../catimage/style.css';
import "../home/style.css";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home" style={{padding: "15px", paddingRigth: "10px"}}> Cat's API </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home"> Home </Nav.Link>
              <Nav.Link href="/image"> Image </Nav.Link>
              <Nav.Link href="/favorite"> Favorite </Nav.Link>
              <Nav.Link href="/breeds"> Breeds </Nav.Link>
              <Nav.Link href="/upload"> Upload </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
            <Routes>
            <Route path="/home" element={<Home />} />
              <Route path="/image" element={<CatImage />} />
              <Route path="/breeds" element={<Breeds />} />
              <Route path="/favorite" element={<FavoriteCat />} />
              <Route path="/upload" element={<UploadCat />} />
            </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;