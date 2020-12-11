import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import TestPage from "../../pages/test/testPage";
import Registration from "../../pages/registration/registration";
import Profile from "../../pages/profile/profile";
import PasswordRecovery from "../../pages/password_recovery/passwordRecovery";
import NewPassword from "../../pages/new_password/newPassword";
import Login from "../../pages/login/login";
import FourOFour from "../../pages/FourZeroFour/FourZeroFour";
import {Provider} from "react-redux";
import store from "../m2-BLL/Redux/reduxStore";
import Header from "./Header/Header";
import Main from "./Main";

const App = () => {


    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <>
                        <Main/>
                    </>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
