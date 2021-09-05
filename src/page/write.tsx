import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useTodoStore } from '../store/store';

import Layout from '../components/layout';

type dataForm = {
    title: String;
    description: String;
};

function Write() {
    const { register, reset, handleSubmit, watch } = useForm();
    const addTodo = useTodoStore((state) => state.addTodo);

    const onSubmit = (data: dataForm) => {
        console.log(data);
        toast.success('Se guardo la tarea.', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        addTodo(data.title, data.description);

        reset();
    };

    console.log(watch('title'));
    console.log(watch('description'));

    return (
        <Layout>
            <div
                className="
                    h-auto
                    mx-4
                    w-5/6
                    rounded-lg
                    shadow-md
                    sm:w-1/3 sm:mx-0  
                    p-7
                    bg-white
                    "
            >
                <h2 className="text-secondary font-semibold text-xl font-noto-sans">
                    New Task
                </h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('title')}
                        placeholder="Title"
                        className="appearance-none border-b-2 border-secondary font-noto-sans w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-2"
                        type="text"
                    />
                    <textarea
                        {...register('description')}
                        placeholder="Description ..."
                        className="w-full h-40 resize-y border border-secondary rounded-md focus:outline-none  py-2 px-3 mt-2 mb-2 font-noto-sans"
                    ></textarea>
                    <button
                        type="submit"
                        className=" block bg-primary hover:bg-blue-700 text-white font-noto-sans py-2 px-4 rounded-sm mr-0 m-auto"
                    >
                        Create Task
                    </button>
                    <ToastContainer />
                </form>
                {/* <ToastContainer     position={toast.POSITION.TOP_RIGHT} autoClose={2000} /> */}
            </div>
        </Layout>
    );
}

export default Write;
