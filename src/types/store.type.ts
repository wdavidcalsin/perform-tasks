export type Todo = {
    id?: string;
    title: String;
    description: String;
    date: number;
};

export type TodoStore = {
    todos: Todo[];
    addTodo: (title: String, description: String) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (id: string, title: string, description: string) => void;
};
