export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  completedAt: number;
}

export interface TextFieldProps {
  add: (text: string) => void;
}

export interface ToDoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}
