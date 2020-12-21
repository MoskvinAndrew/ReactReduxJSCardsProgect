import {Route, Switch} from "react-router-dom";
import TestPage from "../../../pages/test/testPage";
import Profile from "../../../pages/profile/profile";
import PasswordRecovery from "../../../pages/password_recovery/passwordRecovery";
import NewPassword from "../../../pages/new_password/newPassword";
import FourOFour from "../../../pages/FourZeroFour/FourZeroFour";
import React from "react";
import Login from "../../../pages/login/login";
import {RegistrationComponent} from "../../../pages/registration/RegistrationComponent";


const Routes: React.FC = () => {
    return(
        <Switch>
            <Route exact path='/registration' render={() => <RegistrationComponent/>}/>
            <Route exact path='/login' render={() => <Login/>}/>
            <Route exact path='/profile' render={() => <Profile/>}/>
            <Route exact path='/passwordRecovery' render={() => <PasswordRecovery/>}/>
            <Route exact path='/newPassword' render={() => <NewPassword/>}/>
            <Route exact path='/testPage' render={() => <TestPage/>}/>
            <Route exact path='/404' render={() => <FourOFour/>}/>
        </Switch>
    )
};
export default Routes;