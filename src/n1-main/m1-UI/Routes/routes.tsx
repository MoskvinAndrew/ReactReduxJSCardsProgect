import {Route, Switch} from "react-router-dom";
import TestPage from "../../../pages/test/testPage";
import Registration from "../../../pages/registration/registration";
import Profile from "../../../pages/profile/profile";
import PasswordRecovery from "../../../pages/password_recovery/passwordRecovery";
import NewPassword from "../../../pages/new_password/newPassword";
import FourOFour from "../../../pages/FourZeroFour/FourZeroFour";
import React from "react";
import Login from "../../../pages/login/login";

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route exact path='/TestPage' render={() => <TestPage/>}/>
            <Route exact path='/Registration' render={() => <Registration/>}/>
            <Route exact path='/Profile' render={() => <Profile/>}/>
            <Route exact path='/PasswordRecovery' render={() => <PasswordRecovery/>}/>
            <Route exact path='/NewPassword' render={() => <NewPassword/>}/>
            <Route exact path='/Login' render={() => <Login/>}/>
            <Route exact path='/404' render={() => <FourOFour/>}/>
        </Switch>
    )
}
export default Routes;