import { project } from "../data"
import "../styles/project.css"


export default function Project() {
    return <main className="project-container">
        <section>
            <h3>Web Creations</h3>
        </section>
        <section>
            {project.map(item=>{
                return <article>
                    <div>
                        <img src={item?.url} alt="" className="w-[100px] h-[100px] object-cover"/>
                    </div>
                </article>
            })}
        </section>
    </main>
}