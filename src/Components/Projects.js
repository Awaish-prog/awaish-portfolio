import Project from "./Project"
import "../CSS/Projects.css"
import classroom from "../Images/Classroom.jfif"
import socialConn from "../Images/SocialConn.png"
import knight from "../Images/Knight.png"
import books from "../Images/Book.jfif"

export default function Projects(){
    const projects = [
        {
            name: "Classroom App",
            des: "Built a Classroom App which allows Teachers and Students to collaborate, make announcements, share assignments, submissions and make chat rooms.",
            github: "",
            live: "",
            image: classroom,
            id: 1,
        },
        {
            name: "Social-connections App",
            des: "Built a Social-connections App which allows users to ",
            github: "",
            live: "",
            image: socialConn,
            id: 2,
        },
        {
            name: "Knight position App",
            des: "Built a Knight position App",
            github: "",
            live: "",
            image: knight,
            id: 3,
        },
        {
            name: "Book Matching App",
            des: "Built a Book Matching App",
            github: "",
            live: "",
            image: books,
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