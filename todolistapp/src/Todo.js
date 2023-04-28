import React, { useState } from "react";
import "./Todo.css";
import todologo from "./images/todo.svg";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src={todologo} alt="todoimagelogo" />
          <figcaption>Add your list here</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍️ Add Items ..."
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <AiOutlinePlus className="ai ai-plus add-btn" />
        </div>
        <div className="showItems">
          <div className="eachItem">
            <h3>mango</h3>
            <AiOutlineDelete className="fa-edit fa-trash-alt add-btn" />
          </div>
        </div>
        <div className="showItems">
          <button className="btn effect04" data-sm-link-text="Remove All">
            <span>Check List</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
