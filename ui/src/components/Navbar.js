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
      <MDBNavbar color="cyan" light expand="md" className="fixed w-full top-0 z-10 font-mono text-lg">
        <MDBNavbarBrand>
            <img src="static/images/logo1.png" alt="CREDIT MART" id="logo" className="m-0 h-60 w-20"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBNavbarNav right>

            <MDBNavItem className="active:bg-green-700">
              <MDBNavLink to="/Profile" className="mx-2 focus:bg-blue-500 rounded-xl hover:bg-blue-700"><strong>My Profile</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Dashboard" className=" mx-2 focus:bg-blue-500 rounded-xl hover:bg-blue-700 group-hover:text-white"><strong>My Dashboard</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Explore" className="mx-2 focus:bg-blue-500 rounded-xl hover:bg-blue-700"><strong>Explore</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Contract" className="mx-2 focus:bg-blue-500 rounded-xl hover:bg-blue-700"><strong>Contract</strong></MDBNavLink>
            </MDBNavItem>



          </MDBNavbarNav>
                  {/* </MDBCollapse> */}
      </MDBNavbar>
    // </Router>
    );
  }
}

export default Navbar;