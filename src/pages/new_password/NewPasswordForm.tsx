import {useFormik} from "formik";
import React from "react";
import s from "../registration/registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import { newPassThunk } from "../../n1-main/m2-BLL/Redux/newPass-Reducer";
import {Redirect, useParams} from "react-router-dom";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {RoutingStringConstants} from "../../n1-main/m3-DAL/routingStringConstants";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField} from "@material-ui/core";
import style from "../login/login.module.css";
import atom from "../../images/atom.svg";

type NewPassPropsType = {}

export const NewPasswordForm: React.FC<NewPassPropsType> = () => {
    const isLoggedIn = useSelector<RootState, boolean>((state) => state.login.isLoggedIn);
const status = useSelector<RootState, string>((state) => state.app.status);

    const params = useParams();
    console.log(params)

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            password: '',
            resetPasswordToken: ''
        },
        onSubmit: (values) => {
            console.log(values)
            dispatch(newPassThunk(values));

        },
    });
if(!isLoggedIn){
    return <Redirect to={RoutingStringConstants.login}/>
}


    return (
        <div className={s.form__wrapper}>
            <div className={style.logo}>

                <h1 className={s.LogoName}>React Education Cards</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                {/*<h1>New Password page</h1>*/}
                {/*<div className={s.form__content}>*/}
                {/*    <div className={s.form__content_password}>*/}
                {/*        <h4>password</h4>*/}
                {/*        <input type="password" {...formik.getFieldProps('password')} />*/}
                {/*    </div>*/}
                {/*    <div className={s.form__content_password}>*/}
                {/*        <h4>сonfirm password</h4>*/}
                {/*        <input type="password" {...formik.getFieldProps('resetPasswordToken')} />*/}
                {/*    </div>*/}
                {/*    <div className={s.form__content_btn}>*/}
                {/*        <button type={'submit'}>SEND PASSWORD</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <FormControl>
                    <FormLabel>
                        <h2 className={style.LogoText}>Change Password</h2>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            size="medium"
                            type="password"
                            label="enter new password"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password ? formik.errors.password : null}
                        <TextField
                            id="password"
                             type="password"
                            label="repeat new password"
                            margin="normal"
                            // onChange={formik.handleChange}
                            {...formik.getFieldProps('resetPasswordToken')}
                        />
                        {formik.errors.password ? formik.errors.password : null}

                        <Button type={'submit'} variant={'outlined'} color={'primary'}
                                disabled={status==="loading" && true}>change password</Button>

                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
};

