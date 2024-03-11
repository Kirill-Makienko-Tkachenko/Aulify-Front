import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./DashboardPage";

function DummyPage() { // Para nada copie esta idea de la chamba, obviamente lo hice yo mismo
  return (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/PH6jE5W_vAg?si=tD6XFC5ZN7uE6Khu&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/help",
    element: <DummyPage />,
  },
]);

export default AppRouter;
