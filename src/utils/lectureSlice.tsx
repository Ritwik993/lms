import { createSlice } from "@reduxjs/toolkit";

interface Lecture {
  id: number;
  subjectId: string;
  lectureTitle: string;
  
}

interface LectureState {
  lectures: Lecture;
}

const initialState: LectureState = {
  lectures: {
    id:0,
    subjectId:"",
    lectureTitle:"",
  },
};


const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {

    addLecture:(state,action)=>{
        state.lectures=action.payload;
    }
    // addLecture: (state, action) => {
    //   state.lectures.push(action.payload);
    // },
    // updateLecture: (state, action) => {
    //   // console.log("Action Payload:", action.payload);
    //   // console.log("Previous State:", state.lectures);
    //   // const { id, formState } = action.payload;
    //   // const lectureIndex = state.lectures.findIndex((lecture) => lecture.id === id);

    //   // if (lectureIndex !== -1) {
    //   //   state.lectures[lectureIndex] = {
    //   //     ...state.lectures[lectureIndex],
    //   //     ...formState,
    //   //   };
    //   //   console.log("Updated State:", state.lectures);
    //   // } else {
    //   //   console.error(`Lecture with ID ${id} not found.`);
    //   // }

    //   const { id, formState } = action.payload;

    //   // Using map to return a new array with the updated lecture
    //   state.lectures = state.lectures.map((lecture) => {
    //     if (lecture.id === id) {
    //       return {
    //         ...lecture,
    //         ...formState,
    //       };
    //     }
    //     return lecture; // Return the original lecture if the id doesn't match
    //   });

    //   console.log("Updated State:", state.lectures);
    // },
  },
});

export const { addLecture } = lectureSlice.actions;
export default lectureSlice.reducer;
