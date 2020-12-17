import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Provider} from "react-redux";
import store from "../m2-BLL/Redux/reduxStore";
import Header from "./Header/Header";
import Main from "./Main/Main";

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
