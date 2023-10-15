import { MdOutlineDone, MdOutlineDoneAll } from "react-icons/md";
import classes from "./button.module.css";
import { useState } from "react";

const CompleteButton = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.completed);

  const compleButtonHandler = () => {
    setIsCompleted(true);
    props.setCompleted(isCompleted, props.id);
    props.complete(true);
  };

  const compledButtonHandler = () => {
    setIsCompleted(false);
    props.setCompleted(isCompleted, props.id);
    props.complete(false);
  };

  let content = null;

  if (!isCompleted) {
    content = (
      <button
        className={classes.button}
        disabled={props.disable}
        onClick={compleButtonHandler}
        title="complete"
      >
        <MdOutlineDone size={25} />
      </button>
    );
  } else {
    content = (
      <button
        className={classes.button}
        onClick={compledButtonHandler}
        title="completed"
      >
        <MdOutlineDoneAll size={25} />
      </button>
    );
  }

  return <div>{content}</div>;
};

export default CompleteButton;
