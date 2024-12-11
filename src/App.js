import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import NavigationBar from "./components/navigation-bar";
import Main from "./components/main";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<NavigationBar />}>
    <Route  index element={<Main />} />
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