import React, { useState } from "react";
import "./Todo.css";
import todologo from "./images/todo.svg";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const handleAddItem = () => {
    if (!inputText) {
    } else {
      setItems([...items, inputText]);
      setInputText("");
    }
  };

  const handleDeleteItems = (idx) => {
    const newItems = items.filter((elements, index) => {
      return index !== idx;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };
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
          <AiOutlinePlus
            className="ai ai-plus add-btn"
            onClick={handleAddItem}
          />
        </div>
        <div className="showItems">
          {items.map((item, index) => {
            return (
              <div className="eachItem" key={index}>
                <h3>{item}</h3>
                <AiOutlineDelete
                  className="fa-edit fa-trash-alt add-btn"
                  onClick={() => handleDeleteItems(index)}
                />
              </div>
            );
          })}
        </div>
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            onClick={handleRemoveAllItems}>
            <span>Check List</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
