import icon from "../assets/weave.svg";
import eyeOff from "../assets/eye-off.svg";
import eye from "../assets/eye.svg";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate  } from "react-router-dom";

export default function Login() {
    
    const { register, handleSubmit } = useForm({});
    const [flag, setFlag] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [ad, setAD] = useState({});


    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const checkData = async (details) => {
        await axios
            .post("http://localhost:8000/login", details)
            .then(({ data }) => {
              
                if (data.token) {
                    console.log(data);
                }
            })
            .catch((arr) => { setFlag(true); setAD(arr.response.data), console.log({ message: arr.response.data }) });
    }

    const sendEmail = async (event) => {
        event.preventDefault();
        console.log("sendEmail");

    }

    return (

        <div className="m-auto xl:container px-12 sm:px-0 mx-auto">
            <div className="mx-auto h-full  max-w-80">
                <div className="m-auto  py-12">
                    <div className="mt-12 rounded-3xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
                        <img src={icon} className="w-14 dark:" alt="tailus logo" />
                        <h3 className="mt-4 text-2xl font-semibold text-center text-gray-700 dark:text-white">Login to your account</h3>

                        <form onSubmit={handleSubmit(checkData)} className="mt-10 space-y-8 dark:text-white">
                            <div>
                                <div className="relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300" >
                                    <input onFocus={() => setFlag(false)} {...register("email", { required: true })} id="email" type="email" placeholder="Insert your email" autoComplete="username" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
                                    <input onFocus={() => setFlag(false)} id="password" autoComplete="current-password" {...register("password", { required: true })} type={showPassword ? "text" : "password"} placeholder="Insert your password" className="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition" />
                                </div>
                                <button className="w-6 dark" onClick={togglePasswordVisibility} type="button"><img src={showPassword ? eyeOff : eye} alt="" /></button>
                                <button onClick={sendEmail} type="button" className="-mr-3 w-max p-3">
                                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">Forgot password ?</span>
                                </button>
                            </div>

                            <div>
                                {flag && <h3 className="text-base font-normal text-center text-red-500 dark:text-white">{ad}</h3>}
                                <button
                                    className="w-full mt-7 rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
                                >
                                    <span className="text-base font-semibold text-white dark:text-gray-900">Login</span>
                                </button>
                                <button onClick={() => navigate("/registration")} type="reset" className="-ml-3 w-max p-3">
                                    <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">Create new account</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}