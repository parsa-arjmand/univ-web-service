import React from "react";
import "./app.css";
import backIcon from "./back-arrow-1.svg";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Students from "./pages/students/Students";
import Instructors from "./pages/instructors/Instructors";
import Section from "./pages/section/Section";
import Q4 from "./pages/Q4";
import Q5 from "./pages/Q5";
import Q6 from "./pages/Q6";
import Q7 from "./pages/Q7";
import Q8 from "./pages/Q8";
import Q9 from "./pages/Q9";
import Q10 from "./pages/Q10";
import Student from "./pages/Student";
import Prof from "./pages/Prof";
import Cspt from "./pages/Cspt";
import GC from "./pages/GC";
import GS from "./pages/GS";
import Term from "./pages/Term";
import Groups from "./pages/Groups";
import Course from "./pages/Course";
import ShowDb from "./pages/ShowDb";
function App() {
  const navigate = useNavigate();
  return (
    <div className="app" dir="rtl">
      <Header />
      <main>
        <button className="back-button" onClick={() => navigate("/")}>
          بازگشت به صفحه اصلی
          <img style={{ width: "12px", marginRight: "4px" }} src={backIcon} alt="" />
        </button>
        <Routes>
          <Route path="/datamodel" element={<ShowDb />} />
          <Route path="/students" element={<Student />} />
          <Route path="/professors" element={<Prof />} />
          <Route path="/group-student" element={<GS />} />
          <Route path="/group-course" element={<GC />} />
          <Route path="/cspt" element={<Cspt />} />
          <Route path="/term" element={<Term />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/courses" element={<Course />} />

          <Route path="/q1" element={<Students />} />
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
