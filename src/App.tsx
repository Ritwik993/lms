

import './App.css'
import Sidebar from './components/Sidebar'
import CreateCourse from './pages/CreateCourse';
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Query from './pages/Query';
import ScheduledClass from './pages/ScheduledClass';
import Setting from './pages/Setting';

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
        },
        {
          path:"/query",
          element:<Query/>
        },
        {
          path:"/scheduleClass",
          element:<ScheduledClass/>
        },
        {
          path:"/setting",
          element:<Setting/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App
