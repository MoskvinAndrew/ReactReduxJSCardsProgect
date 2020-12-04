import React from 'react';
import style from "./testPage.module.css";
import SuperInput from "../../SuperComponents/SuperInput/SuperInput";
import SuperButton from "../../SuperComponents/SuperButton/SuperButton";
import SCheckBox from "../../SuperComponents/SuperCheckbox/SCheckBox";
import FourOFour from "../FourZeroFour/FourZeroFour";


const TestPage: React.FC=()=>{
    return (
        <div className={style.wraper}>
        <SuperInput inputName={'SuperInput'} onEnterClick={()=>{}}/>
        <SuperButton buttonName={'SuperButton'} onClick={()=>{}}/>
        <SCheckBox boxName={'SuperCheckBox'}/>
        </div>
    )

}
export default TestPage;