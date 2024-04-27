import { createBrowserRouter } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Navigate } from 'react-router-dom'; // Import Navigate for redirection
import DashboardAlumnoPythonI from "./DashboardPageAlumnoPythonI.jsx";
import LoginPage from "./LoginPage";
import Layout from "./Layout.jsx"; // Import the Layout component
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component


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
        element: <ProtectedRoute><DashboardAlumnoPythonI /></ProtectedRoute>, // Wrap the Dashboard with ProtectedRoute
      },
      {
        path: "help",
        element: <ProtectedRoute><DummyPage /></ProtectedRoute>, // Wrap the DummyPage with ProtectedRoute
      },
    ],
  },
]);

export default AppRouter;
