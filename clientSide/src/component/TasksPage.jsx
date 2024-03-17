import React from 'react';
import './tasksPage.css'

const TasksPage = ({ arrayTasks }) => {
    // id, name, description, assignee, status

    return (
        <div className="ml-auto mb-6 min-h-[86vh] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className="px-6 pt-6 ">
                <h1 className="pb-8 text-2xl font-medium text-gray-900">List tasks</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name task</th>
                            <th>Description</th>
                            <th>Assigned to</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayTasks?.map((task,index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.assignedTo.name}</td>
                                <td>{task.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TasksPage;
