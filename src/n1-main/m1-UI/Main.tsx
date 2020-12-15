import React from "react";
import ForgotPage from "../../pages/forgot/ui/ForgotPage";
import Header from "./Header/Header";
import Routes from "./Routes/routes";

const Main: React.FC = () => {
    return(
       <div>
           <Header/>
           <ForgotPage/>
           <Routes/>
       </div>
    )
}
export default Main;