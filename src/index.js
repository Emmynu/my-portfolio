import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"


const root = document.querySelector("#root")

createRoot(root).render(<><App /></>)