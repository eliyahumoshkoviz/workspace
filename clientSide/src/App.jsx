import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Registration from "./pages/registration"
import Layout from "./component/Layout";
import DataContext from "./context/DataContext";


export default function App() {
  const [details, setDetails] = useState({});

  const [email, setEmail] = useState(localStorage.getItem('email') || '');

  useEffect(() => {
    if (details.email) {
      localStorage.setItem('email', details.email);
      setEmail(details.email);
    }
  }, [details]);

  return (

    <DataContext.Provider value={email}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login details={details} setDetails={setDetails}/>} />
          <Route path="registration" element={<Registration setDetails={setDetails} />} />
          <Route path="home/*" element={<Layout />} />
        </Routes>
      </div>
    </DataContext.Provider >




  )
}