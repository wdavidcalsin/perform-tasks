export type Todo = {
    id?: string;
    title: String;
    description: String;
};

export type TodoStore = {
    todos: Todo[];
    addTodo: (title: String, description: String) => void;
    deleteTodo: (id: string) => void;
    changeTodoStatus: (id: string) => void;
};
