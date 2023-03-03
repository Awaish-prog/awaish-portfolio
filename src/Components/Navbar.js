import "../CSS/Navbar.css"

export default function Navbar(){
    return(
        <header>
            <h2>Portfolio</h2>
            <div className="nav-elements">
                <p className="nav-element"><a>Projects</a></p>
                <p className="nav-element"><a>Technologies</a></p>
                <p className="nav-element"><a>Contact</a></p>
            </div>
        </header>
    )
}