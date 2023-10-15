import { useState } from "react";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [taskValue,setTaskValue] = useState('')

  const taskChangeHandler = (event)=>{
    setTaskValue(event.target.value)
  }
  
  const submitHandler = (event) =>{
    event.preventDefault();
    if(taskValue.trim().length>0){
      props.onEnterTask(taskValue);
    }
    setTaskValue('');
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        className={classes.input}
        placeholder="Write your task"
        type="text"
        onChange={taskChangeHandler}
        value={taskValue}
      />
      <button className={classes.button}>{props.loading?'Sending':'Add Task'}</button>
    </form>
  );
};

export default TodoForm;
