import { useToDoStore } from "../../store/toDo/toDoStore";
import { TodoItem } from "./ToDoItem";
import { TodoItemCreator } from "./ToDoItemCreator";
import { TodoListFilters } from "./ToDoListFilters";
import { TodoListStats } from "./ToDoListStats";

export function ToDoList() {
  const { getFilteredList } = useToDoStore();
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {getFilteredList().map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
