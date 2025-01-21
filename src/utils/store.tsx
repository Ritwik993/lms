import { configureStore } from "@reduxjs/toolkit";
import lectureSlice from "./lectureSlice";
import subjectSlice from "./subjectSlice";
import sectionSlice from "./sectionSlice";

const store = configureStore({
  reducer: {
    lecture: lectureSlice,
    subject:subjectSlice,
    section:sectionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
