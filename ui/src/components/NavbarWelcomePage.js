import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBBtn,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
  
      <MDBNavbar color="blue-grey lighten-2" light expand="md" className="w-full top-0 z-10">
        <MDBNavbarBrand>
            <img src="static/images/logog.png" alt="CREDIT MART" id="logo" className="m-0 w-14"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <Link  to="/Login"><MDBBtn color="blue" className="rounded-lg p-2 w-24 h-12">Login</MDBBtn></Link>
          <Link  to="/Register"><MDBBtn color="blue" className="rounded-lg p-2 w-24 h-12" >Signup</MDBBtn></Link>
          </MDBNavbarNav>
                  </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default Navbar;