import React from 'react'
import icon from "../assets/weave.svg";

function Nav() {
    return (
        <div>
            <div className="-mx-6 px-6 py-4">
                <img src={icon} className="w-14" alt="Workspace logo" />
            </div>

            <ul className="mt-8 space-y-2 tracking-wide">
                <li>
                    <div
                        className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                    >
                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                                className="dark:fill-slate-600 fill-current text-cyan-400"
                            ></path>
                            <path
                                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                                className="fill-current text-cyan-200 group-hover:text-cyan-300"
                            ></path>
                            <path
                                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                                className="fill-current group-hover:text-sky-300"
                            ></path>
                        </svg>
                        <span className="-mr-1 font-medium">Dashboard</span>
                    </div>
                </li>
                <li>
                    <div
                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                    >
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                className="fill-current text-gray-300 group-hover:text-cyan-300"
                                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                clipRule="evenodd"
                            />
                            <path
                                className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                            />
                        </svg>
                        <span>Grops</span>
                    </div>
                </li>
                <li>
                    <div
                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                    >
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                clipRule="evenodd"
                            />
                            <path
                                className="fill-current text-gray-300 group-hover:text-cyan-300"
                                d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                            />
                        </svg>
                        <span>Tasks</span>
                    </div>
                </li>
                <li>
                    <div
                        className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
                    >
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                            />
                            <path
                                className="fill-current text-gray-300 group-hover:text-cyan-300"
                                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                            />
                        </svg>
                        <span>Other data</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Nav
