import "./App.css";
import Sidebar from "./components/Sidebar";
import CreateCourse from "./pages/CreateCourse";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Query from "./pages/Query";
import ScheduledClass from "./pages/ScheduledClass";
import Setting from "./pages/Setting";
import ContentCourse from "./pages/ContentCourse";

import NotificationBoxModal from "./components/NotificationBox";
import TestSeries from "./pages/TestSeries";
import AddTest from "./pages/AddTest";
import TestForm from "./components/TestForm";
import ToogleSwitch from "./components/ToogleSwitch";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Courses from "./pages/Courses";
import Referal from "./pages/Referal";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Reviews from "./pages/Reviews";
import LiveClassDetails from "./components/Demo";
import { Provider } from "react-redux";
import store from "./utils/store";




// interface Topic {
//   id: number;
//   name: string;
// }

// interface Section {
//   id: number;
//   name: string;
//   topics: Topic[];
// }

// interface Lecture {
//   id: string;
//   lectureTitle: string;
//   notes: string[];
//   dpp: string[];
//   video: string[];
//   assignment: string[];
//   test: string[];
// }



function App() {
  // const [sections, setSections] = useState<Section[]>([
  //   { id: 1, name: "Section 101", topics: [{ id: 1, name: "Chapter 900" }] },
  // ]);

  const AppLayout = () => {
    return (
      <>
        <div className="max-w-[1600px] mx-auto flex ">
          {/* <Navbar/> */}
          <Sidebar />
          <Outlet />
        </div>
      </>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SignInPage />,
    },
    {
      path: "/signUp",
      element: <SignUpPage />,
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/createCourse",
          element: <CreateCourse />,
        },
        {
          path: "/query",
          element: <Query />,
        },
        {
          path: "/scheduleClass",
          element: <ScheduledClass />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
        {
          path: "/contentcourse/:id",
          element: <ContentCourse />,
        },
        {
          path: "/testseries",
          element: <TestSeries />,
        },
        {
          path: "/addTest",
          element: <AddTest />,
        },
        {
          path: "/testform",
          element: <TestForm />,
        },
        {
          path: "/createTest/:id",
          element: <AddTest />,
        },
        {
          path: "/course",
          element: <Courses />,
        },
        {
          path: "/referal",
          element: <Referal />,
        },
        {
          path: "/review",
          element: <Reviews />,
        },
      ],
    },
    {
      path: "/notification",
      element: <NotificationBoxModal />,
    },
    {
      path: "/form",
      element: <ToogleSwitch />,
    },
    {
      path: "/demo",
      element: <LiveClassDetails />,
    },
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </DndProvider>
  );
}

export default App;
