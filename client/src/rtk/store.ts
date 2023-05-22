import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userManagerReducer from "./features/userManagerSlice";
import homeReducer from "./features/homeSlice";
import snackBarReducer from "./features/snackBarSlice";
import spinnerReducer from "./features/spinnerSlice";
import todoReducer from "./features/todoSlice";
// ...
const reducers = combineReducers({
  userManager: userManagerReducer,
  home: homeReducer,
  snackBar: snackBarReducer,
  spinner: spinnerReducer,
  todo: todoReducer,
});
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
