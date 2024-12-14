import AOS from "aos"
import "aos/dist/aos.css"
import "../styles/about.css"
import { useEffect } from "react"


export default function About() {

    useEffect(()=>{
        AOS.init()
    },[])
    return <main className="about-container" id="about">
            <section data-aos={"zoom-in-down"} data-aos-duration={600}>
                <img src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/about-03f57d6e.svg" alt="about-me" />
            </section>
            <section>
                <header>
                    <h2 data-aos={"zoom-in-up"} data-aos-duration={600}>About Me</h2>
                    <p data-aos={"fade-up"} data-aos-duration={650}>Passionate Frontend Developer with expertise in React, Next.js, MongoDB,Tailwind CSS, Typescript and alot more. Adept at translating design concepts into responsive and visually appealing web applications. Proven track record of actively contributing to multiple projects, showcasing strong problem-solving skills. Eager to leverage my skills and drive for excellence in a dynamic professional environment. </p>
                </header>
            </section>
        </main>
}