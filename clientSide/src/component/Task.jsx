import React from 'react'

function Task({ title, description, assignedTo, status }) {
    return (
        <div className="w-full p-4 bg-white border rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <div className="flex flex-wrap items-center mb-2">
            <span className="mr-2 text-gray-600">Description:</span>
            <p className="text-gray-800">{description}</p>
        </div>
        <div className="flex flex-wrap items-center mb-2">
            <span className="mr-2 text-gray-600">Assigned to:</span>
            <p className="text-gray-800">{assignedTo}</p>
        </div>
        <div className="flex flex-wrap items-center mb-2">
            <span className="mr-2 text-gray-600">Status:</span>
            <p className="text-gray-800">{status}</p>
        </div>
    </div>
    
    )
}

export default Task
