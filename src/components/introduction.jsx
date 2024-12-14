import "../styles/introduction.css"
import GithubIcon from "../images/github-icon.png";
import LinkedInIcon from "../images/linkedin-icon.png";
import { Link } from "react-router-dom";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


export default function Introduction() {
    
    useEffect(()=>{
        AOS.init()
    },[])

    return <main className="intro-container" id="home">
        <section> 
           <h2 data-aos={"fade-left"} data-aos-duration={"1000"}>Hi, I'm Emmanuel</h2>
            <h4 data-aos={"fade-up-right"} data-aos-duration={"1150"}>Frontend Developer</h4>
            <h6 data-aos={"fade-down-right"} data-aos-duration={"1200"}>Passion for crafting elegant web applications</h6>
            <section data-aos={"zoom-in"} data-aos-duration={"1300"}>
               <Link to={"https://github.com/Emmynu"}><img src={GithubIcon} alt="github-icon" /></Link>
               <Link to={"https://www.linkedin.com/in/similoluwa-emmanuel-082873260"}><img src={LinkedInIcon} alt="linkedin-icon" className="ml-2" /> </Link>
            </section>
        </section>
        <section data-aos={"zoom-in-down"} data-aos-duration={"1000"}>
            <img src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/hero-01dff752.svg" alt="introduction-img" />
        </section> 
        
    </main>
}