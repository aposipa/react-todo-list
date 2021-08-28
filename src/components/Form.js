import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  //   console.log(props);
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 10 },
    ]);
    setInputText("");
  };
  return (
    // <form>
    //   <input value={inputText} onChange={inputTextHandler} type="text"></input>
    //   <button onClick={submitTodoHandler}>Submit</button>
    // </form>
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      ></input>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      {/* <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
    </form>
  );
}

export default Form;
