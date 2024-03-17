import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


import Login from "./pages/Login";
import Registration from "./pages/registration"
import Layout from "./component/Layout";
import DataContext from "./context/DataContext";


export default function App() {
  const [details, setDetails] = useState({});
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  
  const [arrayMembers, setArrayMembers] = useState([])
  const [arrayGroups, setArrayGroups] = useState([]);
  const [arrayTasks, setArrayTasks] = useState([]);



  useEffect(() => {
    if (details.email) {
      localStorage.setItem('email', details.email);
      setEmail(details.email);
    }
  }, [details]);

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
        console.log(error);
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
        console.log(error);
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

  return (

    <DataContext.Provider value={{ arrayTasks, arrayMembers, arrayGroups }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login details={details} setDetails={setDetails} />} />
          <Route path="registration" element={<Registration setDetails={setDetails} />} />
          <Route path="home/*" element={<Layout />} />
        </Routes>
      </div>
    </DataContext.Provider >




  )
}