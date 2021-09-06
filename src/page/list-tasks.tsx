import React from 'react';
import { useTodoStore } from '../store/store';

import Layout from '../components/layout';
import ModalTask from '../components/modalTasks';
import { ReactComponent as IconEmpty } from '../image/icon-empty.svg';

function ListTasks() {
    const todos = useTodoStore((state) => state.todos);

    return (
        <Layout>
            {Object.keys(todos).length !== 0 ? (
                <div className="sm:w-3/6 w-full flex flex-col space-y-2">
                    {todos.map((todo, ix) => (
                        <ModalTask
                            key={todo.id}
                            id={todo.id as string}
                            title={todo.title.valueOf()}
                            description={todo.description.valueOf()}
                            date={todo.date}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-10/12 sm:w-2/3 md:w-1/3 h-4/6 flex items-center py-3 px-5 justify-center flex-col border-dashed border-2 border-opacity-30 border-white rounded-md shadow-lg">
                    <IconEmpty className="w-20 h-auto" />
                    <span className="uppercase text-white">
                        There are no tasks
                    </span>
                </div>
            )}
        </Layout>
    );
}

export default ListTasks;
