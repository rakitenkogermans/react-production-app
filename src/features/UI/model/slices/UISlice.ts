import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UISchema } from 'features/UI';
import path from 'path';

const initialState: UISchema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});
export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
