import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./auth-Reducer";
import {loginReducer} from "../login-reduser";
import {profileReducer} from "./profile-reducer";

export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>


let reducers = combineReducers({
    auth:authReducer,
    login:loginReducer,
    profilePage:profileReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;

