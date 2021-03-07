import React from 'react';
import {ProfileDataType} from "../../n1-main/m2-BLL/Redux/profile-reducer";
import {Redirect} from "react-router-dom";
import {logOutMeTC} from "../../n1-main/m2-BLL/Redux/app-Reducer";
import {RoutingStringConstants} from '../../n1-main/m3-DAL/routingStringConstants';
import {useDispatch} from "react-redux";
import style from "./profile.module.css"
import {Button} from '@material-ui/core';

type ProfileType = {
    isLoggedIn: boolean,
    profileData: ProfileDataType,

}

const Profile = (props: ProfileType) => {
    const dispatch = useDispatch();


    const onClickHandler = () => {
        dispatch(logOutMeTC());
    };

    if (!props.isLoggedIn) {
        return <Redirect to={RoutingStringConstants.login}/>
    }
    return (
        <div className={style.profileWrapper}>
            <div>It's profile component:</div>

            <div className={style.content}>
                <div><b>name</b>:{props.profileData.name}</div>
                <div><b>publicCardPacksCount</b>:{props.profileData.publicCardPacksCount}</div>
            </div>
            {/*<div className={style.avatar}> avatar:{props.profileData.avatar}</div>*/}

            <Button className={style.buttonLogOut} variant={"contained"} onClick={onClickHandler}>log out</Button>

        </div>
    )
}
export default Profile;