import classes from "./TodoList.module.css";
import Todo from "./Todo";

const TodoList = (props) => {
  let todoList = <h2>No task found. Start adding some!</h2>;

  if (props.items.length > 0) {
    todoList = (
      <ul>
        {props.items.map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            taskText={task.text}
            taskCompleted={task.completed}
            setUpdate={props.setUpdate}
            setCompleted={props.setCompleted}
            setDelete={props.setDelete}
          />
        ))}
      </ul>
    );
  }

  let content = todoList;

  return <div className={classes.container}>{content}</div>;
};

export default TodoList;
