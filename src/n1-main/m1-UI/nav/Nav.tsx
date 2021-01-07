import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './nav.module.css';
import {RoutingStringConstants} from "../../m3-DAL/routingStringConstants";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to= {RoutingStringConstants.registration} >Registration</NavLink>
            <NavLink to={RoutingStringConstants.login}>Login</NavLink>
            <NavLink to={RoutingStringConstants.profile}>Profile</NavLink>
            <NavLink to={RoutingStringConstants.packs}>Packs of cards</NavLink>
            <NavLink to={RoutingStringConstants.cards}>CARDS</NavLink>
            <NavLink to={RoutingStringConstants.passwordRecovery}>Reset Password</NavLink>
            <NavLink to={RoutingStringConstants.newPassword}>New password</NavLink>
            <NavLink to={RoutingStringConstants.testPage}>TestPage</NavLink>
        </div>
    );
}
