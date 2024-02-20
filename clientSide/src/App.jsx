import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Registration from "./pages/registration"

export default function App() {


  return (

    <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="registration" element={<Registration />} />
        </Routes>
    </div>


                                      
  )
}