import { FiEdit } from "react-icons/fi";
import classes from "./button.module.css";

const EditButton = (props) => {
  const handleEditing = () => {
    props.editing(true);
  };
  console.log(props.disable);

  return (
    <button
      className={classes.button}
      disabled={props.disable}
      onClick={handleEditing}
      title="edit"
    >
      <FiEdit size={25} />
    </button>
  );
};

export default EditButton;
