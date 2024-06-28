import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./StudentSlice/StudentSlice";

const store = configureStore({
  reducer: {
    student: StudentSlice,
  },
});

export { store };
