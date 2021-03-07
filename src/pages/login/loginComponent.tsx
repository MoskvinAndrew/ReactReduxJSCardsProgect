import React from 'react';
import LoginForm from "./loginForm";
import {useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {Redirect} from "react-router-dom";

type PropsType = {}

export const LoginComponent: React.FC<PropsType> = (props) => {
    const isLoggedIn = useSelector<RootState, boolean>(state => state.login.isLoggedIn);

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <LoginForm/>
        </div>
    )
};