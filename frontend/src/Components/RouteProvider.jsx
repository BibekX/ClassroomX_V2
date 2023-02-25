import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/Signup/Signup";
import ProfileSetup from "../Pages/Signup/ProfileSetup";
import Login from "../Pages/Login/Login";

export default function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/setprofile" element={<ProfileSetup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
