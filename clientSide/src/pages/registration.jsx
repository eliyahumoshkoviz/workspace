import icon from "../assets/weave.svg";
import eyeOff from "../assets/eye-off.svg";
import eye from "../assets/eye.svg";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Registration({ setDetails }) {

    const { register, handleSubmit } = useForm({});
    const [ad, setAD] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const checkData = async (details) => {
        await axios
            .post("http://localhost:8000/registration", details)
            .then(({ data }) => {
                navigate("/");
                setDetails(details);

            })
            .catch((err) => { setAD(err?.response?.data); });
    }

    return (

        <div className="px-12 m-auto mx-auto xl:container sm:px-0">
            <div className="h-full mx-auto max-w-80">
                <div className="py-12 m-auto">
                    <div className="p-8 mt-12 -mx-6 border rounded-3xl bg-gray-50 dark:border-gray-700 dark:bg-gray-800 sm:-mx-10 sm:p-10">
                        <img src={icon} className="w-14 dark:" alt="tailus logo" />
                        <h3 className="mt-4 text-2xl font-semibold text-center text-gray-700 dark:text-white">Sign up</h3>

                        <form onSubmit={handleSubmit(checkData)} className="mt-10 space-y-8 dark:text-white">
                            <div className="flex flex-col items-end">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input {...register("name", { required: true })} id="name" type="text" placeholder="Insert your name" className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none dark:placeholder-gray-300 dark:border-gray-600 invalid:border-red-400" />
                                </div>

                            </div>
                            <div>
                                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300" >
                                    <input onFocus={() => setAD('')} {...register("email", { required: true })} id="email" type="email" placeholder="Insert your email" autoComplete="username" className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none dark:placeholder-gray-300 dark:border-gray-600 invalid:border-red-400" />
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input onFocus={() => setAD('')} id="password" autoComplete="current-password" {...register("password", { required: true })} type={showPassword ? "text" : "password"} placeholder="Insert your password" className="w-full pb-3 transition bg-transparent border-b border-gray-300 outline-none dark:placeholder-gray-300 dark:border-gray-600 invalid:border-red-400" />
                                </div>
                                <button className="w-6 dark" onClick={togglePasswordVisibility} type="button"><img src={showPassword ? eyeOff : eye} alt="" /></button>
                            </div>

                            <div>
                                <h3 className="text-base font-normal text-center text-red-500 dark:text-white">{ad}</h3>
                                <button
                                    className="flex items-center justify-center w-full px-6 py-3 transition rounded-full mt-7 bg-sky-500 dark:bg-sky-400 h-11 hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                                >
                                    <span className="text-base font-semibold text-white dark:text-gray-900">Login</span>
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}