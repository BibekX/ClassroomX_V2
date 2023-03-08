import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

let initialState;

if (localStorage.getItem("TOKEN")) {
  let info = jwt_decode(localStorage.getItem("TOKEN"));
  initialState = { isAuthenticated: true, user: { ...info } };
} else {
  initialState = {
    isAuthenticated: false,
  };
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
    },
    getAvatarImage: (state, action) => {
      state.user.img = action.payload;
    },
  },
});

export const { login, logout, getAvatarImage } = authSlice.actions;

export default authSlice.reducer;

export const signupThunk = (loginInfo) => async (dispatch) => {
  let response = await axios.post(
    `${import.meta.env.VITE_BACKEND}/auth/signup`,
    loginInfo
  );
  if (response.data) {
    localStorage.setItem("TOKEN", response.data.token);
    let decoded = jwt_decode(response.data.token);
    await dispatch(login(decoded));
  }
};

export const setUpProfileThunk =
  ({ id, fname, lname, bio, image, extension }) =>
  async (dispatch) => {
    console.log({ id, fname, lname, bio, image, extension });
    let img_name = `${id}_${new Date().getTime()}.${extension}`;
    await axios.post(`${import.meta.env.VITE_BACKEND}/auth/setprofile`, {
      user_id: id,
      fname,
      lname,
      bio,
      img_name,
    });
    await axios.post(
      `${import.meta.env.VITE_BACKEND}/auth/setavatar/${img_name}`,
      image
    );
    dispatch(getAvatarImage(img_name));
  };

export const InstituteSetUpProfileThunk = (profileInfo) => async () => {
  let response = await axios.post(
    `${import.meta.env.VITE_BACKEND}/auth/profile`,
    profileInfo
  );
};

export const loginThunk = (loginInfo) => async (dispatch) => {
  let response = await axios.post(
    `${import.meta.env.VITE_BACKEND}/auth/login`,
    loginInfo
  );
  if (response.data) {
    localStorage.setItem("TOKEN", response.data.token);
    let decoded = jwt_decode(response.data.token);
    dispatch(login(decoded));
  }
};

export const logoutThunk = () => (dispatch) => {
  localStorage.removeItem("TOKEN");
  dispatch(logout());
};
