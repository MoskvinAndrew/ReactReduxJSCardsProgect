import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {setDataPackThunk} from "../../n1-main/m2-BLL/Redux/packs-Reducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, '5 char or more')
        .required('name is Required'),
    path: Yup.string()
        .required('path is Required'),
});

type PacksModalFormType = {
    handleClose: () => void
}

export const PacksModalForm: React.FC<PacksModalFormType> = (props) => {
    const isLoggedIn = useSelector<RootState, boolean>((state) => state.login.isLoggedIn);

    const dispatch = useDispatch()

    const onClickHandler = () => {
        props.handleClose()
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            path: '',
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(setDataPackThunk(values))
            onClickHandler()
        },
    });

    const errorStyle = {
        color: 'red',
        margin: '5px 0px',
    }
    if(!isLoggedIn){
        return  <Redirect to={"/login"}/>
    }

    return <>
        <form onSubmit={formik.handleSubmit}>
            <FormControl size={'small'}>
                <FormGroup>
                    <TextField
                        label="name"
                        margin="normal"
                        {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name && formik.touched.name ?
                        <div style={errorStyle}>{formik.errors.name}</div> : null}
                    <TextField
                        type="text"
                        label="path"
                        margin="normal"
                        {...formik.getFieldProps('path')}
                    />
                    {formik.errors.path && formik.touched.path ?
                        <div style={errorStyle}>{formik.errors.path}</div> : null}
                    <Button type={'submit'}  variant={'contained'}
                            color={'primary'}>Add</Button>
                </FormGroup>
            </FormControl>
        </form>
    </>

}