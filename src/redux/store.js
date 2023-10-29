import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/authSlice.js";
import TypeMenuReducer from "./TypeMenu/typeMenuSlice.js";
import DishGroupReducer from "./DishGroup/DishGroupSlice.js";
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    typeMenu: TypeMenuReducer,
    dishGroup: DishGroupReducer,
  },
});
