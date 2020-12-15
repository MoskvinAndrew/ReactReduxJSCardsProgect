import React, {useState} from 'react';
import style from "./login.module.css";
import { Formik, Form, Field } from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import { Redirect } from 'react-router-dom';
import {loginTC} from "./login-reduser";
import SuperButton from "../../n1-main/m1-UI/common/SuperButton/SuperButton";



export const Login = () => {
    const loginProcessInProgress = useSelector<RootState,boolean>(state =>state.login.loginProcessInProgress);
    const isLoggedIn = useSelector<RootState,boolean>((state)=>state.login.isLoggedIn);
    let dispatch = useDispatch();

    function validateEmail(value:string) {
        let error;
        if (!value) {
            error = 'Field is Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    function validatePassword(value:string) {
        let error;
        if (value === 'admin') {
            error = 'Nice try!';
        }else if(value.split('').length < 5){
            error = 'To short password!';
        }
        return error;
    }
    if(isLoggedIn){
        return  <Redirect to={"/profile"}/>
    }
    return(
        <div className={style.wrapper}>
        <div>
        <h1>Signup</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe:false
            }}
            onSubmit={(values,{resetForm}) => {

               dispatch(loginTC(values));
               console.log(values);

               resetForm({values: {email: '', password: '', rememberMe: false}})
                values = { email: '',
                    password: '',
                    rememberMe:false}
            }}
        >
            {({ errors, touched, isValidating,resetForm }) => (
                <Form>

                    <div className={style.emailForm}>
                    <Field name="email" validate={validateEmail}  />
                    {errors.email && touched.email && <div>{errors.email}</div>}
                    </div>


                   <div className={style.emailForm}>
                       <Field name="password" validate={validatePassword} />
                    {errors.password && touched.password && <div>{errors.password}</div>}

                   </div>

                    <Field  name="rememberMe" type="checkbox" />

                    <button disabled={loginProcessInProgress} type="submit">Submit</button>

                </Form>
            )}
        </Formik>
    </div>
            <p>1qazxcvBG</p>
        </div>
)}
export default Login;