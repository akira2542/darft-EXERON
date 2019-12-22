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



const MyNavItem = props => (
        <NavItem>
        <NavLink style={{padding:"10px", color:"#cecece",margin:"0px 15px 0px 15px"}}>
            {props.children}
        </NavLink>
        </NavItem>
    )
const NavStyle = {
    backgroundColor:"rgb(0,0,0,0)",
    listStyleType:"none",fontFamily:'sans-serif',
    fontSize:"0.8em",
    paddingTop:"30px",
    position:"fixed",
    width:"100%",
    zIndex:"1"
    }

export default () => (
    <div>
        <Navbar style={NavStyle} light expand="md">
           <NavbarBrand style={{marginLeft:"70px"}}>
               <img src="/static/logo.png" />
           </NavbarBrand>
           <NavItem>
              <NavLink style={{backgroundColor:"white",borderRadius:"20px",padding:"10px 20px 10px 20px",margin:"0 20px 0 50px"}}>Home</NavLink>
            </NavItem>
           <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color:'#cecece'}}>
                What is EXERON
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <MyNavItem>
                Applications
            </MyNavItem>
            <MyNavItem>
                Benefits
            </MyNavItem>
            <MyNavItem>
                Dowloads
            </MyNavItem>
            <MyNavItem>
                FAQ
            </MyNavItem>
            <MyNavItem>
                About IPS
            </MyNavItem>
            <MyNavItem>
                Contact Us
            </MyNavItem>
        </Navbar>
    </div>


)