import { TodoListProps } from "../../Types";
import { TodoItem } from "../TodoItem/TodoItem";
import { Box, Typography } from "@mui/material";

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
      {activeTodos.length > 0 && (
        <Box>
          <Typography
            sx={{ ml: "200px" }}
            variant="h6"
            component="h2"
            gutterBottom
          >
            План({activeTodos.length})
          </Typography>
          <ul style={{ width: "400px" }}>
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
              />
            ))}
          </ul>
        </Box>
      )}
      {completedTodos.length > 0 && (
        <Box>
          <Typography
            sx={{ ml: "200px" }}
            variant="h6"
            component="h2"
            gutterBottom
          >
            Готово({completedTodos.length})
          </Typography>
          <ul style={{ width: "400px" }}>
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggle={onToggle}
                onEdit={onEdit}
              />
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};
