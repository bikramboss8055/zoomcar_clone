

import {applyMiddleware, legacy_createStore} from "redux";
import { carReducer } from "./Car/carReducer";
import thunk from "redux-thunk"


const store =legacy_createStore(carReducer,applyMiddleware(thunk))


export {store}
