import React from "react";
import { MdCheck, MdDelete } from "react-icons/md";

interface Props {
  text: string;
  completed: boolean;
  toggleComplete: () => void;
  toggleDelete: () => void;
}

const TodoItem: React.FC<Props> = ({
  text,
  completed,
  toggleComplete,
  toggleDelete,
}: Props) => {
  return (
    <div className="todoItem">
      <a>{completed === true ? <del>{text}</del> : text}</a>
      <div className="todoItemButtons">
        <button onClick={toggleComplete} className="check">
          <MdCheck />
        </button>
        <button className="delete" onClick={toggleDelete}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
