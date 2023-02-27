import "../CSS/Projects.css"

export default function Project({project}){
    return (
    <div className="project">
        <p>{project.name}</p>
        <p>{project.des}</p>
    </div>)
}