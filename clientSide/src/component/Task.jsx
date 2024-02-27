import React from 'react'

function Task() {
    return (


        <div className="rounded-md  bg-gradient-to-br from-pink-500 to-purple-600 w-80 h-80 py-10">
            <div className="container mx-auto px-6 text-center md:px-12 lg:px-20">
                <h2 className="mx-auto mb-8 text-4xl font-bold text-white">
                    Your money in your hands.
                </h2>

                <a
                    href="#"
                    className="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                    <span className="relative text-base font-semibold text-purple-600">
                        Create an Account now
                    </span>
                </a>
            </div>
        </div>

    )
}

export default Task
