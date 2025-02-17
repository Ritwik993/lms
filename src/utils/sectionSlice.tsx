import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Topic {
  id: number;
  name: string;
}

interface Section {
  id: number;
  name: string;
  topics: Topic[];
}

interface SectionState {
  sections: Section[];
}

const initialState: SectionState = {
  sections: [
    // {
    //   id: 1,
    //   name: "Section Name",
    //   topics: [{ id: 1, name: "Chapter Name" }],
    // },
  ],
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    // Add a new section
    addSectionRedux: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const { id, name } = action.payload;
      state.sections.push({ id, name, topics: [] });
    },

    emptySection:(state)=>{
      state.sections=[];
    },

    // Delete a section by ID
    deleteSectionRedux: (state, action: PayloadAction<number>) => {
      const sectionId = action.payload;
      state.sections = state.sections.filter((section) => section.id !== sectionId);
    },

    // Update a section name
    updateSectionNameRedux: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      const { id, name } = action.payload;
      const section = state.sections.find((section) => section.id === id);
      if (section) {
        section.name = name;
      }
    },

    // Add a topic to a section
    addTopicRedux: (
      state,
      action: PayloadAction<{ sectionId: number; topic: Topic }>
    ) => {
      const { sectionId, topic } = action.payload;
      const section = state.sections.find((section) => section.id === sectionId);
      if (section) {
        section.topics.push(topic);
      }
    },

    // Delete a topic from a section
    deleteTopicRedux: (
      state,
      action: PayloadAction<{ sectionId: number; topicId: number }>
    ) => {
      const { sectionId, topicId } = action.payload;
      const section = state.sections.find((section) => section.id === sectionId);
      if (section) {
        section.topics = section.topics.filter((topic) => topic.id !== topicId);
      }
    },

    // Update a topic name
    updateTopicNameRedux: (
      state,
      action: PayloadAction<{
        sectionId: number;
        topicId: number;
        name: string;
      }>
    ) => {
      const { sectionId, topicId, name } = action.payload;
      const section = state.sections.find((section) => section.id === sectionId);
      if (section) {
        const topic = section.topics.find((topic) => topic.id === topicId);
        if (topic) {
          topic.name = name;
        }
      }
    },
  },
});

// Export actions and reducer
export const {
  addSectionRedux,
  deleteSectionRedux,
  updateSectionNameRedux,
  addTopicRedux,
  deleteTopicRedux,
  updateTopicNameRedux,
  emptySection,
} = sectionSlice.actions;

export default sectionSlice.reducer;
