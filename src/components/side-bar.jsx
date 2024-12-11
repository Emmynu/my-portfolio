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
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Skills</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
        </section>
    </aside>
    )
 }