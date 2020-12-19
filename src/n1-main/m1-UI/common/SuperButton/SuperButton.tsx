import React from 'react';
import style from "./SuperButton.module.css";

type SuperButtonType = {
    buttonName:string,
    onClick:()=>void,
    size?: 'small' | 'medium' | 'big',
    color?: 'green' | 'blue' | 'black',
    disabled?:boolean,
    type?:string
}


export const SuperButton: React.FC<SuperButtonType> = (props:SuperButtonType) => {

    let propsButtonSize = `${style.button_algolia}`;
    const propsButtonSizeFunction = () => {
        if (props.size === 'small') {
            return propsButtonSize = `${style.button_algolia} ${style.button_algoliaSmall}`
        } else if (props.size === 'medium') {
           return propsButtonSize = `${style.button_algolia} ${style.button_algoliaMid}`
        } else {
            return propsButtonSize = `${style.button_algolia}`
        }
    };

    let propsButtonColor = `${style.button_algoliaBlue}`;
    const propsButtonColorFunction = () => {
        if (props.color === 'blue') {
            return propsButtonColor = `${style.button_algolia} ${style.button_algoliaBlue}`
        } else if (props.color === 'black') {
            return propsButtonColor = `${style.button_algolia} ${style.button_algoliaBlack}`
        } else {
            return propsButtonColor = `${style.button_algolia}`
        }
    };
    propsButtonColorFunction();
    propsButtonSizeFunction();

    const onClickHandler = () =>{
        props.onClick();
    };
    return(
        <div className={propsButtonSize +" "+ propsButtonColor} onClick={onClickHandler} aria-disabled={props.disabled} >
            {props.buttonName}
        </div>
    )
};
export default SuperButton;

