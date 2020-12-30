import React from 'react';
import Profile from './profile';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {profileDataType} from "../../n1-main/m2-BLL/Redux/profile-reducer";
import style from "./profileContainer.module.css"


export const ProfileComponent = () => {
    let isLoggedIn = useSelector<RootState, boolean>((state) => state.login.isLoggedIn);
    let profileData = useSelector<RootState, profileDataType>(state => state.profilePage.profileData);

    return (
        <div >
            <Profile isLoggedIn={isLoggedIn}
                     profileData={profileData}

            />
        </div>
    )
}