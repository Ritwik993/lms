import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { act } from "react";

type FormData = {
  name: string;
  link: string;
};

interface Lecture {
  id: string;
  subjectId: string;
  lectureTitle: string;
  notes: FormData[];
  dpp: FormData[];
  video: FormData[];
  assignment: FormData[];
  test: FormData[];
}

interface Subject {
  id: string;
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
    deleteSubjectById: (state, action: PayloadAction<string>) => {
      const subjectId = action.payload;
      state.subjects = state.subjects.filter(
        (subject) => subject.id !== subjectId
      );
    },
    updateSubjectName: (
      state,
      action: PayloadAction<{ subjectId: string; subjectName: string }>
    ) => {
      const {subjectId,subjectName}=action.payload;
      const subjectIndex=state.subjects.findIndex((subject)=>subject.id===subjectId);
      if(subjectIndex!==-1){
        state.subjects[subjectIndex].subjectTitle=subjectName;
      }
    },
    addLectureById: (
      state,
      action: PayloadAction<{ subjectId: string,topicId:string, lecture: string }>
    ) => {
      console.log("addLecture");
      const { subjectId, topicId,lecture } = action.payload;
      const sectionIndex = state.subjects.findIndex(
        (subject) => subject.id === subjectId
      );
      console.log("sectionIndex=" + sectionIndex);
      if (sectionIndex !== -1) {
        state.subjects[sectionIndex].lectures.push({
          id: topicId,
          subjectId: subjectId,
          lectureTitle: lecture,
          notes: [],
          dpp: [],
          video: [],
          assignment: [],
          test: [],
        });
      }
    },

    updateLectureTitle: (state, action) => {
      const { sectionId, topicId, name } = action.payload;

      const sectionIndex = state.subjects.findIndex(
        (section) => section.id === sectionId
      );

      console.log("sectionIndex=" + sectionIndex);

      if (sectionIndex !== -1) {
        const topicIndex = state.subjects[sectionIndex].lectures.findIndex(
          (topic) => topic.id === topicId
        );

        if (topicIndex !== -1) {
          // Create a new lecture object instead of mutating directly
          state.subjects[sectionIndex].lectures[topicIndex] = {
            ...state.subjects[sectionIndex].lectures[topicIndex],
            lectureTitle: name,
          };
        }
      }
    },

    deleteLectureById: (state, action) => {
      const { sectionId, topicId } = action.payload;
      const sectionIndex = state.subjects.findIndex(
        (section) => section.id === sectionId
      );
      if (sectionIndex !== -1) {
        state.subjects[sectionIndex].lectures = state.subjects[
          sectionIndex
        ].lectures.filter((topic) => topic.id !== topicId);
      }
    },

    updateSubject: (state, action) => {
      const { id, cname, data } = action.payload;
      state.subjects = state.subjects.map((subject) => {
        if (subject.id === id) {
          const lect = subject.lectures.find(
            (lecture: any) => lecture.lectureTitle === cname
          );

          if (lect) {
            lect.notes = [];
            lect.dpp = [];
            lect.video = [];
            lect.assignment = [];
            lect.test = [];
            lect.notes.push(...(data.notes || []));
            lect.dpp.push(...(data.dpp || []));
            lect.video.push(...(data.video || []));
            lect.assignment.push(...(data.assignment || []));
            lect.test.push(...(data.test || []));

            // return {...state.subjects};
          } else {
            return { ...subject, lectures: [...subject.lectures, data] };
          }
        }
        return subject;
      });
    },
    deleteSubject: (state) => {
      state.subjects = [];
    },
  },
});

export const {
  addSubject,
  updateSubject,
  updateLectureTitle,
  deleteSubject,
  addLectureById,
  deleteSubjectById,
  updateSubjectName,
  deleteLectureById,
} = subjectSlice.actions;
export default subjectSlice.reducer;
