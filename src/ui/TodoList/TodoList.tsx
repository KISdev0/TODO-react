import { TodoListProps } from "../../types";
import { Box } from "@mui/material";
import { TodoComponent } from "./TodoComponent";

export const TodoList = ({
  todos,
  onDelete,
  onToggle,
  onEdit,
}: TodoListProps) => {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos
    .filter((todo) => todo.completed)
    .sort((a, b) => b.completedAt - a.completedAt);

  return (
    <Box>
      <TodoComponent
        title="План"
        todos={activeTodos}
        onDelete={onDelete}
        onEdit={onEdit}
        onToggle={onToggle}
      />
      <TodoComponent
        title="Готово"
        todos={completedTodos}
        onDelete={onDelete}
        onEdit={onEdit}
        onToggle={onToggle}
      />
    </Box>
  );
};
