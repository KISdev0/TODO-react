import { useState } from "react";
import styles from "./App.module.css";
import { Todo } from "./Types";

import { TextField } from "./ui/TextField/TextField";
import { TodoList } from "./ui/TodoList/TodoList";

export function App() {
  const [todos, setToDos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setToDos([...todos, { id: Date.now(), text: text, completed: false }]);
  };

  const deleteTodo = (id: number) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleEdit = (id: number, newText: string) => {
    setToDos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };
  return (
    <>
      <h1 className={styles.header}>TODO</h1>
      <TextField add={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={handleEdit}
      />
    </>
  );
}
