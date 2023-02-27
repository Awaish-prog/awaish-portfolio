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
            <div>
                <img src = {github} alt="!!"/>
                <img src = {linkedIn} alt="!!"/>
                <img src = {twitter} alt="!!"/>
            </div>
            <div>
                <img src = {email} alt="!!"/>
                <img src = {mobile} alt="!!"/>
            </div>
        </section>
    )
}