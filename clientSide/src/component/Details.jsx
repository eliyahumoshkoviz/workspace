import React from 'react'
import ListItem from './ListItem'
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import Members from './Members';



function Details() {
    return (
        <div className="ml-auto mb-6 min-h-[86vh] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className="px-6 pt-6 2xl:container flex flex-wrap justify-end gap-3">
                <ListItem
                    title="Number of Members"
                    count={3}
                    items={[<Members />, <Members />, <Members />]}
                    icon={<AiOutlineUsergroupDelete />}
                />
                <ListItem
                    title="Number of Groups"
                    count={5}
                    items={["File 1", "File 2", "File 3", "File 4", "File 5"]}
                    icon={<GrGroup />
                }

               />
                <ListItem
                    title="Number of Tasks"
                    count={10}
                    items={[
                        "Task 1",
                        "Task 2",
                        "Task 3",
                        "Task 4",
                        "Task 5",
                        "Task 6",
                        "Task 7",
                        "Task 8",
                        "Task 9",
                        "Task 10"
                    ]}
                    icon={<BsListTask />}

                />
            </div>
        </div>





    )
}

export default Details
