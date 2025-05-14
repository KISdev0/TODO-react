import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { TextFieldProps } from "../../types";

export function TextField({ add }: TextFieldProps) {
  const [text, setText] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      add(text);
      setText("");
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        mb: "40px",
      }}
      onSubmit={handleAddTodo}
    >
      <InputBase
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ ml: 1, flex: 1, width: "400px" }}
        placeholder="Имя новой задачи"
        inputProps={{ "aria-label": "Имя новой задачи" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleAddTodo}
      >
        +
      </IconButton>
    </Paper>
  );
}
