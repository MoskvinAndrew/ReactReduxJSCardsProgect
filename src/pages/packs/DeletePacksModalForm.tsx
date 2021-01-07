import React from "react";
import {useFormik} from "formik";
import {Button, FormControl, FormGroup} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {deletePackThunk} from "../../n1-main/m2-BLL/Redux/packs-Reducer";

type PacksModalFormType = {
    handleClose: () => void
    id: string
}

export const DeletePacksModalForm: React.FC<PacksModalFormType> = (props) => {
    const dispatch = useDispatch()

    const onClickHandler = () => {
        props.handleClose()
    }

    const formik = useFormik({
        initialValues: {},
        onSubmit: () => {
            dispatch(deletePackThunk(props.id))
            onClickHandler()
        },
    });

    const btnStyle = {
        marginTop: '5px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    };

    return <>
        <form onSubmit={formik.handleSubmit}>
            <FormControl size={'small'}>
                <FormGroup>
                    <div style={btnStyle}>
                        <Button type={'submit'} variant={'contained'}
                                color={'primary'} style={{marginRight: '10px'}}>Yes</Button>
                        <Button onClick={() => onClickHandler()} variant={'contained'}
                                color={'primary'}>No</Button>
                    </div>
                </FormGroup>
            </FormControl>
        </form>
    </>

}