import React from "react";
import Task from "./Task";

export default function Layout() {

    return (
        
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] overflow-y-auto">
    <div className="px-6 pt-6 2xl:container">
        <div className="flex flex-wrap justify-end gap-3 py-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
            <Task className="w-[33.333%]" />
            <Task className="w-[33.333%]" />
            <Task className="w-[33.333%]" />
            <Task className="w-[33.333%]" />
            <Task className="w-[33.333%]" />
            <Task className="w-[33.333%]" />
            <Task className="w-[33.333%]" />
            <Task className="w-[33.333%]" />
        </div>
    </div>
</div>


    );
}
