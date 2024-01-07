import { configureStore } from "@reduxjs/toolkit";

import customerReducer from "./customerSlice";
import accountReducer from "./accountSlice";
import usersReducer from "./usersSlice";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer,
        users: usersReducer,
    }
})

export default store;
