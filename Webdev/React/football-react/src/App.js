import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Table from "./components/pages/Table";
import Imprint from "./components/pages/Imprint";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/table",
      element: <Table/>,
    },
    {
      path: "/imprint",
      element: <Imprint/>,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
