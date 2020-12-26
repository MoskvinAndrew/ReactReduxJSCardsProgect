import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-Reducer";
import {authReducer} from "./auth-Reducer";
import {newPassReducer} from "./newPass-Reducer";
import {forgotReducer} from "./forgot-Reducer";
import {registerReducer} from "./register-Reducer";
import {loginReducer} from "./login-reducer";
import {profileReducer} from "./profile-reducer";
import { packsReducer } from "./packs-Reducer";


export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>


let reducers = combineReducers({
    auth:authReducer,
    register:registerReducer,
    forgot:forgotReducer,
    newPassword:newPassReducer,
    app: appReducer,
    login:loginReducer,
    profilePage:profileReducer,
    packsPage: packsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;

