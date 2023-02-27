import Project from "./Project"
import "../CSS/Projects.css"

export default function Projects(){
    const projects = [
        {
            name: "Classroom App",
            des: "Built a Classroom App which allows Teachers and Students to collaborate, make announcements, share assignments, submissions and make chat rooms.",
            github: "",
            live: "",
            id: 1,
        },
        {
            name: "Social-connections App",
            des: "Built a Social-connections App which allows users to ",
            github: "",
            live: "",
            id: 2,
        },
        {
            name: "Knight position App",
            des: "Built a Knight position App",
            github: "",
            live: "",
            id: 3,
        },
        {
            name: "Book Matching App",
            des: "Built a Book Matching App",
            github: "",
            live: "",
            id: 4,
        }
    ]
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {
                    projects.map((project) => {
                        return <Project project={project} key={project.id} />
                    })
                }
            </div>
        </section>
    )
}