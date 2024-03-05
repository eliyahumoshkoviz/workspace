import React from 'react'

function Group({ name , description, managers}) {
    return (
        
        <div className="rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 w-80 min-h-[18rem] py-10 flex flex-col justify-center items-center">
            <div className="container px-6 mx-auto text-center md:px-12 lg:px-20">
                <h2 className="mx-auto mb-6 text-3xl font-semibold text-white">
                    {name}
                </h2>
                <h4 className="mx-auto mb-2 text-lg font-semibold text-left text-white">
                {description}
                </h4>
                <h4 className="mx-auto mb-8 text-lg font-semibold text-left text-white">
                {managers}
                </h4>
                <button
                    className="flex items-center justify-center w-full h-12 px-6 text-base font-semibold transition duration-300 bg-white rounded-full text-sky-600 hover:scale-105 whitespace-nowrap"
                >
                    Click to enter
                </button>
            </div>
        </div>



    )
}

export default Group
