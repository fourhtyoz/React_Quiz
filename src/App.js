import React from "react"
import Overlay from "./components/Overlay"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
    const [overlay, setOverlay] = React.useState(true)

    function start() {
        setOverlay(prev => !prev)
    }

    function end() {
        setOverlay(prev =>! prev)
    }


    return (
        <>
            {overlay && <Overlay start={start}/>}
            {!overlay && <Navbar />}
            {!overlay && <Main />}
            {!overlay && <Footer />}
        </>
    )
}