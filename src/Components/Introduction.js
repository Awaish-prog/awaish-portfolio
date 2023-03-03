import "../CSS/Introduction.css"
import {useEffect, useState} from "react"

export default function Introduction(){
    const [role, setRole] = useState("Full-stack Web Developer")

    function changeRole(){
        setRole((prev) => {
            return prev === "Full-stack Web Developer" ? "Coding Instructor" : "Full-stack Web Developer"
        })
    }
    
    return (
        <section className="introduction">
            <div className="intro-title">
                <h1>I'm Awaish Khan</h1>
                {<span className="roleContainer"><h3 className="role" onAnimationIteration={changeRole}>{role}</h3></span>}
            </div>
        </section>
    )
}