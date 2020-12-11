import React from 'react';
import style from  "./FourZeroFour.module.css";
import monster from "./../../images/Cut-the-rope-2.png"
import NotFound from "../test/testMonster";
import SuperButton from "../../n1-main/m1-UI/common/SuperButton/SuperButton";
import AdaptiveEyeMonster from "../test/adapMonst/monsterAdaptive";

const FourOFour = () => {



    return(
<div className={style.container}>

    <div><NotFound/></div>
    <div className={style.notfound}>
            {/*<div className={style.notfound_404}>*/}
            {/*    <div className={style.monster}><NotFound/></div>*/}

                <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily
            unavailable.</p>

            </div>



</div>
)
}
export default FourOFour;