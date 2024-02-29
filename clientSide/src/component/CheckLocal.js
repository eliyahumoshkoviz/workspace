import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const CheckLocal = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("userWorkspace");
        !token && (navigate('/'))
    }, [navigate]);

    return null; 
}

export default CheckLocal;
