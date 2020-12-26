import {useFormik} from "formik";
import React from "react";
import s from "./registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../../n1-main/m2-BLL/Redux/register-Reducer";
import * as yup from 'yup';

import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";
import style from "../login/login.module.css";
import atom from "../../images/atom.svg";
import {AlertComponent} from "../../n2-features/f3-errorSnackBar/errorHandler";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import loading from "../../images/hzk6C.gif";

type RegistrationPropsType = {}


const validationSchema = yup.object().shape({


    password: yup.string()
        .min(7, '7 char or more')
        .max(50, 'password is too long')
        .required('Password is Required'),
    email: yup.string()
        .email('Invalid email')
        .required('email is Required'),

});

export const RegistrationForm: React.FC<RegistrationPropsType> = () => {
    const error = useSelector<RootState, string|null>(state => state.app.error);
    // const statusApp = useSelector<RootState, string|null>(state => state.app.status);



    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(registerThunk(values));
        },
    });

    const errorStyle = {
        color: 'red',
        margin: '5px 0px',
    }

    return <div className={s.form__content}>

        {/*{statusApp==="loading" && <div className={style.overlay}>*/}
        {/*    <img src= {loading}/>*/}
        {/*</div>}*/}

        <div className={style.logo}>
            <img src={atom}/>
            <h1 className={style.LogoName}>React Education Cards</h1>
        </div>


        <Grid container justify="center">
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl size={'medium'}>
                        <FormLabel component={'h2'}>
                            <h2>Create account, to join us.</h2>
                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label="Email"
                                margin="normal"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.errors.email && formik.touched.email ?
                                <div style={errorStyle}>{formik.errors.email}</div> : null}
                            <TextField
                                type="password"
                                label="Password"
                                margin="normal"
                                {...formik.getFieldProps('password')}
                            />
                            {formik.errors.password && formik.touched.password ?
                                <div style={errorStyle}>{formik.errors.password}</div> : null}
                            <Button type={'submit'} variant={'contained'} color={'primary'}>Click To Join Us </Button>
                        </FormGroup>
                    </FormControl>
                </form>
                {error && <AlertComponent/>}
            </Grid>
        </Grid>
    </div>
};



