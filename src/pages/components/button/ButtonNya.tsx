import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./ButtonNya.module.css";


export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { info?: string };

const ButtonNya: React.FC<ButtonNyaPropsType> = React.memo((
    {
        info,
        ...props
    }
) => {

    return <button className={s.buttonNya} {...props}/>;
});

export default ButtonNya;
