import { createBrowserRouter } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection
import DashboardAlumnoPythonI from "./DashboardPageAlumnoPythonI.jsx";
import LoginPage from "./LoginPage";
import Layout from "./Layout.jsx"; // Import the Layout component
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component
import DashboardAlumnoPythonII from "./DashboardPageAlumnoPythonII.jsx";
import DashboardAlumnoPythonIII from "./DashboardPageAlumnoPythonIII.jsx";
import DashboardNoAlumnoPythonI from "./DashboardPageNoAlumnoPythonI.jsx";
import DashboardNoAlumnoPythonII from "./DashboardPageNoAlumnoPythonII.jsx";
import DashboardNoAlumnoPythonIII from "./DashboardPageNoAlumnoPythonIII.jsx";


function DummyPage() { 
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/PH6jE5W_vAg?si=tD6XFC5ZN7uE6Khu&amp;controls=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <LoginPage />,
      },
      {
        path: "dashboardAlumnosPythonI",
        element: <ProtectedRoute><DashboardAlumnoPythonI /></ProtectedRoute>,
      },
      {
        path: "dashboardAlumnosPythonII",
        element: <ProtectedRoute><DashboardAlumnoPythonII  /></ProtectedRoute>,
      },
      {
        path: "dashboardAlumnosPythonIII",
        element: <ProtectedRoute><DashboardAlumnoPythonIII /></ProtectedRoute>,
      },
      {
        path: "dashboardNoAlumnosPythonI",
        element: <ProtectedRoute><DashboardNoAlumnoPythonI /></ProtectedRoute>,
      },
      {
        path: "dashboardNoAlumnosPythonII",
        element: <ProtectedRoute><DashboardNoAlumnoPythonII /></ProtectedRoute>,
      },
      {
        path: "dashboardNoAlumnosPythonIII",
        element: <ProtectedRoute><DashboardNoAlumnoPythonIII /></ProtectedRoute>,
      },
      {
        path: "help",
        element: <ProtectedRoute><DummyPage /></ProtectedRoute>,
      },
    ],
  },
]);

export default AppRouter;
