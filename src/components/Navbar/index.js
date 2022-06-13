import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './Navbar'

const Navbar = ({toggle}) => {
    const newLocal = <img src={require('../../images/logo.svg').default} />;
  return (
    <>
        <Nav>
            <NavbarContainer id="home">
            <a href="https://google.com" target="_blank" rel="noreferrer">
                <img src={require('../../images/logo.svg').default} alt="example" />
                </a>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="vehicules">Vehicules</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="events">Evènements</NavLinks>
                    </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>

    </>
  );
};

export default Navbar