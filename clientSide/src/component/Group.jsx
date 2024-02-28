import React from 'react'

function Group({ title }) {
    return (


        <div className="rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 w-80 min-h-[18rem] py-10 flex flex-col justify-center items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <h2 className="mx-auto mb-6 text-3xl font-semibold text-white">
                    {title}
                </h2>
                <h4 className="mx-auto mb-2 text-lg font-semibold text-white text-left">
                Title deed 
                </h4>
                <h4 className="mx-auto mb-8 text-lg font-semibold text-white text-left">
                Eliyahu
                </h4>
                <button
                    className="relative flex items-center justify-center h-12 w-full px-6 rounded-full bg-white text-base font-semibold text-sky-600 hover:scale-105 transition duration-300 whitespace-nowrap"
                >
                    Click to enter
                </button>
            </div>
        </div>



    )
}

export default Group
