import {ThunkAction} from "redux-thunk";
import {ForgotActions, ForgotActionsType} from "./forgotReducer";
import {ForgotAPI} from "../dall/forgotApi";
import { ExtraArgumentNya, ReturnVoid, tryCatch } from "../../../n1-main/m2-BLL/Redux/thunks";
import { AppStoreType } from "../../../n1-main/m2-BLL/Redux/reduxStore";


export const forgotTK = (
    email: string
): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ForgotActionsType> => async (
    dispatch,
    // getStore: GetAppStoreType
) => {
    dispatch(ForgotActions.setLoading(true));

    await tryCatch(
        async () => {

            const data = await ForgotAPI.forgot(email);

            dispatch(ForgotActions.setSuccess(true));

        },
        (e:any) => dispatch(ForgotActions.setError(e)),
        "Forgot",
    );
};
