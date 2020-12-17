import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../n1-main/m2-BLL/Redux/reduxStore";
import {authStateType} from "../../n1-main/m2-BLL/Redux/auth-Reducer";
import {profileDataType} from "../../n1-main/m2-BLL/Redux/profile-reducer";


const Profile: React.FC = () => {
    let profileData = useSelector<RootState, profileDataType>(state => state.profilePage.profileData);
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