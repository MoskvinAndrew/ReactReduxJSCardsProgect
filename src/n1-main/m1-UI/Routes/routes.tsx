import {Route, Switch} from "react-router-dom";
import TestPage from "../../../pages/test/testPage";
import PasswordRecovery from "../../../pages/password_recovery/passwordRecovery";
import NewPassword from "../../../pages/new_password/newPassword";
import FourOFour from "../../../pages/FourZeroFour/FourZeroFour";
import React from "react";
import {RegistrationComponent} from "../../../pages/registration/RegistrationComponent";
import {Packs} from "../../../pages/packs/Packs";
import {Cards} from "../../../pages/cards/Cards";
import {RoutingStringConstants} from "../../m3-DAL/routingStringConstants";
import {ProfileComponent} from "../../../pages/profile/profileComponent";
import {LoginComponent} from "../../../pages/login/loginComponent";


const Routes: React.FC = () => {

    return (
        <Switch>
            <Route exact path={RoutingStringConstants.registration} render={() => <RegistrationComponent/>}/>
            <Route exact path={RoutingStringConstants.login} render={() => <LoginComponent/>}/>
            <Route exact path={RoutingStringConstants.profile} render={() => <ProfileComponent/>}/>
            <Route exact path={RoutingStringConstants.packs} render={() => <Packs/>}/>
            <Route exact path={RoutingStringConstants.cards} render={() => <Cards/>}/>
            <Route exact path={RoutingStringConstants.passwordRecovery} render={() => <PasswordRecovery/>}/>
            <Route exact path={RoutingStringConstants.newPassword} render={() => <NewPassword/>}/>
            <Route exact path={RoutingStringConstants.testPage} render={() => <TestPage/>}/>
            <Route exact path='/404' render={() => <FourOFour/>}/>
        </Switch>
    )
};
export default Routes;