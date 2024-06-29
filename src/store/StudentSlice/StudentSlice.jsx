import { createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

const StudentSlice = createSlice({
  name: "students", // action type
  initialState: {
    students: [
      {
        firstName: "Teshaboy",
        lastName: "Eshmatov",
        id: uid(),
        evalutions: [
          { day1: 5 },
          { day2: 3 },
          { day3: 5 },
          { day4: 4 },
          { day5: 1 },
          { day6: 2 },
          { day7: 6 },
          { day8: 2 },
          { day9: 5 },
          { day10: 3 },
          { day11: 4 },
        ],
      },
    ],
    isModal: false,
    ModalStudentId: null,
  },
  reducers: {
    addStudents: (state, action) => {
      state.students = [
        ...state.students,
        {
          ...action.payload,
          id: uid(),
          evalutions: [
            { day1: 0 },
            { day2: 0 },
            { day3: 0 },
            { day4: 0 },
            { day5: 0 },
            { day6: 0 },
            { day7: 0 },
            { day8: 0 },
            { day9: 0 },
            { day10: 0 },
            { day11: 0 },
          ],
        },
      ];
    },
    editStudent: (state, action) => {
      state.students = state.students.map((student) => {
        if (student.id === action.payload.id) {
          return { ...student, ...action.payload.data };
        }
        return student;
      });
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload.id
      );
    },
    editIsModal: (state) => {
      state.isModal = !state.isModal;
    },
    addModalStudentId: (state, action) => {
      state.ModalStudentId = action.payload;
    },
    // editEvalution: (state, action) => {
    //   state.students = state.students.map((student) => {
    //     if (student.id === action.payload.id) {
    //       return {
    //         ...student,
    //         evalutions: [...student.evalutions, action.payload.data],
    //       };
    //     }
    //     return student;
    //   });
    // },
  },
});

export const {
  addStudents,
  editStudent,
  deleteStudent,
  editIsModal,
  addModalStudentId,
} = StudentSlice.actions;

export default StudentSlice.reducer;
