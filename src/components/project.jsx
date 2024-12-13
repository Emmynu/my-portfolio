import { Link } from "react-router-dom"
import { project } from "../data"
import "../styles/project.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


export default function Project() {

    useEffect(()=>{
        AOS.init()
    },[])

    return <main className="project-container">
        <section>
            <h3 data-aos={"zoom-in"} data-aos-duration={"800"}>Web Creations</h3>
        </section>
        <section data-aos={"fade-up"} data-aos-duration={"800"}>
            {project.map(item=>{
                return <>
                <article className="project">
                    <section className="relative">
                        <img src={item?.url} alt=""/>
                        <div className="tech-used-container">
                            <h2 >{item.name}</h2>
                            <div className="tech-used-list">
                                <h4 className="flex items-center flex-wrap mt-3 ">{item.techUsed.map(tech=>{
                                        return <span className="text-white  bg-black text-xs md:text-sm tracking-wider mb-2 ml-2 py-2 rounded-[5px] px-2">{tech}</span>
                                    })}</h4>
                            </div>
                        </div>
                    </section>
                    <section >
                        <h4>{item?.description}</h4>
                    </section>

                    <footer>
                        <Link to={`${item?.demoURL}`}><button>Demo</button></Link>
                        <Link to={`${item?.githubRepo}`}>GitHub</Link>
                        
                    </footer>

                    
                </article>

              
                </>
            })}
        </section>
    </main>
}