import { RouterProvider } from "react-router-dom";
import AppRouter from "./ui/pages/router.jsx"; // The path to your AppRouter file

function App() {
  return (
    <RouterProvider router={AppRouter} />
  );
}

export default App;