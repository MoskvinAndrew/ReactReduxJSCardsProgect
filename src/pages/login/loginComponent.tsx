import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import LoginForm from "./loginForm";

export const LoginComponent: React.FC = () => {
    const isSignedUp = useSelector<RootState, boolean>(state => state.register.isSignedUp);


    // if (isSignedUp) {
    //     return <Redirect to={'/login'}/>
    // }


    return (
        <div >
            <LoginForm/>
        </div>
    )
};