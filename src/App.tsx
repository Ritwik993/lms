

import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CreateCourse from './pages/CreateCourse';
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {

  const AppLayout=()=>{
    return(<>
      {/* <Navbar/> */}
      <div className='max-w-[1600px] mx-auto flex '>
        <Sidebar/>
        <Outlet/>
    </div>
    </>)
  }

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/createCourse",
          element:<CreateCourse/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App
