import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
    name: 'mode',
    initialState: { mode: 'dark' },
    reducers: {
        toggle: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { toggle } = modeSlice.actions;
export default modeSlice.reducer;
