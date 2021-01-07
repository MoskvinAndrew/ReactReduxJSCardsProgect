import React from "react";
import {useFormik} from "formik";
// import * as Yup from "yup";
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
// import {setDataPackThunk} from "../../n1-main/m2-BLL/Redux/packs-Reducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {addCardsThunk} from "../../n1-main/m2-BLL/Redux/cards-Reducer";

// const validationSchema = Yup.object().shape({
//     question: Yup.string()
//         // .min(5, '5 char or more')
//         .required('name is Required'),
//     answer: Yup.string()
//         .required('path is Required'),
// });

type PacksModalFormType = {
    handleClose: () => void
}

export const CardsModalForm: React.FC<PacksModalFormType> = (props) => {
    const isLoggedIn = useSelector<RootState, boolean>((state) => state.login.isLoggedIn);

    const dispatch = useDispatch()

    const onClickHandler = () => {
        props.handleClose()
    }

    const formik = useFormik({
        initialValues: {
            question: '',
            answer: '',
        },
        // validationSchema,
        onSubmit: (values) => {
            dispatch(addCardsThunk(values))
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
                        label="question"
                        margin="normal"
                        {...formik.getFieldProps('question')}
                    />
                    {formik.errors.question && formik.touched.question ?
                        <div style={errorStyle}>{formik.errors.question}</div> : null}
                    <TextField
                        type="text"
                        label="answer"
                        margin="normal"
                        {...formik.getFieldProps('answer')}
                    />
                    {formik.errors.answer && formik.touched.answer ?
                        <div style={errorStyle}>{formik.errors.answer}</div> : null}
                    <Button type={'submit'}  variant={'contained'}
                            color={'primary'}>Add</Button>
                </FormGroup>
            </FormControl>
        </form>
    </>

}