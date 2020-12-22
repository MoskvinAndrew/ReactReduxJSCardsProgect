import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './nav.module.css';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to={'/registration'}>Registration</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/packs'}>Packs of cards</NavLink>
            <NavLink to={'/passwordRecovery'}>Reset Password</NavLink>
            <NavLink to={'/newPassword'}>New password</NavLink>
            <NavLink to={'/testPage'}>TestPage</NavLink>
        </div>
    );
}
