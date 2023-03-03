import Project from "./Project"
import "../CSS/Projects.css"
import classroom from "../Images/Classroom.png"
import socialConn from "../Images/SocialConn.png"
import knight from "../Images/Knight.png"
import books from "../Images/Book.png"

export default function Projects(){
    const projects = [
        {
            name: "Classroom App",
            des: "Built a Classroom App which allows Teachers and Students to collaborate, make announcements, share assignments, submissions and make chat rooms.",
            github: "https://github.com/Awaish-prog/classRoomApp",
            live: "http://44.205.20.25:4000/",
            image: classroom,
            techs: ["React js", "Node js", "MongoDB", "Express js"],
            id: 1,
        },
        {
            name: "Social-connections App",
            des: "Built a Social-connections App which allows users to create people, connections between them and find degree of separation",
            github: "https://github.com/Awaish-prog/Social-Connections",
            live: "https://social-connections.onrender.com/",
            image: socialConn,
            techs: ["React js", "Node js", "MongoDB", "Express js", "TypeScript"],
            id: 2,
        },
        {
            name: "Knight position App",
            des: "Built a Knight position App which gives a knight on a chessboard. We can find all valid positions where the knight can go.",
            github: "https://github.com/Awaish-prog/knight-position",
            live: "https://knight-position.onrender.com/",
            image: knight,
            techs: ["React js", "TypeScript"],
            id: 3,
        },
        {
            name: "Book Matching App",
            des: "Built a Book Matching App which allows users to compare their choices regarding books and genres with other users through a graph",
            github: "https://github.com/Awaish-prog/Book-Matching-Web-App",
            live: "http://44.205.20.25:4001/",
            image: books,
            techs: ["React js", "Node js", "MongoDB", "Express js"],
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