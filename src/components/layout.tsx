import React from "react";
import lineasImg from '../image/lineas-image-task-project.png';
import { Link } from 'react-router-dom'

type Props = {
    children: JSX.Element,
};

function Layout({ children }: Props) {
    return (
        <div className="h-screen w-full flex items-center flex-col">

            <div className="top-0 right-0 h-screen flex w-full absolute gradient-radial-to-tr -z-10 from-primary to-secondary">
                <div className="w-1/2 h-screen bg-secondary"></div>
                <div className="w-1/2 h-screen bg-primary"></div>
                <img src={lineasImg} className=" w-full absolute bottom-0 right-0" alt="" />
            </div>

            <div className="bg-white flex font-semibold text-xl uppercase text-secondary font-noto-sans rounded-md my-10 overflow-hidden">
                <Link to='/' className="p-5 hover:bg-primary hover:text-white w-1/2">Write</Link>
                <Link to='/list-tasks' className="p-5 hover:bg-secondary hover:text-white w-1/2">List</Link>
            </div>

            {children}

        </div>
    );
}

export default Layout;

