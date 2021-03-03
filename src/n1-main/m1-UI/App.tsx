import React, {useEffect} from 'react';
import './App.css';
import {RootState} from "../m2-BLL/Redux/reduxStore";
import {initializedAppThunk, StatusPageType} from "../m2-BLL/Redux/app-Reducer";
import {useDispatch, useSelector} from "react-redux";
import {CircularProgress} from "@material-ui/core";
import Main from "./Main/Main";

export const App = () => {

    const isInitiallizedApp = useSelector<RootState, boolean>(state => state.app.isInitializedApp)
    const appStatus = useSelector<RootState, StatusPageType>(state => state.app.status)
    const dispatch = useDispatch()

    //for initialization
    useEffect(() => {
        dispatch(initializedAppThunk())
    }, [])

    if (!isInitiallizedApp || appStatus == 'loading') {
        return <div className={'circular__progress'}>
            <CircularProgress/>
        </div>
    }
    // --- for initialization---

    return (
        <div className="App">
            <Main/>
        </div>
    );
}