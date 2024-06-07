import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/sites/Home";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
