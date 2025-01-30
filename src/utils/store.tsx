import { configureStore } from "@reduxjs/toolkit";
import lectureSlice from "./lectureSlice";
import subjectSlice from "./subjectSlice";
import sectionSlice from "./sectionSlice";
import testSlice from "./testSlice";
import activeTabSlice from "./activeTabSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    lecture: lectureSlice,
    subject: subjectSlice,
    section: sectionSlice,
    test: testSlice,
    tabSelect: activeTabSlice,
    toggle: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
