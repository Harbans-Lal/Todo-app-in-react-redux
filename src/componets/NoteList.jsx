import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, displayNoteAction } from "../redux/action/action";

 const NoteList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayNoteAction());
  }, [dispatch]);

  const allData = useSelector((storeData) => storeData.notes || []);

  return (
    <>
      <div>
        <h3>Title</h3>
        <p>some content</p>
        <button>Delete</button>
      </div>
      <div>
        <h3>Title</h3>
        <p>some content</p>
        <button>Delete</button>
      </div>

      {allData.map((note) => {
        return (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>s{note.description}</p>
            <button onClick={()=> dispatch(deleteNoteAction(note.id))}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default NoteList;