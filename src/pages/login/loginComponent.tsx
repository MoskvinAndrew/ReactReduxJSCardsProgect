import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import LoginForm from "./loginForm";

type PropsType = {}

export const LoginComponent: React.FC<PropsType> = (props) => {

    const isSignedUp = useSelector<RootState, boolean>(state => state.register.isSignedUp);

    if (isSignedUp) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            <LoginForm/>
        </div>
    )
};
