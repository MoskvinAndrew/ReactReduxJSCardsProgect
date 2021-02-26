import React from "react";
import './Button.css';

type ButtonProps = {
    children: any
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    buttonStyle?: string
    buttonSize?: string
}


const STYLES = [
    'btn--primary',
    'btn--outline',
];
const SIZES = [
    'btn--medium',
    'btn--large',
    'btn--small',
];

export const Button: React.FC<ButtonProps> = ({children, buttonSize, buttonStyle, onClick, type}) => {

    function predicate(item: string | undefined, arr: string[]) {
        return arr.find((s: string) => s === item)
    }

    let btnStyle = (predicate(buttonStyle, STYLES)) ? buttonStyle : STYLES[0];
    let btnSize = (predicate(buttonSize, SIZES)) ? buttonSize : SIZES[0];

    return <button className={`btn ${btnStyle} ${btnSize}`} type={type} onClick={onClick}>
        {children}
    </button>
}