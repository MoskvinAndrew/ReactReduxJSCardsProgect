import {Route, Switch} from "react-router-dom";
import TestPage from "../../../pages/test/testPage";
import Profile from "../../../pages/profile/profile";
import PasswordRecovery from "../../../pages/password_recovery/passwordRecovery";
import NewPassword from "../../../pages/new_password/newPassword";
import FourOFour from "../../../pages/FourZeroFour/FourZeroFour";
import React from "react";
<<<<<<< HEAD
import Login from "../../../pages/login/login";
=======
import {RegistrationComponent} from "../../../pages/registration/RegistrationComponent";
>>>>>>> d21fd915710953e6ff878755b37a2f6ba2fcc2f4

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route exact path='/testPage' render={() => <TestPage/>}/>
            <Route exact path='/registration' render={() => <RegistrationComponent/>}/>
            <Route exact path='/profile' render={() => <Profile/>}/>
            <Route exact path='/passwordRecovery' render={() => <PasswordRecovery/>}/>
            <Route exact path='/newPassword' render={() => <NewPassword/>}/>
            <Route exact path='/login' render={() => <Login/>}/>
            <Route exact path='/404' render={() => <FourOFour/>}/>
        </Switch>
    )
};
export default Routes;