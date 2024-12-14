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
        scroll > 80 ? setIsFixed(true) : setIsFixed(false)
    })

    function toggleNav() {
        setIsNavOpen(!isNavOpen)
    }
    return <>
    <main>
        <nav className={!isFixed ? "nav" : "nav nav-fixed"}>
           <section className="logo">
            <a href="#home">    
                <img src={portfolioIcon} alt="portfolio-icon" />
                <h2>Port<span className="text-[#0FA122]">Folio</span></h2>
            </a>
           </section>
            <section >
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </section>
            <section onClick={toggleNav}>
                <div className="hamburger-menu"></div>
                <div className="hamburger-menu"></div>
                <div className="hamburger-menu"></div>
            </section>
        </nav>
    <Outlet />
    </main>
    <span className={"block md:hidden"}><SideBar isNavOpen={isNavOpen} toggleNav={toggleNav}/></span>
    </>
}