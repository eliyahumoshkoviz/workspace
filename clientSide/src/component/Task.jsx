import React from 'react'

function Task({ title, description, assignedTo, status }) {
    return (
        <div className="w-full p-4 bg-white border rounded-lg shadow-md ">
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-gray-600">{assignedTo}</p>
            <p className="text-gray-600">{status}</p>
        </div>
    )
}

export default Task
