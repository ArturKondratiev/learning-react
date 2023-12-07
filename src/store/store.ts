import { createStore, combineReducers } from "redux";

import customerReducer from "./customerSlice";
import accountReducer from "./accountSlice";
import usersReducer from "./usersSlice";

const rootReducer = combineReducers({ customer: customerReducer, account: accountReducer, users: usersReducer })

const store = createStore(rootReducer);

export default store;
