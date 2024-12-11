import { Link } from "react-router-dom"
import "../styles/about.css"


export default function About() {
    return <main className="about-container">
            <section>
                <img src="https://react-vite-proj-18-tailwind-portfolio.netlify.app/assets/about-03f57d6e.svg" alt="about-me" />
            </section>
            <section>
                <header>
                    <h2>About Me</h2>
                    <div className="line"></div>
                    <p className="">Passionate Frontend Developer with expertise in React, Next.js, MongoDB,Tailwind CSS, Typescript and alot more. Adept at translating design concepts into responsive and visually appealing web applications. Proven track record of actively contributing to multiple projects, showcasing strong problem-solving skills. Eager to leverage my skills and drive for excellence in a dynamic professional environment. </p>
                </header>
            </section>
        </main>
}