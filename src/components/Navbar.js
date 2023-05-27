import React from "react";
import Time from "./Time";

export default function Navbar() {
    return (
        <nav className="navbar-bar">
            <h1 className="navbar-title">Quiz</h1>
            <Time />
        </nav>
    )   
}