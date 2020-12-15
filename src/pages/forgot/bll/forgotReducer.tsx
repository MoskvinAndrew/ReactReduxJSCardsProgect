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
