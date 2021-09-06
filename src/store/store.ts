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
                    date: Date.now(),
                },
            ],
        }));
    },
    deleteTodo: (id: String) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        }));
    },
    updateTodo: (id: string, title: string, description: string) => {
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                    ? {
                          ...todo,
                          title: title,
                          description: description,
                      }
                    : todo
            ),
        }));
    },
}));
export { useTodoStore };
