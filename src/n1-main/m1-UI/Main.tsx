import React from "react";
import { ForgotComponent } from "../../pages/forgot/ForgotComponent";
import { RegistrationComponent } from "../../pages/registration/RegistrationComponent";
import Header from "./Header/Header";
import Routes from "./Routes/routes";

const Main: React.FC = () => {
    return(
       <div>
           <Header/>
           <ForgotComponent/>
           <Routes/>
           <RegistrationComponent />
       </div>
    )
}
export default Main;