import React from 'react'

function Input({ id, type, placeholder }) {
    return (

        <div className="space-y-6">
            <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300" >
                <input id={id} type={type} placeholder={placeholder} autoComplete="username" className="w-full bg-transparent pb-1  border-b border-gray-300 outline-none  invalid:border-red-400 transition" />
            </div>
        </div>

    )
}

export default Input
