import React, { useEffect, useState } from "react";
import "../../src/App.css";
import { useDispatch } from "react-redux";
import { addNoteAction } from "../redux/action/action";

export const Todo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: "",
    description: "",
  });

  function handleChange(e) {
    setValue({
      ...value,
      [e.target.name]:e.target.value
    });
  }

 
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addNoteAction(value));

    setValue(
      {
        title: "",
        description: "",
      }
    );
  } 

  return (
    <>
      <h1>Todo List</h1>
      <form >
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={value.title}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={value.description}
        />
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
      
    </>

  );
}
