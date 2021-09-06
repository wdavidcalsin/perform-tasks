import React from 'react';

import { ReactComponent as IconVer } from '../image/icono-ver.svg';
import { useTodoStore } from '../store/store';

type PropsModal = {
    id: string;
    title: string;
    description: string;
    date: number;
};

const dateFormat = (date: number) => {
    return new Date(date);
};

function ModalTask({ id, title, description, date }: PropsModal) {
    const [showModal, setShowModal] = React.useState(false);

    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    return (
        <>
            <div className="w-full flex items-center py-3 px-5 justify-between bg-white rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="flex bg-gray-100 p-4 w-96 space-x-4 rounded-lg">
                    <input
                        defaultValue={title}
                        className="bg-gray-100 outline-none w-full"
                        type="text"
                        placeholder="Realizar el trabajo 1 y  ejercicio..."
                    />
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-primary font-thin italic text-sm">
                        {dateFormat(date).toLocaleString('en-US')}
                    </span>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-green py-2 px-4 text-white font-semibold rounded-3xl hover:shadow-lg transition duration-3000 cursor-pointer"
                    >
                        <IconVer fill="white" className="w-5 h-auto" />
                    </button>
                    {/* <button className="bg-green py-2 px-4 text-white font-semibold rounded-3xl hover:shadow-lg transition duration-3000 cursor-pointer">
                        Update
                    </button> */}
                    <button
                        className="bg-red py-2 px-4 text-white font-semibold rounded-3xl hover:shadow-lg transition duration-3000 cursor-pointer"
                        onClick={() => deleteTodo(id)}
                    >
                        Remove
                    </button>
                </div>
            </div>

            {showModal ? (
                <>
                    <div className="w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-opacity-30 border-primary rounded-t">
                                    <h3 className="text-3xl font-semibold font-noto-sans text-secondary">
                                        {title}
                                    </h3>

                                    <button
                                        className="p-1 ml-auto  border-0 text-secondary  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className=" text-secondary h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>

                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-secondary text-lg leading-relaxed font-noto-sans">
                                        {description}
                                    </p>
                                    <span className="text-primary font-thin italic text-xs float-right">
                                        {dateFormat(date).toLocaleString(
                                            'en-US'
                                        )}
                                    </span>
                                </div>

                                <div className="flex items-center justify-end p-6 border-t border-solid border-opacity-30 border-primary rounded-b font-noto-sans">
                                    <button
                                        className="bg-red text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false);
                                            deleteTodo(id);
                                        }}
                                    >
                                        Remove
                                    </button>
                                    {/* <button
                                        className="bg-green text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Update
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-primary"></div>
                </>
            ) : null}
        </>
    );
}

export default ModalTask;
