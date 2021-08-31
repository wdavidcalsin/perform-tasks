import React from "react";
import lineasImg from './image/lineas-image-task-project.png';

import "./App.css";

function App() {
  return (
    <div className="h-screen w-full bg-primary flex justify-center items-center z-0 ">
      <img src={lineasImg} className=" w-full absolute z-20 bottom-0 right-0" alt="" />
      <div className="absolute w-1/2 h-screen bg-secondary left-0 z-10"></div>
      <div
        className="
          h-auto
          mx-4
          w-5/6
          rounded-lg
          shadow-md
          sm:w-1/3 sm:mx-0
          z-30
          p-7
          bg-white
        "
      >
        <h2 className="text-secondary font-semibold text-xl font-noto-sans">Nueva Tarea</h2>
        <form action="">
          <input placeholder="Title" className="appearance-none border-b-2 border-secondary font-noto-sans w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-2" type="text" />
          <textarea placeholder="Description ..." className="w-full h-40 resize border border-secondary rounded-md focus:outline-none  py-2 px-3 mt-2 mb-2 font-noto-sans"></textarea>
          <button className=" block bg-primary hover:bg-blue-700 text-white font-noto-sans py-2 px-4 rounded-sm mr-0 m-auto">Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default App;
