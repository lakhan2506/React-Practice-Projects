import { MdDelete } from "react-icons/md";
import classes from "./button.module.css";

const DeleteButton = (props) => {
    const deleteButtonHandler = ()=>{
        props.setDelete(props.id);
    }

  return (
    <button
      className={classes.button}
      onClick={deleteButtonHandler}
      title="delete"
      disabled={props.disable}
    >
      <MdDelete size={25} />
    </button>
  );
};

export default DeleteButton;
