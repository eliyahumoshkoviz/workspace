import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Registration from "./pages/registration"
import Layout from "./component/Layout";

export default function App() {
  const [details, setDetails] = useState({}); 

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Login details={details}/>} />
        <Route path="registration" element={<Registration setDetails={setDetails}/>} />
        <Route path="home/*" element={<Layout/>} />
      </Routes>
    </div>



  )
}