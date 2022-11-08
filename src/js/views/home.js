import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const [inputVal, setInput] = useState([]);
	const { store, actions } = useContext(Context)
	const arr = store.tasks
//   function getValue(e) {
//     e.preventDefault();
//     let clearInput = e.target[0].value;
//     setInput((current) => {
//       return [...current, clearInput];
//     });
//     console.log(getValue);
//     e.target[0].value = "";
//   }
  function deleteLi(i) {
    actions.deleteTask(i)
  }

function getValue(e) {
    e.preventDefault();
	let clearInput = e.target[0].value;
    actions.addTask(clearInput)
	e.target[0].value = "";
  }

  return (
    <div className="todoList">
      <h1 className="title">Todo List</h1>
      <form onSubmit={getValue}>
        <label className="theLabel">
          Task
          <input type="text" className="actualInput" />
          </label>
      </form>
      <ul>
        {arr.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <button className="delete-button" onClick={() => {deleteLi(index)}}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
	}