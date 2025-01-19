import { configureStore } from "@reduxjs/toolkit";
import lectureSlice from "./lectureSlice";

const store = configureStore({
  reducer: {
    lecture: lectureSlice,
  },
});

export default store;
