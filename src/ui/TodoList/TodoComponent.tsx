import { Box, Typography } from "@mui/material";
import { TodoComponentProps } from "../../types";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoComponent = ({
  title,
  todos,
  onDelete,
  onToggle,
  onEdit,
}: TodoComponentProps) => {
  if (todos.length === 0) {
    return null;
  }

  return (
    <Box>
      <Typography sx={{ ml: "200px" }} variant="h6" component="h2" gutterBottom>
        {title}({todos.length})
      </Typography>
      <ul style={{ width: "400px" }}>
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
    </Box>
  );
};
