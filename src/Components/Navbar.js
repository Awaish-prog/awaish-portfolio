import "../CSS/Navbar.css"
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar(){
    const [open, setOpen] = useState(false)
    return(
        <header>
            <h2>Portfolio</h2>
            <div className="nav-elements">
                <p className="nav-element"><a>Projects</a></p>
                <p className="nav-element"><a>Skills</a></p>
                <p className="nav-element"><a>Contact</a></p>
            </div>
            <div className="menu" onClick={() => setOpen(true)}>
                <MenuIcon />
            </div>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} >
                <div className="nav-mobile">
                    <span className="close-button"><CloseIcon onClick={() => setOpen(false)} /></span>
                    <div className="nav-elements-mobile">
                        <p className="nav-element-mobile"><a>Projects</a></p>
                        <p className="nav-element-mobile"><a>Skills</a></p>
                        <p className="nav-element-mobile"><a>Contact</a></p>
                    </div>
                </div>
            </Drawer>
        </header>
    )
}