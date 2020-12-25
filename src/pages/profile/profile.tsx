import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {authStateType} from "../../n1-main/m2-BLL/Redux/auth-Reducer";
import {profileDataType} from "../../n1-main/m2-BLL/Redux/profile-reducer";
import {Redirect, useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";



const Profile = () => {
    let isLoggedIn = useSelector<RootState,boolean>((state)=>state.login.isLoggedIn);
    let profileData = useSelector<RootState, profileDataType>(state => state.profilePage.profileData);

    // const { id } = useParams();
    // const history = useHistory();
    // history.goBack();
    // history.push( '/profile' );


    if(!isLoggedIn){
        return  <Redirect to={"/login"}/>
    }
    return (
        <div>
            It's profile component:
            <div> name:{profileData.name}</div>
            <div>isAdmin:{profileData.isAdmin}</div>
            <div> id:{profileData._id}</div>
            <div> publicCardPacksCount:{profileData.publicCardPacksCount}</div>
            <div> email:{profileData.email}</div>
            <div>created:{profileData.created}</div>
            <div> avatar:{profileData.avatar}</div>

        </div>
    )
}
export default Profile;