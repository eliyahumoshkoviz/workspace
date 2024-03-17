import React, { useContext } from 'react'
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import DataContext from "../context/DataContext";

import Members from './Members';
import ListItem from './ListItem'
import TasksPage from './TasksPage';


function Details() {

    const { arrayTasks, arrayMembers, arrayGroups } = useContext(DataContext);

    const members = arrayMembers && arrayMembers?.map(member => member.user);

    return (

        <div className="ml-auto mb-6 min-h-[86vh] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className="flex flex-wrap justify-end gap-3 px-6 pt-6 2xl:container">
                <ListItem
                    title="Number of Members"
                    count={arrayMembers?.length}
                    items={members?.map(member => (
                        <Members
                            key={member._id}
                            name={member.name}
                            email={member.email}
                        />
                    ))}
                    icon={<AiOutlineUsergroupDelete />}
                />
                <ListItem
                    title="Number of Groups"
                    count={arrayGroups?.length}
                    items={arrayGroups?.map(group => group.name)}
                    icon={<GrGroup />
                    }

                />
                <ListItem
                    title="Number of Tasks"
                    count={arrayTasks?.length}
                    items={<TasksPage arrayTasks={arrayTasks}/>}
                    icon={<BsListTask />}

                />
            </div>
        </div>





    )
}

export default Details
