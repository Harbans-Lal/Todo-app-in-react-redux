
import { createStore } from "redux";
import { myReducer } from "../reducer/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export  const store =  createStore(myReducer,composeWithDevTools());



