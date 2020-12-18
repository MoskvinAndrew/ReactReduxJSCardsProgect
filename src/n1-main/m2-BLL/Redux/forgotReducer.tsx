import {Dispatch} from "redux";
import { AuthAPI, ForgotRequestType } from "../../m3-DAL/api";

export type ForgotStateType = {
    loading: boolean;
    success: boolean;
    error: string;
}

const ForgotInitState:ForgotStateType = {
    loading: false,
    success: false,
    error: "",
};

export type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsType<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<PropertiesType<T>>
export type ForgotActionsType = InferActionsType<typeof ForgotActions>;

export const ForgotActions = {
    setLoading: (loading: boolean) => ({
        type: "forgot/SET_LOADING",
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: "forgot/SET_SUCCESS",
        success,
    } as const),
    setError: (error: string) => ({
        type: "forgot/SET_ERROR",
        error,
    } as const),

};

export const forgotReducer = (state = ForgotInitState, action: ForgotActionsType): ForgotStateType => {
    switch (action.type) {
        case "forgot/SET_ERROR": {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case "forgot/SET_LOADING": {
            return {
                ...state,
                error: "",
                loading: action.loading,
                success: false,
            }
        }
        case "forgot/SET_SUCCESS": {
            return {
                ...state,
                error: "",
                loading: false,
                success: action.success,
            }
        }

        default: {
            return state
        }
    }
};

export const forgotThunk = (data: ForgotRequestType) => {

    return (dispatch: Dispatch<ForgotActionsType>) => {
        dispatch(ForgotActions.setLoading(true));
        AuthAPI.forgot(data)
            .then(res => {
                dispatch(ForgotActions.setSuccess(true));
            })
            .catch(err => {
                dispatch(ForgotActions.setError(err));
            })
    }
};


// export const forgotTK = (
//     email: string
// ): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ForgotActionsType> => async (
//     dispatch,
//     // getStore: GetAppStoreType
// ) => {
//     dispatch(ForgotActions.setLoading(true));

//     await tryCatch(
//         async () => {

//             const data = await ForgotAPI.forgot(email);

//             dispatch(ForgotActions.setSuccess(true));

//         },
//         (e:any) => dispatch(ForgotActions.setError(e)),
//         "Forgot",
//     );
// };