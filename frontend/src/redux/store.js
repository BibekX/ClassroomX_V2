import { configureStore } from "@reduxjs/toolkit";
import authState from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    auth: authState,
  },
});
