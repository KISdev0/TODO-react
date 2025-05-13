import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import { Edit, Delete, Check, Close } from "@mui/icons-material";
import { ToDoItemProps } from "../../types";
import { useState } from "react";

export const TodoItem = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
}: ToDoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <ListItem
      secondaryAction={
        isEditing ? (
          <>
            <IconButton
              sx={{ color: "blue" }}
              aria-label="Сохранить"
              onClick={handleEdit}
            >
              <Check />
            </IconButton>
            <IconButton
              sx={{ color: "orange" }}
              aria-label="Закрыть"
              onClick={handleCancel}
            >
              <Close />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton
              edge="end"
              onClick={() => setIsEditing(true)}
              aria-label="Редактировать"
              sx={{ color: "blue" }}
            >
              <Edit />
            </IconButton>
            <IconButton
              edge="end"
              onClick={() => onDelete(todo.id)}
              aria-label="Удалить"
              sx={{ color: "orange" }}
            >
              <Delete />
            </IconButton>
          </>
        )
      }
    >
      <Stack direction="row" alignItems="center" spacing={2} width="100%">
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          disabled={isEditing}
        />
        {isEditing ? (
          <TextField
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            variant="standard"
            fullWidth
            autoFocus
          />
        ) : (
          <ListItemText
            primary={todo.text}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "inherit",
            }}
          />
        )}
      </Stack>
    </ListItem>
  );
};
