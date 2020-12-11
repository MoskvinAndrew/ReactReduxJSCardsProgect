import React, {useState} from 'react';
import style from "../adapMonst/adapMonst.module.css";
import monsterPic from "../../../images/modPicture.png";
import dot from "../../../images/dot_PNG22.png"
import SuperButton from "../../../n1-main/m1-UI/common/SuperButton/SuperButton";
import arrow from "../../../images/sketched-left-arrow.png"




let AdaptiveEyeMonster = () => {
    let [styler, setStyler] = useState(`${style.dot}`);
    let [stylerSecond, setstylerSecond] = useState(`${style.dotSecond}`);

    let onMouseOverBlock = (direction: string, secondDirection: string) => {
        setStyler(direction);
        setstylerSecond(secondDirection);
    }
    return (
        <div className={style.wrapper}>

            <div className={style.block12wrapp}>

                <div className={style.block1}
                     onMouseOver={() => onMouseOverBlock(`${style.dot1Scope}`, `${style.dot1ScopeSecond}`)}>
                    {/*<div className={style.arrow}> <div className={style.buttonContainer}><SuperButton buttonName={'HOME'} onClick={() => {*/}
                    {/*}} color={"black"} size={"small"}/></div><img alt={'arrow'} src={arrow}/>*/}
                    {/*</div>*/}
                </div>


                <div className={style.block2}
                     onMouseOver={() => onMouseOverBlock(`${style.dot2Scope}`, `${style.dot2ScopeSecond}`)}>
                </div>

            </div>




            <div className={style.block34wrapp}>
                <div className={style.wrapperImg}
                     onMouseOver={() => onMouseOverBlock(`${style.dot}`, `${style.dotSecond}`)}>
                    <img className={style.monsterImg} src={monsterPic}/>
                    <img className={styler} src={dot}/>
                    <img className={stylerSecond} src={dot}/>
                </div>

                <div className={style.block3}
                     onMouseOver={() => onMouseOverBlock(`${style.dot3Scope}`, `${style.dot3ScopeSecond}`)}>

                </div>
            </div>












            <div className={style.block56wrapp}>
                <div className={style.block4}
                     onMouseOver={() => onMouseOverBlock(`${style.dot4Scope}`, `${style.dot4ScopeSecond}`)}></div>
                <div className={style.block5}
                     onMouseOver={() => onMouseOverBlock(`${style.dot5Scope}`, `${style.dot5ScopeSecond}`)}></div>
            </div>
        </div>
    )
}
export default AdaptiveEyeMonster;