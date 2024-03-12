import React, { useEffect, useState, useContext } from 'react'
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataContext from "../context/DataContext";


import Members from './Members';
import ListItem from './ListItem'
import Task from './Task';




function Details() {

    const [arrayMembers, setArrayMembers] = useState([])
    const [arrayGroups, setArrayGroups] = useState([]);
    const [arrayTasks, setArrayTasks] = useState([]);

    const email = useContext(DataContext);

    const navigate = useNavigate();

    const getMembers = async () => {
        try {
            const token = localStorage.getItem("userWorkspace");
            !token && (navigate('/'))
            const auth = `Bearer ${token.replace(/"/g, '')}`;
            const { data } = await axios.get("http://localhost:8000/user/members", {
                headers: {
                    "Authorization": auth
                }
            });
            setArrayMembers(data.MembersUser);
            data.message === "jwt expired" && (navigate('/'))

        } catch (error) {
            console.error(error);
        }
    }


    const getGroups = async () => {

        try {
            const token = localStorage.getItem("userWorkspace");
            !token && (navigate('/'))
            const auth = `Bearer ${token.replace(/"/g, '')}`;
            const { data } = await axios.get("http://localhost:8000/user/groups", {
                headers: {
                    "Authorization": auth
                }
            });
            data.GroupsUser && setArrayGroups(data.GroupsUser);
            data.message === "jwt expired" && (navigate('/'))
            getTasks(data.GroupsUser);

        } catch (error) {
            console.error(error);
        }
    }


    const getTasks = (arr) => {
        let allTasks = arr.map(group => group.tasks).flat();
        allTasks = allTasks.filter(item => item.assignedTo.email === email);
        setArrayTasks(allTasks);
    }


    useEffect(() => {
        getMembers();
        getGroups();
    }, [])

    const members = arrayMembers && arrayMembers.map(member => member.user);

    return (

        <div className="ml-auto mb-6 min-h-[86vh] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className="flex flex-wrap justify-end gap-3 px-6 pt-6 2xl:container">
                <ListItem
                    title="Number of Members"
                    count={arrayMembers.length}
                    items={members.map(member => (
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
                    count={arrayGroups.length}
                    items={arrayGroups.map(group => group.name)}
                    icon={<GrGroup />
                    }

                />
                <ListItem
                    title="Number of Tasks"
                    count={arrayTasks.length}
                    items={arrayTasks.map(task =>
                        <Task
                            key={task._id}
                            title={task.title}
                            description={task.description}
                            assignedTo={task.assignedTo.name}
                            status={task.status}
                        />)}
                    icon={<BsListTask />}

                />
            </div>
        </div>





    )
}

export default Details
