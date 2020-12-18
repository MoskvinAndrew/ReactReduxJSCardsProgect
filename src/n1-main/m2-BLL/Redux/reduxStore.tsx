import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./app-Reducer";
import {authReducer} from "./auth-Reducer";
import {forgotReducer} from "./forgotReducer";
import {registerReducer} from "./register-Reducer";

export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>


let reducers = combineReducers({
    auth: authReducer,
    forgot: forgotReducer,
    register:registerReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppStoreType = ReturnType<typeof reducers>
// @ts-ignore
window.store = store;

export default store;

