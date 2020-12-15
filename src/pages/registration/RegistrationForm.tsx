import {useFormik} from "formik";
import React from "react";
import s from "./registration.module.css"
import {useDispatch} from "react-redux";
import {registerThunk} from "../../n1-main/m2-BLL/Redux/register-Reducer";

type RegistrationPropsType = {}

export const RegistrationForm: React.FC<RegistrationPropsType> = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            dispatch(registerThunk(values));
        },
    });



    return (
        <div className={s.form__wrapper}>
            <form onSubmit={formik.handleSubmit}>
                <h1>Create account</h1>
                <div className={s.form__content}>
                    <div className={s.form__content_email}>
                        <h4>email</h4>
                        <input type="email" {...formik.getFieldProps('email')}/>
                    </div>
                    <div className={s.form__content_password}>
                        <h4>password</h4>
                        <input type="password" {...formik.getFieldProps('password')} />
                    </div>
                    <div className={s.form__content_btn}>
                        <button type={'submit'}>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

