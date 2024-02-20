import icon from "../assets/weave.svg"
import eyeOff from "../assets/eye-off.svg";
import eye from "../assets/eye.svg";
import { useState } from "react";


export default function Registration() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    return (

        <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
            <div className="mx-auto h-full max-w-80">
                <div className="m-auto  py-12">
                    <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                        <img src={icon} className="w-14 dark:" alt="tailus logo" />
                        <h3 className="mt-4 text-2xl font-semibold text-center text-gray-700 dark:text-white">Sign up</h3>
                        <form action="" className="mt-10 space-y-8 dark:text-white">
                            <div className="flex flex-col items-end">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input required type="Your password" placeholder="Insert your name" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>

                            </div>
                            <div>
                                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300" >
                                    <input required type="email" placeholder="Insert your email" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input required type="password" placeholder="Insert your password" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                                <button className="toggle-password w-6 dark" onClick={togglePasswordVisibility} type="button"><img src={showPassword ? eyeOff : eye} alt="" /></button>

                            </div>

                            <div>
                                <button
                                    className="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                    <span className="text-base font-semibold text-white dark:text-gray-900">Sign up</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}