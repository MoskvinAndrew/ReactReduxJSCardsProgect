import React from 'react';
import {RegistrationForm} from "./RegistrationForm";
import s from "./registration.module.css"
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";

export const RegistrationComponent: React.FC = () => {
    const isSignedUp = useSelector<RootState, boolean>(state => state.register.isSignedUp);
    const isLoggedIn = useSelector<RootState, boolean>(state => state.login.isLoggedIn);


    // if (isSignedUp) {
    //     return <Redirect to={'/login'}/>
    // }
     if(isLoggedIn){
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.registration}>
            <RegistrationForm />
        </div>
    )
};