import React from 'react';

import Layout from '../components/layout';
import ModalTask from '../components/modalTasks';

function ListTasks() {
    return (
        <Layout>
            <div className="sm:w-3/6 w-full flex flex-col space-y-2">
                <ModalTask />
                <ModalTask />
                <ModalTask />
            </div>
        </Layout>
    );
}

export default ListTasks;
