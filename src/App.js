import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider,Link } from "react-router-dom";
import NavigationBar from "./components/navigation-bar";
import Introduction from "./components/introduction";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<NavigationBar />}>
    <Route  index element={<Introduction />} />
  </Route>
))

export default function App() {
  useEffect(()=>{
    AOS.init()
  },[])
    return <>
    <title>My Portfolio</title>
    <RouterProvider router={router}></RouterProvider>
    </>
}