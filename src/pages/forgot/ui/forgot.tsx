import React from "react";
import ButtonNya from "../../components/button/ButtonNya";
import InputNya from "../../components/input/InputNya";


type ForgotPropsType = {
    email: string;
    setEmail: (email: string) => void;

    forgot: () => void;
    loading: boolean
};

const Forgot: React.FC<ForgotPropsType> = React.memo(({email, setEmail, forgot, loading}) => {

    return (
        <>
            <div><InputNya info={"email"} value={email} onChangeText={setEmail}/></div>
            <div><ButtonNya info={"forgot-send"} onClick={forgot} disabled={loading}>send</ButtonNya></div>
        </>
    );
});

export default Forgot;