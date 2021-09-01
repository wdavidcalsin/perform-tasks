import React from "react";

import Layout from '../components/layout'
import ModalTask from "../components/modalTasks";

function ListTasks() {
    return (
        <Layout>
            {/* <div
                className="
                    h-auto
                    mx-4
                    w-5/6
                    rounded-lg
                    shadow-md
                    sm:w-1/3 sm:mx-0  
                    p-5
                    bg-white
                    "
            >
                Lista 1
            </div> */}
            <div className="sm:w-3/6 w-full flex flex-col space-y-2">

                <ModalTask />
                <ModalTask />
                <ModalTask />

            </div>
        </Layout>


    );
}

export default ListTasks;
