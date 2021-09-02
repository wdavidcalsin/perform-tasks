import React from "react";
import { useForm } from 'react-hook-form'

import Layout from '../components/layout'

type dataForm = {
    titulo: String;
    description: String;
}

function Write() {

    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data: dataForm) => console.log(data);

    console.log(watch("titulo"));
    console.log(watch("description"));

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
                <h2 className="text-secondary font-semibold text-xl font-noto-sans">Nueva Tarea</h2>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="Estudiar para el examen, el curso de Redes." {...register("titulo")} placeholder="Title" className="appearance-none border-b-2 border-secondary font-noto-sans w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-2" type="text" />
                    <textarea defaultValue="Basarse en ejemplos y post de cisco." {...register("description")} placeholder="Description ..." className="w-full h-40 resize-y border border-secondary rounded-md focus:outline-none  py-2 px-3 mt-2 mb-2 font-noto-sans"></textarea>
                    <button type="submit" className=" block bg-primary hover:bg-blue-700 text-white font-noto-sans py-2 px-4 rounded-sm mr-0 m-auto">Create Task</button>
                </form>
            </div>
        </Layout>


    );
}

export default Write;
