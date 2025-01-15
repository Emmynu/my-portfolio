import portfolioIcon  from "../images/portfolio-icon.png"
import { Link } from "react-router-dom"
import ".././styles/side-bar.css"
import CancelIcon from "../images/cancel.png"
import homeIcon from "../images/home.png"
import projectIcon from "../images/projects.png"
import contactIcon from "../images/contact-icon.png"
import skillsIcon from "../images/skills.png"
import aboutIcon from "../images/about.png"

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
                <div >
                    <img src={homeIcon} alt="home-icon" />
                    <a href="#home">Home</a>
                </div>
                <div>
                    <img src={aboutIcon} alt="about-icon" />
                    <a href="#about">About</a>
                </div>
                <div>
                    <img src={skillsIcon} alt="skills-icon" />
                    <a href="#skills">Skills</a>
                </div>
                
                <div>
                    <img src={projectIcon} alt="projects-icon" />
                    <a href="#projects">Projects</a>
                </div>
                <div>
                    <img src={contactIcon} alt="contact-icon" />
                    <a href="#contact">Contact</a>
                </div>
                
            </section>
    </aside>
    )
 }