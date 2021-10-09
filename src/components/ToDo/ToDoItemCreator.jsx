import { useState } from "react";
import { useToDoStore } from "../../store/toDo/toDoStore";

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const { addItem } = useToDoStore();

  const addItemOnList = () => {
    addItem({
      id: getId(),
      text: inputValue,
      isComplete: false,
    });
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button className="spacing" onClick={addItemOnList}>
        Add
      </button>
    </div>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
