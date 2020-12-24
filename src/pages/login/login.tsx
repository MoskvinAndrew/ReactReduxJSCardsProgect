import React, {useState} from 'react';
import style from "./login.module.css";

import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {Redirect} from 'react-router-dom';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from "@material-ui/core";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {loginTC} from "../../n1-main/m2-BLL/Redux/login-reduser";


const Login = () => {
    const loginProcessInProgress = useSelector<RootState, boolean>(state => state.login.loginProcessInProgress);
    let isLoggedIn = useSelector<RootState, boolean>((state) => state.login.isLoggedIn);
    let dispatch = useDispatch();


    const formik = useFormik({
        validate: (values) => {
            if (!values.email) return {email: "email is required"};
            if (!values.password)
                return {password: "password is required"}


        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: (values, {resetForm}) => {
            dispatch(loginTC(values));
            console.log(values);
            resetForm({values: {email: '', password: '', rememberMe: false}})
            values = {
                email: '',
                password: '',
                rememberMe: false
            }
        }
    })

    if (isLoggedIn) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={style.wrapper}>
        <Grid container justify="center">
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <p>To log in get registered
                                <a href={'https://social-network.samuraijs.com/'}
                                   target={'_blank'}>here
                                </a>
                            </p>
                            <p>or use common test account credentials:</p>
                            <p>Email: nya-admin@nya.nya</p>
                            <p>Password: 1qazxcvBG</p>
                            <h1>Signup</h1>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                type="email"
                                label="Email"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email ? formik.errors.email : null}
                            <TextField
                                id="password"
                                // type="password"
                                label="Password"
                                margin="normal"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password ? formik.errors.password : null}
                            <FormControlLabel
                                label={'Remember me'}
                                control={<Checkbox
                                    {...formik.getFieldProps('rememberMe')}
                                    checked={formik.values.rememberMe}
                                />}

                            />
                            <Button type={'submit'} variant={'contained'} color={'primary'}
                                    disabled={loginProcessInProgress}>Login</Button>
                            <h4>
                                <a>Forgot password?</a>
                            </h4>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    </div>

}
export default Login;