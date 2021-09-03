import create from 'zustand';
import { TodoStore } from '../types/store.type';
import { v4 as uuidv4 } from 'uuid';

const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (title: String, description: String) => {
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: uuidv4(),
                    title,
                    description,
                },
            ],
        }));
    },
    deleteTodo: (id: String) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        }));
    },
    changeTodoStatus: (id: string) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          title: todo.title,
                          description: todo.description,
                      }
                    : todo
            ),
        }));
    },
}));
export { useTodoStore };
