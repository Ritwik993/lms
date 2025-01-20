import { createSlice } from "@reduxjs/toolkit";

interface Lecture {
  id: number;
  subjectId: string;
  lectureTitle: string;
  notes: string[];
  dpp: string[];
  video: string[];
  assignment: string[];
  test: string[];
}

interface Subject {
  id: number;
  subjectTitle: string;
  lectures: Lecture[];
}

interface SubjectState {
  subjects: Subject[];
}

const initialState: SubjectState = {
  subjects: [],
};

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    addSubject: (state, action) => {
      state.subjects.push(action.payload);
    },
    updateSubject: (state, action) => {
      const { id, data } = action.payload;
      state.subjects = state.subjects.map((subject) => {
        if (subject.id === id) {
          return {
            ...subject,
            lectures: [...subject.lectures, data],
          };
        }
        return subject;
      });
    },
  },
});

export const { addSubject,updateSubject } = subjectSlice.actions;
export default subjectSlice.reducer;
