import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {authReducer} from "./auth-Reducer";
import {forgotReducer} from "../../../pages/forgot/bll/forgotReducer";

export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>


let reducers = combineReducers({
    auth: authReducer,
    forgot: forgotReducer,
    

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppStoreType = ReturnType<typeof reducers>
// @ts-ignore
window.store = store;

export default store;

