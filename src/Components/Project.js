import "../CSS/Projects.css"

export default function Project({project}){
    return (
    <div className="project">
        <img src={project.image} width="50px" />
        <p>{project.name}</p>
        <p>{project.des}</p>
    </div>)
}