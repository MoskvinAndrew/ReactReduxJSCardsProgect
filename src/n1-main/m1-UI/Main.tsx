import React from "react";
import { RegistrationComponent } from "../../pages/registration/RegistrationComponent";
import Header from "./Header/Header";
import Routes from "./Routes/routes";

const Main: React.FC = () => {
    return(
       <div>
           <Header/>
           <Routes/>
       </div>
    )
}
export default Main;