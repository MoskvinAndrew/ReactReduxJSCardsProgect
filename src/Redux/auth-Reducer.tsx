export type authStateType = typeof initialState;

const initialState = {}

// type ActionsType = {}

// @ts-ignore
export const authReducer = (state: authStateType = initialState, action: ActionsType): authStateType => {
    switch (action.type) {
        case 'isAuth':
            return state

        default:
            return state
    }
}


