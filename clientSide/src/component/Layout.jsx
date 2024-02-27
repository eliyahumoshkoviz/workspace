import React from "react";
import Content from "./Content";
import Nav from "./Nav";
import Logout from "./Logout";
import Head from "./Head";


export default function Layout() {

    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <Head />
            <aside
                className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
                <Nav />
                <Logout />
            </aside>
            <Content />
        </div>
    );
}
