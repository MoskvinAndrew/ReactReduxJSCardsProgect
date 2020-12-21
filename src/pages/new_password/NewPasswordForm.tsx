import {useFormik} from "formik";
import React from "react";
import s from "../registration/registration.module.css"
import {useDispatch} from "react-redux";
import { newPassThunk } from "../../n1-main/m2-BLL/Redux/newPass-Reducer";

type NewPassPropsType = {}

export const NewPasswordForm: React.FC<NewPassPropsType> = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            password: '',
            resetPasswordToken: ''
        },
        onSubmit: (values) => {
            dispatch(newPassThunk(values));
        },
    });



    return (
        <div className={s.form__wrapper}>
            <form onSubmit={formik.handleSubmit}>
                <h1>New Password page</h1>
                <div className={s.form__content}>
                    <div className={s.form__content_password}>
                        <h4>password</h4>
                        <input type="password" {...formik.getFieldProps('password')} />
                    </div>
                    <div className={s.form__content_password}>
                        <h4>сonfirm password</h4>
                        <input type="password" {...formik.getFieldProps('resetPasswordToken')} />
                    </div>
                    <div className={s.form__content_btn}>
                        <button type={'submit'}>SEND PASSWORD</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

