import portfolioIcon  from "../images/portfolio-icon.png"
import { Link } from "react-router-dom"
import ".././styles/side-bar.css"
import CancelIcon from "../images/cancel.png"

 export default function SideBar({ isNavOpen, toggleNav }) {
    
    
    return (
    <aside className={isNavOpen ? "side-bar-container open-nav": "close-nav side-bar-container"} onClick={toggleNav}>
        <section className="logo">
            <div>
                <img src={portfolioIcon} alt="portfolio-icon" />
                <h2>Port<span className="text-[#0FA122]">Folio</span></h2>
            </div>
            <div><img src={CancelIcon} alt="cancel-icon" /></div>
        </section>
        <section >
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </section>
    </aside>
    )
 }