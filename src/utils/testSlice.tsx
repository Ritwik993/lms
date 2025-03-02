//  const [tests, setTests] = useState<TestDetails[]>([
//     { id: 1, topicName: "New Test" },
//   ]);

import { createSlice } from "@reduxjs/toolkit";

interface TestType {
  id: string;
  topicName: string;
  edit?: boolean;
  data?: any;
}

interface TestDetails {
  testId: string;
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
    clearTest: (state, action) => {
      state.tests = state.tests.map((t: any) =>
        t.testId === action.payload
          ? { testId: t.testId, testName: t.testName, test: [] }
          : t
      );
    },
    addTest: (state, action) => {
      const { testId, id, topicName, edit, data } = action.payload;

      const t1 = state.tests.find((t) => t.testId === testId);
      if (t1) {
        if (data) t1.test.push({ id, topicName, edit, data });
        else t1.test.push({ id, topicName, edit });
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

export const { addTestSubject, addTest, updateTest, deleteTest, clearTest } =
  testSlice.actions;
export default testSlice.reducer;
