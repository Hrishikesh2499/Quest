import { createAsyncThunk } from "@reduxjs/toolkit";
import { TResponse } from "../../interfaces/response.interface";
import {
  addUserService,
  getUserManagerService,
  updateUserService,
} from "../../services/userManager.service";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";
import {
  IAddUserManagerProp,
  setUsersDataAction,
} from "../features/userManagerSlice";

const fetchAllUsersAsync = createAsyncThunk<TResponse>(
  "users/fetchAllUsers",
  // Declare the type your function argument here:
  async (_, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await getUserManagerService();
    if (response.status === 200) {
      dispatch(setUsersDataAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const updateUserAsync = createAsyncThunk<TResponse, any>(
  "users/updateUsers",
  // Declare the type your function argument here:
  async (data, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await updateUserService(data);
    if (response.status === 200) {
      dispatch(setUsersDataAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const addUserAsync = createAsyncThunk<TResponse, IAddUserManagerProp>(
  "users/addUser",
  // Declare the type your function argument here:
  async (data, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await addUserService(data);
    if (response.status === 200) {
      dispatch(setUsersDataAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);
export { updateUserAsync, fetchAllUsersAsync, addUserAsync };
