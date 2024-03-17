import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Login from "./pages/Login";
import Registration from "./pages/registration";
import Layout from "./component/Layout";
import DataContext from "./context/DataContext";

export default function App() {
  const navigate = useNavigate();

  const [details, setDetails] = useState({});
  const [email, setEmail] = useState('');

  const [arrayMembers, setArrayMembers] = useState([]);
  const [arrayGroups, setArrayGroups] = useState([]);
  const [arrayTasks, setArrayTasks] = useState([]);

  const checkToken = () => {
    const token = localStorage.getItem("userWorkspace");
    !token && navigate('/');
    return `Bearer ${token.replace(/"/g, '')}`;
  }

  const getMembers = async () => {
    try {
      const auth = checkToken();
      const { data } = await axios.get("http://localhost:8000/user/members", {
        headers: {
          "Authorization": auth
        }
      });
      setArrayMembers(data.MembersUser);
      data.message === "jwt expired" && navigate('/');

    } catch (error) {
      console.log(error);
    }
  }

  const getGroups = async () => {
    try {
      const auth = checkToken();
      const { data } = await axios.get("http://localhost:8000/user/groups", {
        headers: {
          "Authorization": auth
        }
      });
      data.GroupsUser && setArrayGroups(data.GroupsUser);
      data.message === "jwt expired" && navigate('/');
      getTasks(data.GroupsUser);

    } catch (error) {
      console.log(error);
    }
  }

  const getTasks = (arr) => {
    let allTasks = arr?.map(group => group.tasks).flat();
    allTasks = allTasks?.filter(item => item.assignedTo.email === email);
    setArrayTasks(allTasks);
  }

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    storedEmail && setEmail(storedEmail);
    getMembers();
    getGroups();
  }, [])


  useEffect(() => {
    if (details.email) {
      localStorage.setItem('email', details.email);
      setEmail(details.email);
    }
  }, [details]);

  useEffect(() => {
    getTasks(arrayGroups, email);
  }, [arrayGroups, email]);

  return (
    <DataContext.Provider value={{ arrayTasks, arrayMembers, arrayGroups }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login details={details} setDetails={setDetails} />} />
          <Route path="registration" element={<Registration setDetails={setDetails} />} />
          <Route path="home/*" element={<Layout />} />
        </Routes>
      </div>
    </DataContext.Provider>
  )
}
