import React from "react";
import Group from "./Group";

export default function Content() {
    return (
        <div className="ml-auto mb-6 min-h-[86vh] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className="px-6 pt-6 2xl:container flex flex-wrap justify-end gap-3">
                <Group title={"your title is zero"} className="w-[33.333%]" />
                <Group title={"your title is zero"} className="w-[33.333%]" />
                <Group title={"your title is zero"} className="w-[33.333%]" />
                <Group title={"your title is zero"} className="w-[33.333%]" />
                <Group title={"your title is zero"} className="w-[33.333%]" />
                <Group title={"your title is zero"} className="w-[33.333%]" />
                <Group title={"your title is zero"} className="w-[33.333%]" />
               
            
            </div>
        </div>
    );
}
