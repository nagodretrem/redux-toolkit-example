
import { createSlice } from "@reduxjs/toolkit";



interface State {
    notification: {
        message: string;
        type: 'success' | 'error' | 'warning' | 'info';
        open: boolean;
    } 
}

const initialState: State = {
    notification: {
        message: "",
        type: "info",
        open: false,
    },
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
            };
        },

        hideNotification(state) {
            state.notification = {
                message: "",
                type: "info",
                open: false,
            };
        },
    },


});

export const uiActions = uiSlice.actions;

export default uiSlice;