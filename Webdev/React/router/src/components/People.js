import React from "react";
import { Link } from "react-router-dom";

export default function  People() {
    return <div>
        <h1 className="text-xl font-KodeMono">People</h1>
        <Link to="friends" state={{name:"Hans", age:17}} className="underline hover:text-sky-600">Friends</Link>
    </div>
}
