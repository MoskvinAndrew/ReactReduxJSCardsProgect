import {useFormik} from "formik";
import React from "react";
import s from "../registration/registration.module.css"
import {useDispatch} from "react-redux";
import { forgotThunk } from "../../n1-main/m2-BLL/Redux/forgotReducer";

type ForgotPropsType = {}

export const ForgotForm: React.FC<ForgotPropsType> = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            dispatch(forgotThunk(values));
        },
    });



    return (
        <div className={s.form__wrapper}>
            <form onSubmit={formik.handleSubmit}>
                <h1>Forgot account</h1>
                <div className={s.form__content}>
                    <div className={s.form__content_email}>
                        <h4>email</h4>
                        <input type="email" {...formik.getFieldProps('email')}/>
                    </div>
                    <div className={s.form__content_btn}>
                        <button type={'submit'}>SEND</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

