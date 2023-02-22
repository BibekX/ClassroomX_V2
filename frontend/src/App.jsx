import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/General/Navbar/Navbar";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
