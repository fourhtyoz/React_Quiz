import React from "react";

export default function Overlay(props) {
    return (
        <div className="overlay">
            <h1 className="overlay-title">Welcome to the quiz!</h1>
            <button className="overlay-button" onClick={props.start}>Start</button>
        </div>
    )
}