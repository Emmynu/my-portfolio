import AOS from "aos"
import "aos/dist/aos.css"
import "../styles/contact.css"
import { Link } from "react-router-dom"
import contactImg from "../images/contact.png"
import WhatsappIcon from "../images/whatsapp.png"
import { useEffect } from "react"

export default function Contact() {

    useEffect(()=>{
        AOS.init()
    },[])

    return <main className="contact-container" data-aos={"fade-up"} data-aos-duration={"700"}>
        <section>
            <h3>Get In Touch</h3>
        </section>
        <section className="">
            <div > 
                <img src={contactImg} alt="" />
            </div>
            <article>
                <ul>
                    <li className="flex items-center mb-5" >
                        <img className="w-[35px] h-[35px] mr-4" src="https://img.icons8.com/?size=100&id=ZwGNoFXGbt9n&format=png&color=000000" alt="" />
                        <div>
                            <h3 className="font-medium text-base md:text-lg tracking-wide">Mobile Number</h3>
                            <h4 className="mt-1 text-sm md:text-base tracking-wide">(+234) 814-923-6926</h4>
                        </div>
                    </li>

                    <li className="flex items-center mb-5">
                        <img className="w-[35px] h-[35px] mr-4" src="https://img.icons8.com/?size=100&id=baRhMh2wmjbT&format=png&color=000000" alt="" />
                        <div>
                            <h3 className="font-medium text-base md:text-lg tracking-wide">Email Address</h3>
                            <h4 className="mt-1 text-sm md:text-base tracking-wide">oketunbi.olufunke@gmail.com</h4>
                        </div>
                    </li>

                    <li className="flex items-center mb-5">
                        <img className="w-[35px] h-[35px] mr-4" src="https://img.icons8.com/?size=100&id=c0kUjxdWTRsk&format=png&color=000000" alt="" />
                        <div>
                            <h3 className="font-medium text-base md:text-lg tracking-wide">Location</h3>
                            <h4 className="mt-1 text-sm md:text-base tracking-wide">Ipaja, Lagos State, Nigeria</h4>
                        </div>
                    </li>
                    <Link to={"https://wa.me/+2348149236926"}>
                        <li className="mt-6 bg-black px-5 py-2 rounded-[5px] flex items-center w-fit">
                            <img src={WhatsappIcon} alt="" className="w-[27px] h-[27px] mr-2" />
                            <button className=" text-white  tracking-wider font-medium text-sm">Whatsapp</button>
                        </li>
                    </Link>
                </ul>
            </article>
           
        </section>
    </main>
} 