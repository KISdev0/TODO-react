export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  completedAt: number;
}

export interface TextFieldProps {
  add: (text: string) => void;
}

export interface TodoActions {
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export interface ToDoItemProps extends TodoActions {
  todo: Todo;
}

export interface TodoListProps extends TodoActions {
  todos: Todo[];
}

export interface TodoComponentProps extends TodoActions{
  title: string;
  todos: Todo[];

}