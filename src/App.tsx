

import './App.css'
import Sidebar from './components/Sidebar'
import CreateCourse from './pages/CreateCourse';
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Query from './pages/Query';
import ScheduledClass from './pages/ScheduledClass';
import Setting from './pages/Setting';
import ContentCourse from './pages/ContentCourse';
import NotificationBox from './components/NotificationBox';
import AttachFileModal from './components/AttachBanner';
import NotificationBoxModal from './components/NotificationBox';
import TestSeries from './pages/TestSeries';
import Form from './components/Form';
import AddTest from './pages/AddTest';
import TestForm from './components/TestForm';
import ToogleSwitch from './components/ToogleSwitch';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Courses from './pages/Courses';

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
        },
        {
          path:"/contentcourse",
          element:<ContentCourse/>
        },
        {
          path:"/testseries",
          element:<TestSeries/>
        },
        {
          path:"/addTest",
          element:<AddTest/>
        },
        {
          path:"/testform",
          element:<TestForm/>
        },
        {
          path:"/createTest",
          element:<AddTest/>
        },
        {
          path:"/course",
          element:<Courses/>
        }
      ]
    },
    {
      path:"/notification",
      element:<NotificationBoxModal/>
    },
    {
      path:"/form",
      element:<ToogleSwitch/>
    }
  ])

  return (
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={appRouter}/>
    </DndProvider>
  )
}

export default App
