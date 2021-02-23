import React from "react";
import './button.module.css';

type ButtonProps = {
    children: any
    type: string
    onClick: () => void
    buttonStyle: string
    buttonSize: string
}


const STYLES = [
    'btn--primary',
    'btn--outline',
]

const SIZES = [
    'btn--medium',
    'btn--large',
]

export const Button: React.FC<ButtonProps> = ({children, buttonSize, buttonStyle, onClick, type}) => {
    return <>

    </>
}