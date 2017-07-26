import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import './Style.css';
import logo from './logo-horizontal-white.svg';


class Header extends Component {
  render() {
    return (

      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to='/'><img className='logo' src={logo} alt="logo"/></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <LinkContainer to='/demo'>
                <NavItem eventKey={2}>Demo</NavItem>
              </LinkContainer>
              <LinkContainer to='/about'>
                <NavItem eventKey={3}>About</NavItem>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <NavItem eventKey={4}>Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    );
  }
}

export default Header;
