import JsIcon from "./images/js.png"
import firebaseIcon from "./images/firebase.png"
import TypescriptIcon from "./images/typescript.png"
import HtmlIcon from "./images/html.png"
import TailwindcssIcon from "./images/tailwindcss.png"
import NextJs from "./images/nextjs.png"
import Redux from "./images/redux.png"
import ReactIcon from "./images/react.png"
import MongoDBIcon from "./images/mongodb.png"
import Github from "./images/github.png"
import Sass from "./images/sass.png"
import Git from "./images/git.png"
import  Backend from "./images/backend.png"
import  Frontend from "./images/frontend.png"
import  LanguageIcon from "./images/language.png"
import  VersionControlIcon from "./images/version-control.png"
import  BearCartImg from "./images/bearcart-img.jpeg"


export const project= [
    {
        name: "BearCart",
        url:BearCartImg,
        techUsed: ["ReactJs", "Tailwindcss", "Firebase", "sonner","Paystack ", "react-router-dom", "aos", "moment"],
        githubRepo: "https://github.com/Emmynu/store-project-gamma/tree/main",
        demoURL: "https://store-project-gamma.vercel.app/",
        description: "BearCart is an e-commerce application built React(v18),Firebase,Paystack and other react libraries. The main goal of this application is to provide a secure and seamless purchasing experience while addressing the issue of scams.it acts as an intermediary between the buyer and the seller, connnecting them together for a trustworthy transaction."
    }
]

export const techSkills = [
    {
        category: "Language",
        categoryIcon: LanguageIcon,
        skills: [
            {
                url: JsIcon,
                name: "JavaScript"
            },
            {
                url: TypescriptIcon,
                name: "Typescript"
            },
        ]
    },
    {
        category: "Frontend Development",
        categoryIcon: Frontend,
        skills: [
            {
                url: ReactIcon,
                name: "React"
            },
            {
                url: Sass,
                name: "Scss"
            },
            {
                url: NextJs,
                name: "NextJs"
            },
            {
                url: HtmlIcon,
                name: "HTML&CSS"
            },
            {
                url: TailwindcssIcon,
                name: "Tailwindcss"
            },
            {
                url: Redux,
                name: "Redux"
            },
        ]
    },
    {
        category: "Backend Development",
        categoryIcon: Backend,
        skills: [
            {
                url: MongoDBIcon,
                name: "MongoDB"
            },
            {
                url: firebaseIcon,
                name: "Firebase"
            },
        ]
    },
    {
        category: "Tools",
        categoryIcon: VersionControlIcon,
        skills: [
            {
                url: Git,
                name: "Git"
            },
            {
                url: Github,
                name: "Github"
            },
        ]
    },
]

