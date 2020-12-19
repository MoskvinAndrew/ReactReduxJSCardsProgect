import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-Reducer";
import {authReducer} from "./auth-Reducer";
import {registerReducer} from "./register-Reducer";
import {forgotReducer} from "./forgot-Reducer";
import {newPassReducer} from "./newPass-Reducer";

export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>


let reducers = combineReducers({
    auth:authReducer,
    register:registerReducer,
    forgot:forgotReducer,
    newPassword:newPassReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;

