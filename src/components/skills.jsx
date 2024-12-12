import "../styles/skill.css"
import { techSkills } from "../data"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"


export default function Skills() {
    const [isOpen, setIsOpen]=  useState(null)

    useEffect(()=>{
        AOS.init()
    },[])

    function handleDropDown(category) {
        setIsOpen(category === isOpen ? null : category)
    }


    return <main className="skills-container">
        <section data-aos={"fade-up"} data-aos-duration={"600"}>
            <h3>Tech Stack</h3>
            <article className="stack-container">
                {techSkills.map(skill=>{
                    const { skills, category } = skill
                    return <>
                        <div onClick={()=>handleDropDown(category)}>
                            <h3 >{category}</h3>
                            {(isOpen === category) && <section>{skills?.map(stack=>{
                                return  <article className="mb-4">
                                <img src={stack?.url} alt="stack-url" />
                                <h2>{stack?.name}</h2>
                            </article>
                            })}</section>}
                        </div>
                    </>
                })}
            </article>
        </section>
    </main>
}