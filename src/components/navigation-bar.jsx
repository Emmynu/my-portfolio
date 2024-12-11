import { Link, Outlet } from "react-router-dom";
import "../App.css"
import portfolioIcon  from "../images/portfolio-icon.png"
import {  useState } from "react";
import SideBar from "./side-bar";

export default function NavigationBar() {
    const [isFixed, setIsFixed] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)

    window.addEventListener("scroll", function(){
        const scroll = this.pageYOffset
        console.log(scroll);
        scroll > 80 ? setIsFixed(true) : setIsFixed(false)
    })

    return <main>
        <nav className={!isFixed ? "nav" : "nav nav-fixed"}>
            <section className="logo">
                <img src={portfolioIcon} alt="portfolio-icon" />
                <h2>Port<span className="text-[#0FA122]">Folio</span></h2>
            </section>
            <section >
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Skills</Link>
                <Link>Projects</Link>
                <Link>Contact</Link>
            </section>
            <section onClick={()=>setIsNavOpen(!isNavOpen)}>
                <div className="hamburger-menu"></div>
                <div className="hamburger-menu"></div>
                <div className="hamburger-menu"></div>
            </section>
        </nav>
      { isNavOpen && <SideBar />}
    <Outlet />
    </main>
}