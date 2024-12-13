import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Introduction from "./introduction";
import Project from "./project";
import Skills from "./skills";

export default function Main() {
    return <>
        <Introduction />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
    </>
}