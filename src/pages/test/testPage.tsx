import React from 'react';
import style from "./testPage.module.css";
import SuperInput from "../../n1-main/m1-UI/common/SuperInput/SuperInput";
import SuperButton from "../../n1-main/m1-UI/common/SuperButton/SuperButton";
import SCheckBox from "../../n1-main/m1-UI/common/SuperCheckbox/SCheckBox";


const TestPage: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <SuperInput inputName={'SuperInput'} onEnterClick={() => {
            }}/>
            <SuperButton buttonName={'SuperButton'} onClick={() => {
            }}/>
            <SCheckBox boxName={'SuperCheckBox'}/>
        </div>
    )

}
export default TestPage;