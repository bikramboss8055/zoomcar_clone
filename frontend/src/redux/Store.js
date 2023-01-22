

import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { carReducer } from "./Car/carReducer";
import thunk from "redux-thunk"
import { authReducer } from "./Auth/Auth.reducer";

const rootReducer = combineReducers({
    auth : authReducer,
    car : carReducer
});
const store =legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store}
