import React, {useState} from 'react';
import {RoutingStringConstants} from "../../m3-DAL/routingStringConstants";
import s from '../nav/nav.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "./Button";

export const NavBar = () => {

    const navItems = [
        {title: 'Profile', to: RoutingStringConstants.profile, className: 'nav-link', classNameLi: 'nav__menu_li'},
        {title: 'Packs of cards', to: RoutingStringConstants.packs, className: 'nav-link', classNameLi: 'nav__menu_li'},
        {title: 'Cards', to: RoutingStringConstants.cards, className: 'nav-link', classNameLi: 'nav__menu_li'},
        {
            title: 'Reset Password',
            to: RoutingStringConstants.passwordRecovery,
            className: 'nav-link',
            classNameLi: 'nav__menu_li'
        },
        {
            title: 'New Password',
            to: RoutingStringConstants.newPassword,
            className: 'nav-link',
            classNameLi: 'nav__menu_li'
        },
        {title: 'test page', to: RoutingStringConstants.testPage, className: 'nav-link', classNameLi: 'nav__menu_li'},
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
            <div className={s['menu-icon']} onClick={onClickHandler}>
                <i className={isActiveMode ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isActiveMode ? `${s.nav_menu} ${s.active}` : `${s.nav_menu}`}>
                {navItems.map((item, index) => {
                    return (
                        <li key={index} className={s[`${item.classNameLi}`]}>
                            <NavLink to={item.to} className={s[`${item.className}`]}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <div className={s.navBar__block_btn}>
                <NavLink to={RoutingStringConstants.login}>
                    <Button buttonSize={"btn--small"} buttonStyle={"btn--outline"}>
                        Sign In
                    </Button>
                </NavLink>
                <NavLink to={RoutingStringConstants.registration}>
                    <Button buttonStyle={'btn--outline'} buttonSize={'btn--small'}>
                        Sign Up
                    </Button>
                </NavLink>
            </div>
        </nav>
    );
}
