import { useState } from "react";
import classes from "./App.module.css";
import NewTodo from "./components/add-todo/NewTodo";
import TodoList from "./components/todo-list/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const taskAddHandler = (task) => {
    setTodos((prevTasks) => prevTasks.concat(task));
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.text = updatedTitle;
        }
        return todo;
      })
    );
  };

  const setCompleted = (updatedComplete, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = updatedComplete;
        }
        return todo;
      })
    );
  };
  const setDelete = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem)
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.header}>
          <header>TODO LIST</header>
        </div>
        <NewTodo onAddTask={taskAddHandler} />
        <TodoList
          items={todos}
          setUpdate={setUpdate}
          setCompleted={setCompleted}
          setDelete={setDelete}
        />
      </div>
    </div>
  );
}

export default App;
