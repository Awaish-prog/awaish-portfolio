import Technology from "./Technology"
import CPlusPlusLogo from "../Images/C++Logo.png"
import CLogo from "../Images/CLogo.png"
import css from "../Images/cssLogo.png"
import html from "../Images/htmlLogo.png"
import java from "../Images/javaLogo.png"
import javascript from "../Images/javascriptLogo.png"
import mongoDB from "../Images/mongoDBLogo.png"
import nodejs from "../Images/nodejsLogo.png"
import python from "../Images/pythonLogo.png"
import react from "../Images/react.png"
import typescript from "../Images/typescriptLogo.png"
import express from "../Images/expressLogo.png"
import "../CSS/Technologies.css"
import Divider from "./Divider"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Technologies(){


    const technologies = [
        {
            image: react,
            name: "React js",
            width: "150px",
            delay: 0,
            id: 1,
        },
        {
            image: nodejs,
            name: "Node js",
            width: "150px",
            delay: 50,
            id: 2,
        },
        {
            image: mongoDB,
            name: "MongoDB",
            width: "150px",
            delay: 100,
            id: 3,
        },
        {
            image: express,
            name: "Express js",
            width: "150px",
            delay: 150,
            id: 4,
        },
        {
            image: html,
            name: "HTML",
            width: "150px",
            delay: 200,
            id: 5,
        },
        {
            image: css,
            name: "CSS",
            width: "150px",
            delay: 250,
            id: 6,
        },
        {
            image: javascript,
            name: "Javascript",
            width: "150px",
            delay: 300,
            id: 7,
        },
        {
            image: typescript,
            name: "Typescript",
            width: "150px",
            delay: 350,
            id: 8,
        },
        {
            image: python,
            name: "Python",
            width: "150px",
            delay: 400,
            id: 9,
        },
        {
            image: java,
            name: "Java",
            width: "150px",
            delay: 450,
            id: 10,
        },
        {
            image: CLogo,
            name: "C",
            width: "150px",
            delay: 500,
            id: 11,
        },
        {
            image: CPlusPlusLogo,
            name: "C++",
            width: "150px",
            delay: 550,
            id: 12,
        }
    ]

    
    
    return (
        <section id="skills" className="technologies">
            <Divider />
            
            <h2>Skills</h2>
            <div className="technologies-container">
                {
                technologies.map((technology) => {
                        return (
                            <AnimationOnScroll animateIn="animate__bounceIn" delay={technology.delay}>
                                <Technology technology={technology} key={technology.id} />
                            </AnimationOnScroll>
                        )
                    })
                }
            </div>
        </section>
    )
}