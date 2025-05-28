import { memo, useCallback, useState } from "react";
import styles from "./App.module.css";
import { Todo } from "./types";

import { TextField } from "./ui/TextField/TextField";
import { TodoList } from "./ui/TodoList/TodoList";
import { Typography } from "@mui/material";

export function App() {
  const [todos, setToDos] = useState<Todo[]>([]);
  const addTodo = useCallback((text: string) => {
    setToDos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, completed: false, completedAt: 0 },
    ]);
  }, []);

  const deleteTodo = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? Date.now() : 0,
            }
          : todo
      )
    );
  };
  const handleEdit = (id: number, newText: string) => {
    setToDos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  const MemoizedTextField = memo(TextField);

  return (
    <>
      <h1 className={styles.header}>TODO</h1>
      <MemoizedTextField add={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={handleEdit}
      />
    </>
  );
}
