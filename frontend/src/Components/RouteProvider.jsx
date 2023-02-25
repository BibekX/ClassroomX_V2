import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/Signup/Signup";
import ProfileSetup from "../Pages/Signup/ProfileSetup";
import CompanySignUp from "../Pages/Signup/CompanySignup";
import Login from "../Pages/Login/Login";
import LoginComp from "./Login/LoginComp";

export default function RouteProvider() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<LoginComp name="signup" />} />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/company/signup" element={<CompanySignUp />} />
      <Route path="/setprofile" element={<ProfileSetup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
