import React, {useState} from 'react';
import style from "./login.module.css";
import atom from "./../../images/atom.svg"
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {loginTC} from "../../n1-main/m2-BLL/Redux/login-reducer";
import {Redirect, useHistory} from 'react-router-dom';
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
import {RoutingStringConstants} from "../../n1-main/m3-DAL/routingStringConstants";
import {AlertComponent} from "../../n2-features/f3-errorSnackBar/errorHandler";
import loading from "./../../images/hzk6C.gif"


const LoginForm = () => {
    const error = useSelector<RootState, string|null>(state => state.app.error);

    const loginProcessInProgress = useSelector<RootState, boolean>(state => state.login.loginProcessInProgress);
    const isLoggedIn = useSelector<RootState, boolean>((state) => state.login.isLoggedIn);
    const dispatch = useDispatch();


    const history = useHistory();



    const redirectFuncForgotPassword = () => {
        history.push(RoutingStringConstants.passwordRecovery);
        };
    const redirectFuncRegister = () => {
        history.push(RoutingStringConstants.registration);

    };

    const errorStyle = {
        color: 'red',
        margin: '5px 0px',
    }


    const formik = useFormik({
        validate: (values) => {
            if (!values.email) return {email: "email is required"};
            if (!values.email.split("").includes('@')) return {email: "enter correct email"};
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
        return <Redirect to={RoutingStringConstants.profile}/>
    };
    return <div className={style.wrapper}>


        {/*{loginProcessInProgress ? <div className={style.overlay}>*/}
        {/*    <img src= {loading}/>*/}
        {/*</div>:<div className={style.logo}>*/}
        {/*    <img src={atom}/>*/}
        {/*    <h1 className={style.LogoName}>React Education Cards</h1>*/}
        {/*</div>}*/}


        <div className={style.logo}>
            {loginProcessInProgress ?<img className={style.loadingImg} src= {loading}/>:<img src={atom}/>}
            <h1 className={style.LogoName}>React Education Cards</h1>
        </div>


        <Grid container justify="center">
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            <h2 className={style.LogoText}>SignUp</h2>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                aria-hidden={loginProcessInProgress}
                                size="medium"
                                type="email"
                                label="Email"
                                {...formik.getFieldProps('email')}
                            />
                            {/*{formik.errors.email ? formik.errors.email : null}*/}

                            {formik.errors.email && formik.touched.email ?
                                <div style={errorStyle}>{formik.errors.email}</div> : null}

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
                            <h4 >
                                <p  className={style.forgotPasswordLink} onClick={redirectFuncForgotPassword}>Forgot
                                    password?
                                </p>
                                <p  className={style.forgotPasswordLink} onClick={redirectFuncRegister}>Registration
                                </p>
                            </h4>
                        </FormGroup>
                    </FormControl>
                </form>
                {error && <AlertComponent/>}
            </Grid>
        </Grid>

    </div>

}
export default LoginForm;