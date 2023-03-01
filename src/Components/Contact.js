import "../CSS/Contact.css"
import github from "../Images/Github.png"
import twitter from "../Images/Twitter.png"
import linkedIn from "../Images/LinkedIn.png"
import email from "../Images/Email.png"
import mobile from "../Images/Mobile.png"


export default function Contact(){
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <div className="socials">
                <a href="https://github.com/Awaish-prog" target="_blank"><img src = {github} width="40px" alt="!!"/></a>
                <a href="https://www.linkedin.com/in/awaishkhan17/" target="_blank"><img src = {linkedIn} width="40px" alt="!!"/></a>
                <a href="https://twitter.com/Awaish_Khan17" target="_blank"><img src = {twitter} width="40px" alt="!!"/></a>
            </div>
            <div className="mailNumber">
                <div>
                    <img src = {email} width="40px" alt="!!"/>
                    <p className="email">awaishk640@gmail.com</p>
                </div>
                
                <div>
                    <img src = {mobile} width="40px" alt="!!"/>
                    <p>+919657996887</p>
                </div>
            </div>
        </section>
    )
}