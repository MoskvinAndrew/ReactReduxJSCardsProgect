import React from 'react';
import  styler from "./SuperInput.module.css"


type SuperInputTypes = {
    inputName:string,
    color?: 'green' | 'blue' | 'black',
    onEnterClick:(value:string)=>void;
}

const SuperInput: React.FC<SuperInputTypes> = (props:SuperInputTypes) => {
    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.charCode === 13){
       let value = event.currentTarget.value;
       props.onEnterClick(value)};


    }

    let propsInputColor = `${styler.inputSelectorBlue}`;            //определяет размер инпута
    const propsInputColorFunction = () => {
        if (props.color === 'blue') {
            return propsInputColor = `${styler.inputSelectorBlue}`
        } else if (props.color === 'black') {
            return propsInputColor = `${styler.inputSelectorBlack}`
        } else {
            return propsInputColor = ''
        }
    };
    propsInputColorFunction();
    return(
        <div className={styler.wrapper}>
        <form>
            <div className={styler.group}>
                    <input type="text" required className={propsInputColor} onKeyPress= {onKeyPressHandler} />
                    <span className={styler.bar}></span>
                    <label>{props.inputName}</label>
            </div>
        </form>
</div>
    )
}
export default SuperInput;