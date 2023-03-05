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
            <a href="#project"><p className="nav-element">Projects</p></a>
            <a href="#skills"><p className="nav-element">Skills</p></a>
            <a href="#contact"><p className="nav-element">Contact</p></a>
            </div>
            <div className="menu" onClick={() => setOpen(true)}>
                <MenuIcon />
            </div>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} >
                <div className="nav-mobile">
                    <span className="close-button"><CloseIcon onClick={() => setOpen(false)} /></span>
                    <div className="nav-elements-mobile">
                        <p onClick={() => setOpen(false)} className="nav-element-mobile"><a href="#project">Projects</a></p>
                        <p onClick={() => setOpen(false)} className="nav-element-mobile"><a href="#skills">Skills</a></p>
                        <p onClick={() => setOpen(false)} className="nav-element-mobile"><a href="#contact">Contact</a></p>
                    </div>
                </div>
            </Drawer>
        </header>
    )
}