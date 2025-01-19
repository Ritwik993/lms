import { createSlice } from "@reduxjs/toolkit";

interface Lecture {
  id: number;
  lectureTitle: string[];
  notes: string[];
  dpp: string[];
  video: string[];
  assignment: string[];
  test: string[];
}

interface LectureState {
  lectures: Lecture[];
}

const initialState: LectureState = {
  lectures: [],
};

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    addLecture: (state, action) => {
      state.lectures.push(action.payload);
    },
  },
});

export const { addLecture } = lectureSlice.actions;
export default lectureSlice.reducer;
