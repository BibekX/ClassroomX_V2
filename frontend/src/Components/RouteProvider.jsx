import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/Signup/Signup";
import SetProfile from "../Pages/Signup/SetProfile";
import CompanySetProfile from "../Pages/Signup/CompanySetProfile";
import Login from "../Pages/Login";
import Explore from "../Pages/Explore";
import Institution from "../Pages/Institution";
import Course from "../Pages/Course";
import Questions from "../Pages/Questions";
import AskQuestion from "../Pages/AskQuestion";
import IndividualQuestion from "../Pages/IndividualQuestion";

export default function RouteProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/setprofile" element={<SetProfile />} />
      <Route path="/company/setprofile" element={<CompanySetProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/institution" element={<Institution />} />
      <Route path="/institution/course" element={<Course />} />
      <Route path="/question" element={<Questions />} />
      <Route path="/question/ask" element={<AskQuestion />} />
      <Route path="/question/1" element={<IndividualQuestion />} />
    </Routes>
  );
}
