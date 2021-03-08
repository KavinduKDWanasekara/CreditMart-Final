import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import './Navbar.css';

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
    // <Router >
      <MDBNavbar color="grey" light expand="md" >
        <MDBNavbarBrand>
            <img src="logo.png" alt="CREDIT MART" id="logo" className="m-0"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBNavbarNav right>

            <MDBNavItem>
              <MDBNavLink to="/Profile"><strong>My Profile</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Dashboard"><strong>My Dashboard</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Explore"><strong>Explore</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Contract"><strong>Contract</strong></MDBNavLink>
            </MDBNavItem>



          </MDBNavbarNav>
                  {/* </MDBCollapse> */}
      </MDBNavbar>
    // </Router>
    );
  }
}

export default Navbar;