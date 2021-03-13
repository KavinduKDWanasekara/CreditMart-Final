import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBBtn,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import './Navbar.css';
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
  
      <MDBNavbar color="cyan" light expand="md" className="fixed w-full top-0 z-10 mb-40">
        <MDBNavbarBrand>
            <img src="static/images/logo1.png" alt="CREDIT MART" id="logo" className="m-0 h-60 w-20"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          
        <MDBNavbarNav left>
            <MDBNavItem>
              <MDBFormInline waves>
                {/* <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div> */}
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarNav right>
          <Link  to="/Login"><MDBBtn className="rounded-2xl p-2 h-12">Login</MDBBtn></Link>
          <Link  to="/Register"><MDBBtn className="rounded-2xl p-2 h-12" >Signup</MDBBtn></Link>


            {/* <MDBNavItem >
              <MDBNavLink to="#"><strong>Home</strong> </MDBNavLink> 
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#"><strong>Contract</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#"><strong>About</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#"><strong>My Profile</strong></MDBNavLink>
            </MDBNavItem> */}
          </MDBNavbarNav>
                  </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default Navbar;