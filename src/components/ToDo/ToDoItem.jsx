import { useToDoStore } from "../../store/toDo/toDoStore";

export function TodoItem({ item }) {
  const { list, setList } = useToDoStore();
  const index = list.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(list, index, {
      ...item,
      text: value,
    });

    setList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(list, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(list, index);

    setList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
