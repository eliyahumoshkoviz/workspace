import React from 'react';
import { useNavigate } from "react-router-dom";


function Logout() {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("userWorkspace");
        navigate('/')

    }
    
    return (
        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
            <button onClick={logout} className="group flex items-center space-x-4 rounded-md overflow-auto px-4 py-3 text-gray-600 dark:text-gray-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                </svg>
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Logout

