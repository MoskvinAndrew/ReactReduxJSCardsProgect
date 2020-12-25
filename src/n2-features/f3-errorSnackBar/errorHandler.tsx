import React from 'react'

import {Alert, AlertProps} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {setError} from "../../n1-main/m2-BLL/Redux/app-Reducer";

export const AlertComponent = (props: AlertProps) => {
    const error = useSelector<RootState, string|null>(state => state.app.error);
    const dispatch = useDispatch();

    const timerAlert = () => {
     return   setTimeout(()=>{dispatch(setError(null))},2000)
    }
    timerAlert()
    return (

    <Alert variant="outlined" severity="error">
        {error}
    </Alert>
    )
}

