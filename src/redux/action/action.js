// actions.js
import { ADD_NOTE, FETCH_NOTE, DELETE_NOTE } from "./actionName";

export const addNoteAction = (note) => ({
    type: ADD_NOTE,
    payload: note,
});

export const displayNoteAction = () => ({
    type: FETCH_NOTE,
});

export const deleteNoteAction = (id) => ({
    type: DELETE_NOTE,
    payload: id,
});
