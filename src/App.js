import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import NotFount from "./pages/NotFount";
import Students from "./pages/Students";
import AddStudents from "./pages/AddStudents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Students />} />
        <Route path="addstudents" element={<AddStudents />} />
        <Route path="*" element={<NotFount />} />
      </Route>
      {/* <Route path="*" element={<NotFount />} /> */}
    </Routes>
  );
}

export default App;
