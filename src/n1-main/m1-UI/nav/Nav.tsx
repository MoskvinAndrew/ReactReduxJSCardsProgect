import React from 'react';
import {RoutingStringConstants} from "../../m3-DAL/routingStringConstants";
import {Nav, NavBtn, NavBtnLink, NavLink, NavMenu, NavMobileBar} from "./navBarElements";


export const NavBar = () => {
    return (
        <Nav>
            <NavLink to={'/'}>
                <h1>Logo</h1>
            </NavLink>
            <NavMobileBar/>
            <NavMenu>
                <NavLink to={RoutingStringConstants.profile}>
                    Profile
                </NavLink>
                <NavLink to={RoutingStringConstants.packs}>
                    Packs of cards
                </NavLink>
                <NavLink to={RoutingStringConstants.passwordRecovery}>
                    Reset Password
                </NavLink>
                <NavLink to={RoutingStringConstants.newPassword}>
                    New password
                </NavLink>
                <NavLink to={RoutingStringConstants.testPage}>
                    TestPage
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to={RoutingStringConstants.login}>
                    Sign in
                </NavBtnLink>
                <NavBtnLink to={RoutingStringConstants.registration}>
                    Sign up
                </NavBtnLink>
            </NavBtn>
        </Nav>
    );
}
