import React from 'react';
import style from "./ScheckBox.module.css";

type SCheckBoxType = {
    boxName:string,
    size?: 'small' | 'medium' | 'big',
    color?: 'green' | 'blue' | 'black',

}


const SCheckBox: React.FC<SCheckBoxType> = (props: SCheckBoxType) => {

    const propsFontSize = () => {
        if (props.size === 'small') {
            return '10px'
        } else if (props.size === 'big') {
            return '26px'
        } else {
            return '20px'
        }
    };                 //определяет размер лейбла для чекбокса

    let propsInputSize = `${style.check}`;             //определяет размер инпута
    const propsInputSizeFunction = () => {
        if (props.size === 'big') {
            return propsInputSize = `${style.check} ${style.checkBig}`
        } else if (props.size === 'small') {
            return propsInputSize = `${style.check} ${style.checkSmall}`
        } else {
            return propsInputSize = `${style.check}`
        }
    }


    let propsColor = `${style.check}`;                 //определяет цвет инпута
    const propsColorFunction = () => {
        if (props.color === "blue") {
            return propsColor = `${style.check} ${style.checkBlue} ${style.checkBlue}`
        } else if (props.color === "black") {
            return propsColor = `${style.checkBlack} ${style.checkBlack} ${style.checkBlue}`
        } else {
            return propsColor = `${style.check}`
        }
    };

    propsColorFunction();
    propsInputSizeFunction();


    return (
        <div className={style.box}>
            <input id="one" type="checkbox"/>
            <span className={propsColor + " " + propsInputSize}></span>
            <label htmlFor="one" style={{fontSize: propsFontSize()}}>{props.boxName}</label>
        </div>
    )
}
export default SCheckBox;

