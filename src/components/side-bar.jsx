import portfolioIcon  from "../images/portfolio-icon.png"
import { Link } from "react-router-dom"
import ".././styles/side-bar.css"

 
 
 export default function SideBar() {
    return (
    <aside className="side-bar-container">
        <section className="logo">
            <img src={portfolioIcon} alt="portfolio-icon" />
            <h2>Port<span className="text-[#0FA122]">Folio</span></h2>
        </section>
        <section>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Skills</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
        </section>
    </aside>
    )
 }