import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-Reducer";
import {authReducer} from "./auth-Reducer";
import {loginReducer} from "./login-reduser";
import {profileReducer} from "./profile-reducer";

import {registerReducer} from "./register-Reducer";

export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>


let reducers = combineReducers({
    auth:authReducer,
    login:loginReducer,
    profilePage:profileReducer,
    register:registerReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;

