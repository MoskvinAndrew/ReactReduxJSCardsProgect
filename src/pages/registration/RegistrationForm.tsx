import {useFormik} from "formik";
import React from "react";
import s from "./registration.module.css"
import {useDispatch} from "react-redux";
import {registerThunk} from "../../n1-main/m2-BLL/Redux/register-Reducer";
import * as Yup from 'yup';
import {Button, FormControl, FormGroup, FormLabel, Grid, TextField} from "@material-ui/core";

type RegistrationPropsType = {}

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(7, '7 char or more')
        .max(50, 'password is too long')
        .required('Password is Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('email is Required'),
});

export const RegistrationForm: React.FC<RegistrationPropsType> = () => {

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
        <Grid container justify="center">
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl size={'medium'}>
                        <FormLabel component={'h2'}>
                            <h2>Create account</h2>
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
                            <Button type={'submit'} variant={'contained'} color={'primary'}>Sign Up</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    </div>
};



