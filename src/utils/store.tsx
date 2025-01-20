import { configureStore } from "@reduxjs/toolkit";
import lectureSlice from "./lectureSlice";
import subjectSlice from "./subjectSlice";

const store = configureStore({
  reducer: {
    lecture: lectureSlice,
    subject:subjectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
