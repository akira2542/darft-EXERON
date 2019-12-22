import React, { Component } from 'react'
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
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from '../components/MyNav'
import MyBanner from '../components/MyBanner'



export default class Index extends Component {


    render() {
        return (
            <React.Fragment>
            <MyNav />
            <MyBanner />
        </React.Fragment>
        )
    }
}
