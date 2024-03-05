import React from 'react'

function Members({ name, email }) {
    return (
        <div className="w-full p-4 bg-white border rounded-lg shadow-md md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h3 className="mb-2 text-xl font-semibold">{name}</h3>
            <p className="text-gray-600">{email}</p>
        </div>
    )
}

export default Members
