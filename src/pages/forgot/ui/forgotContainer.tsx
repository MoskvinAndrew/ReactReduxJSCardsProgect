import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Forgot from "./forgot";
import { forgotTK } from "../bll/forgotThunk";
import { AppStoreType } from "../../../n1-main/m2-BLL/Redux/reduxStore";

const ForgotContainer = React.memo(() => {
    const [email, setEmail] = useState<string>("");

    const dispatch = useDispatch();
    const forgotCallback = useCallback(
        () => dispatch(forgotTK(email)),
        [email, dispatch]
    );
    const {loading} = useSelector((store: AppStoreType) => store.forgot);

    return (
        <Forgot
            email={email} setEmail={setEmail}
            forgot={forgotCallback}
            loading={loading}
        />
    );
});

export default ForgotContainer;
