import React from 'react';
import {RegistrationForm} from "./RegistrationForm";
import s from "./registration.module.css"
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";

type PropsRegisterType = {}

export const RegistrationComponent: React.FC<PropsRegisterType> = () => {

    const isLoggedIn = useSelector<RootState, boolean>(state => state.login.isLoggedIn);
    const isSignedUp = useSelector<RootState, boolean>(state => state.register.isSignedUp);

    if (isSignedUp && !isLoggedIn) {
        return <Redirect to={'/login'}/>
    } else if (isSignedUp && isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.registration}>
            <RegistrationForm/>
        </div>
    )
};