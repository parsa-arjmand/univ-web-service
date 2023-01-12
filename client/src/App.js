import React from "react";
import "./app.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Student from "./pages/students/Students";
import Instructors from "./pages/instructors/Instructors";
import Section from "./pages/section/Section";
import Q4 from "./pages/Q4";
import Q5 from "./pages/Q5";
import Q6 from "./pages/Q6";
import Q7 from "./pages/Q7";
import Q8 from "./pages/Q8";
import Q9 from "./pages/Q9";
import Q10 from "./pages/Q10";
import ShowDb from "./pages/ShowDb";
function App() {
  const navigate = useNavigate();
  return (
    <div className="app" dir="rtl">
      <Header />
      <main>
        <button className="back-button" onClick={() => navigate("/")}>
          بازگشت به صفحه اصلی
        </button>
        <Routes>
          <Route path="datamodel" element={<ShowDb />} />
          <Route path="/q1" element={<Student />} />
          <Route path="/" element={<Home />} />
          <Route path="/q2" element={<Instructors />} />
          <Route path="/q3" element={<Section />} />
          <Route path="/q4" element={<Q4 />} />
          <Route path="/q5" element={<Q5 />} />
          <Route path="/q6" element={<Q6 />} />
          <Route path="/q7" element={<Q7 />} />
          <Route path="/q8" element={<Q8 />} />
          <Route path="/q9" element={<Q9 />} />
          <Route path="/q10" element={<Q10 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
