//  const [tests, setTests] = useState<TestDetails[]>([
//     { id: 1, topicName: "New Test" },
//   ]);

import { createSlice } from "@reduxjs/toolkit";

interface TestType {
  id: number;
  topicName: string;
}

interface TestDetails {
  testId: number;
  testName: string;
  test: TestType[];
}

interface TestState {
  tests: TestDetails[];
}

const initialState: TestState = {
  tests: [],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addTestSubject: (state, action) => {
      const { id, name } = action.payload;
      state.tests.push({ testId: id, testName: name, test: [] });
    },
    addTest: (state, action) => {
      const { testId, id,topicName} = action.payload;
      const t1 = state.tests.find((t) => t.testId === testId);
      if (t1) {
        t1.test.push({id,topicName});
      }
    },
    updateTest: (state, action) => {
      const { testId, id, data } = action.payload;
      const t1 = state.tests.find((t) => t.testId === testId);
      if (t1) {
        t1.test = t1.test.map((t) =>
          t.id === id ? { ...t, topicName: data } : t
        );
      }
    },
    deleteTest: (state, action) => {
      const { testId, id } = action.payload;
      const t1 = state.tests.find((t) => t.testId === testId);
      if (t1) {
        t1.test = t1.test.filter((t) => t.id != id);
      }
    },
  },
});

export const { addTestSubject, addTest, updateTest, deleteTest } =
  testSlice.actions;
export default testSlice.reducer;
