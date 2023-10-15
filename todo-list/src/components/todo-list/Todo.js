import CompleteButton from "../buttons/CompleteButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import classes from "./Todo.module.css";
import { useState } from "react";

const Todo = (props) => {
  const [editing, setEditing] = useState(false);
  const [complete, setComplete] = useState(false);
  let content = null;
  let editButtonDisable = null;
  let completeButtonDisable = null;
  let deleteButtonDisable = null;

  const onChangeHandler = (event) => {
    props.setUpdate(event.target.value, props.id);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  if (!editing && !complete) {
    content = <div>{props.taskText}</div>;
    editButtonDisable = false;
  }

  if (!editing && complete) {
    content = <del>{props.taskText}</del>;
    editButtonDisable = true;
  }

  if (editing && !complete) {
    content = (
      <input
        type="text"
        className={classes.textInput}
        onChange={onChangeHandler}
        value={props.taskText}
        onKeyDown={handleUpdatedDone}
      />
    );
    editButtonDisable = true;
  }
  if (editing === true) {
    completeButtonDisable = true;
  }

  if(!complete){
    deleteButtonDisable = true;
  }

  const editinghandler = (edit) => {
    setEditing(edit);
  };
  const completeHandler = (complete) => {
    setComplete(complete);
  };

  return (
    <div className={classes.todo}>
      <div className={classes.firstDiv}>
        <div className={classes.content}>{content}</div>
      </div>
      <div className={classes.secondDiv}>
        <CompleteButton
          id={props.id}
          completed={props.taskCompleted}
          setCompleted={props.setCompleted}
          complete={completeHandler}
          disable = {completeButtonDisable}
        />
        <EditButton editing={editinghandler} disable={editButtonDisable} />
        <DeleteButton id={props.id} setDelete={props.setDelete} disable={deleteButtonDisable}/>
      </div>
    </div>
  );
};
export default Todo;
