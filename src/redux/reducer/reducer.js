// reducer.js
import { ADD_NOTE, FETCH_NOTE, DELETE_NOTE } from "../action/actionName";

const initialState = {
    notes: [],
};

export function myReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            const newNote = {
                id: Math.random(),
                title: action.payload.title,
                description: action.payload.description,
            };

            const updatedNotes = [...state.notes, newNote];
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            return {
                ...state,
                notes: updatedNotes,
            };
        case FETCH_NOTE:
            return {
                ...state,
                notes: JSON.parse(localStorage.getItem("notes")) || [],
            };
        case DELETE_NOTE:
            const filteredNotes = state.notes.filter((item) => item.id !== action.payload);
            localStorage.setItem('notes', JSON.stringify(filteredNotes));
            return {
                ...state,
                notes: filteredNotes,
            };
        default:
            return state;
    }
}
