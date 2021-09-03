import React from 'react';
import { useTodoStore } from '../store/store';


import Layout from '../components/layout';
import ModalTask from '../components/modalTasks';


function ListTasks() {
    const todos = useTodoStore((state) => state.todos);


    return (
        <Layout>
            <div className="sm:w-3/6 w-full flex flex-col space-y-2">
                {todos.map((todo, ix) => (
                    <ModalTask key={todo.id} title={todo.title.valueOf()} description={todo.description.valueOf()} />
                ))}

            </div>
        </Layout>
    );
}

export default ListTasks;
