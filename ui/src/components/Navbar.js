import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (

      <MDBNavbar dark expand="md" className="w-full top-0 z-10 text-m" color="blue-gradient">
        <MDBNavbarBrand>
            <img src="static/images/logog.png" alt="CREDIT MART" id="logo" className="m-0  w-14"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav right>

            <MDBNavItem className="active:bg-green-700">
              <MDBNavLink to="/profile" className="mx-2 rounded-lg px-3 hover:bg-blue-400" ><strong>My Profile</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/dashboard" className=" mx-2 rounded-lg px-3 hover:bg-blue-400" ><strong>My Dashboard</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/explore" className="mx-2 rounded-lg px-3 hover:bg-blue-400"><strong>Explore</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contract1" className="mx-2 rounded-lg px-3 hover:bg-blue-400"><strong>Contract</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/logout" className="mx-2 rounded-lg px-3 hover:bg-blue-400"><strong>Log out</strong></MDBNavLink>
            </MDBNavItem>

          </MDBNavbarNav>
            </MDBCollapse>
      </MDBNavbar>
    
    );
  }
}

export default Navbar;