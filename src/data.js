import JsIcon from "./images/js.png"
import firebaseIcon from "./images/firebase.png"
import prismaIcon from "./images/prisma-orm.png"
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
import  VectorPayImg from "./images/vector-pay.jpeg"
import  VectorPayV2Img from "./images/vectorPayv2Img.jpeg"


export const project= [

    {
        name: "VectorPay V2",
        url: VectorPayV2Img,
        techUsed: ["Next.js", "Prisma", "MongoDB", "Firebase", "Speakeasy", "Korapay", "Tailwindcss", "DaisyUI"],
        githubRepo: "https://github.com/Emmynu/Vector-pay-v2",
        demoURL: "https://next-tuts-jet.vercel.app/",
        description: "Vector Pay is a full-stack FinTech wallet application developed as an all-in-one payment solution. Built on the Next.js framework, with MongoDB and Prisma for scalable data management, the application prioritizes security and seamless UX. Security is enforced through Firebase Auth and mandatory TOTP 2FA implemented using Speakeasy. Core features include deposits via Korapay API integration, inter-app transfers using unique generated accounts, secure bank withdrawals, and a custom transaction PIN system, all presented with a clean Tailwind/DaisyUI interface."
    }
 
    ,
    {
        name: "VectorPay",
        url: VectorPayImg,
        techUsed: ["HTML", "CSS", "JavaScript", "Firebase", "Toastify"],
        githubRepo: "https://github.com/Emmynu/Niit-Project",
        demoURL: "https://niit-project.vercel.app/",
        description: "VectorPay is a web application designed to replicate the core functionalities of mobile money platforms like OPay. Developed as a final project for my NIIT (National Institute of Information Technology) program, VectorPay provides users with a convenient way to manage their finances, including deposits, transfers, and withdrawals."
    },
 
    {
        name: "Bearcart",
        url:BearCartImg,
        techUsed: ["ReactJs", "Tailwindcss", "Firebase", "sonner","Paystack ", "react-router-dom", "aos", "moment"],
        githubRepo: "https://github.com/Emmynu/store-project-gamma/tree/main",
        demoURL: "https://store-project-gamma.vercel.app/",
        description: "BearCart is an e-commerce application built React, Firebase, Paystack and other react libraries. The main goal of this application is to provide a secure and seamless purchasing experience while addressing the issue of scams.it acts as an intermediary between the buyer and the seller, connnecting them together for a trustworthy transaction."
    },
    
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
                url: prismaIcon,
                name: "Prisma ORM"
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

