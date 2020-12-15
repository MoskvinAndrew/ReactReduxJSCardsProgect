import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import { AppStoreType } from "../../../n1-main/m2-BLL/Redux/reduxStore";
import LinkNya from "../../components/link/LinkNya";
import { ForgotActions } from "../bll/forgotReducer";
import ForgotContainer from "./forgotContainer";



const ForgotPage = () => {
    const {success, error} = useSelector((store: AppStoreType) => store.forgot);
    const [first, setFirst] = useState<boolean>(true);

    const dispatch = useDispatch();
    useEffect(() => {
        if (first) {
            if (success || error) dispatch(ForgotActions.setError(""));

            setFirst(false);
        } else {

        }
    }, [first, success, error, dispatch, setFirst]);

    return (
        <div>
            forgot

            {success
                ? <div>click the link in the message in your email</div>
                : <ForgotContainer/>
            }

            {/* <div><LinkNya to={PATH.LOGIN} info={"login in forgot"}>login</LinkNya></div> */}
        </div>
    );
};

export default ForgotPage;
