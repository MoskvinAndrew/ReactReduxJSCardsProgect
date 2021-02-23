import React, {useState} from 'react';
import {RoutingStringConstants} from "../../m3-DAL/routingStringConstants";
import s from '../nav/nav.module.css';
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    const navItems = [
        {title: 'Profile', to: RoutingStringConstants.profile, className: 'nav-link'},
        {title: 'Packs of cards', to: RoutingStringConstants.packs, className: 'nav-link'},
        {title: 'Cards', to: RoutingStringConstants.cards, className: 'nav-link'},
        {title: 'Reset Password', to: RoutingStringConstants.passwordRecovery, className: 'nav-link'},
        {title: 'New Password', to: RoutingStringConstants.newPassword, className: 'nav-link'},
        {title: 'test page', to: RoutingStringConstants.testPage, className: 'nav-link'},
    ];

    const [isActiveMode, setIsActiveMode] = useState<boolean>(false)

    const onClickHandler = () => {
        setIsActiveMode(!isActiveMode)
    }

    return (
        <nav className={s.navBar__block}>
            <NavLink to={RoutingStringConstants.profile} className={s.navBar__block_logo}>
                <h1>Logo</h1>
            </NavLink>
            <div className={'menu-icon'} onClick={onClickHandler}>
                <i className={isActiveMode ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isActiveMode ? `${s.nav_menu} ${s.active}` : `${s.nav_menu}`}>
                {navItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.to} className={s[`${item.className}`]}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <div className={s.navBar__block_btn}>
                <NavLink to={RoutingStringConstants.login}>
                    Sign in
                </NavLink>
                <NavLink to={RoutingStringConstants.registration}>
                    Sign up
                </NavLink>
            </div>
        </nav>
    );
}
