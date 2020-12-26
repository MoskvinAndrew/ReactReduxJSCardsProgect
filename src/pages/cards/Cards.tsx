import React from "react";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";


type CardsPropsType = {

}


export const Cards:React.FC<CardsPropsType> = (props) => {
    let isLoggedIn = useSelector<RootState,boolean>((state)=>state.login.isLoggedIn);


    if(!isLoggedIn){
        return  <Redirect to={"/login"}/>
    }
    return <div>
        <h4>Cards are being developed...</h4>
    </div>

}