import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import NavigationBar from "./components/navigation-bar";
import Main from "./components/main";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<NavigationBar />}>
    <Route  index element={<Main />} />
  </Route>
))

export default function App() {
    return <>
    <title>My Portfolio</title>
    <RouterProvider router={router}></RouterProvider>
    </>
}