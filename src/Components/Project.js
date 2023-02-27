import "../CSS/Projects.css"

export default function Project({project}){
    return (
    <div className="project">
        <span><img src={project.image} width="50px" /></span>
        <p className="project-name">{project.name}</p>
        <p className="project-des">{project.des}</p>
    </div>)
}