import React, { useEffect, useState } from "react";
import Group from "./Group";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Content() {

    const navigate = useNavigate();

    const [arreyGroups, setArreyGroups] = useState([]);

    const getGroups = async () => {
        const token = localStorage.getItem("userWorkspace");
        !token && (navigate('/'))
        const auth = `Bearer ${token.replace(/"/g, '')}`

        await axios
            .get("http://localhost:8000/user/groups", {
                headers: {
                    "Authorization": auth
                }
            })
            .then(({ data }) => {
                setArreyGroups(data.GroupsUser);
                data.message === "jwt expired" && (navigate('/'))

            })
            .catch((arr) => { console.log(arr); });
    }



    useEffect(() => {
        getGroups()
    }, [])
    return (
        <div className="ml-auto mb-6 min-h-[86vh] lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className="px-6 pt-6 2xl:container flex flex-wrap justify-end gap-3">
                {arreyGroups && arreyGroups.map((group, index) => <Group key={index} name={group.name} description={group.description} managers={group.managers[0].name} className="w-[33.333%]" />)}


            </div>
        </div>
    );
}


