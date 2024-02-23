import React from "react";
import { useNavigate } from "react-router-dom";

export default function  People() {
    const navigate = useNavigate();
    return <div>
        <h1>Friends</h1>
        <div onClick={() => {navigate("/");}}>go to People</div>
    </div>
}
