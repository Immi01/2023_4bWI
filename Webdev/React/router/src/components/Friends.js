import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function  People() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state);
    return <div>
        <h1 className="text-xl font-bold">Friends</h1>
        <div onClick={() => {navigate("/");}}>go to People</div>
    </div>
}
