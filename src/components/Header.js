import React from 'react';

import {
  Container, Row, Col, Navbar, Nav, NavLink, NavItem
} from 'reactstrap';


const Header = (props) => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
    
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
        
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
            
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/" style={{background: '#b13737', color: '#000'}}>
                  UK NEWS
                </NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" style={props.type !== 'home' ? {color: props.styleFont} : {color: '#000'} } href="/">Home</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" style={props.type !== 'bbc-news' ? {color: props.styleFont} : {color: '#000'}} href="/news/bbc-news">BBC News</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" style={props.type !== 'business' ? {color: props.styleFont} : {color: '#000'}} href="/news/business">Business</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" style={props.type !== 'techcrunch' ? {color: props.styleFont} : {color: '#000'}} href="/news/techcrunch">TechCrunch</NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" style={props.type !== 'contacts' ? {color: props.styleFont} : {color: '#000'}} href="/contacts">Contacts</NavLink>
              </NavItem>
              
              
            </Nav>
          </Col>
          
        </Row>
      </Container>
      
    </Navbar>
  </header>
);

export default Header;