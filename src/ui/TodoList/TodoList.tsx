import { TodoListProps } from "../../Types";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = ({ todos, onDelete, onToggle, onEdit }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};
