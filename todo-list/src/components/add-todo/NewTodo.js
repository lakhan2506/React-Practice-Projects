import { Fragment} from "react";
import TaskForm from "./TodoForm";
import { v4 as uuid } from 'uuid';

const NewTodo = (props) => {
  const enterTaskHandler = (taskText) => {
    const id = uuid().slice(0,5)
    const createdTask = {id:id,text: taskText, completed:false };
    props.onAddTask(createdTask);
  };

  return (
    <Fragment>
      <TaskForm onEnterTask={enterTaskHandler} />
    </Fragment>
  );
};
export default NewTodo;
