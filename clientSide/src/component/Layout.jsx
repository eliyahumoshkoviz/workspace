import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Content from "./Content";
import Nav from "./Nav";
import Logout from "./Logout";
import Head from "./Head";
import CheckLocal from "./CheckLocal";


export default function Layout() {

    return (
        <div className="bg-gray-100 ">
            <CheckLocal />
            <Head />
            <aside id='nav'
                className="fixed top-0  ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <Nav />
                <Logout />
            </aside>
            <div>
                <Content /></div>
        </div>
    );
}
