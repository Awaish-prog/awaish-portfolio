import "../CSS/Projects.css"
import github from "../Images/Github.png"
import demo from "../Images/demo.png"

export default function Project({project}){
    return (
    <div className="project">
        {/* <span><img src={project.image} width="50px" /></span> */}
        <p className="project-name">{project.name}</p>
        <p className="project-des">{project.des}</p>
        <h3>Technologies used</h3>
        <div className="techs">
            {
                project.techs.map((tech, index) => {
                    return <span key={index}>{tech}</span>
                })
            }
        </div>
        <h3>Links</h3>
        <div className="links">
            <a href = {project.github} target = "_blank"><img src = {github} width="50px"/></a>
            <a href = {project.live} target = "_blank"><img className="demo" src = {demo} width="50px"/></a>
        </div>
        
    </div>)
}