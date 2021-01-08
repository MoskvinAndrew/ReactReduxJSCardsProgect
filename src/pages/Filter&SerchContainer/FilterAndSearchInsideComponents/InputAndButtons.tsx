import React, {ChangeEvent, useState} from "react";
import {Button, Input} from "@material-ui/core";
import styles from "./InputAndButtons.module.css"

type InputAndButtonsTypes = {
    onClickHandlerMy:()=>void,
    onClickHandlerAll:()=>void,
    onClickHandlerFilter:(packName:string)=>void,
    totalItemsCount:number,
    pageSize:number,
    currentPage:number,
    portionSize:number,
    packName:string

}


export const InputAndButtons = (props:InputAndButtonsTypes) => {
    let [packNameLocal,setPackNameLocal] = useState<string>('');





   let onChangeHandler = (event:any) => {
       setPackNameLocal(event.target.value)
   };
    let onKeyPressHandler = (event:any) =>{
        event.charCode  === 13 &&
        props.onClickHandlerFilter(packNameLocal);
        setPackNameLocal('')

    };
    let onClickHandler = () =>{
        props.onClickHandlerFilter(packNameLocal);
        setPackNameLocal('');

        return
    };


    return(
        <div className={styles.MainWrapper}>
            <div><Input placeholder={'Find packs'} onChange={onChangeHandler} value={packNameLocal}/></div>

            <div><Button variant={'contained'} onClick={props.onClickHandlerMy}>get my Packs</Button></div>

            <div><Button variant={'outlined'} onClick={props.onClickHandlerAll}>get all Packs</Button></div>

            <div><Button variant={'contained'}
                         color={"secondary"}
                         onClick={onClickHandler}
                         onKeyPress={onKeyPressHandler}>Filter</Button>
                            </div>
                    <b>{props.totalItemsCount} results found!</b>
        </div>
    )
}