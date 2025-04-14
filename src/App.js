import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopPage from "./components/TopPage";
import Access from "./pages/Access";
import CourseList from "./pages/CourseList";
import School from "./pages/School";
import Instructor from "./pages/Instructor";
import Menu from "./pages/Menu";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/access" element={<Access />} />
        <Route path="/courseList" element={<CourseList />} />
        <Route path="/School" element={<School />} />
        <Route path="/Instructor" element={<Instructor />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}
