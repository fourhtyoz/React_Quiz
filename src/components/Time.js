import React, { useState, useEffect } from "react";

export default function Time() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])
    
const time = `${date.getHours()}:${date.getMinutes()}`

    return (
        <div className="navbar-time">
            {time}
        </div>
    )
}