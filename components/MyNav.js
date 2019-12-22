import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import LogoImg from '../public/logo.png'

export default () => (
    <div>
        <Navbar color="light" light expand="md">
           <NavbarBrand>
               <img src="/static/logo.png" />
           </NavbarBrand>
        </Navbar>
    </div>


)