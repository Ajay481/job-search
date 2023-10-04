import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobLists: [],
    preview: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.jobLists.push(action.payload);
    },
    addPreview: (state, action) => {
      console.log(action.payload)
      state.preview.push(action.payload);
    },
  },
});

export const { addItems, addPreview } = jobSlice.actions;

export default jobSlice.reducer;
