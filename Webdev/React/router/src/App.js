import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import People from "./components/People";
import Friends from "./components/Friends";

const router = createBrowserRouter([
  {
    path: "/",
    element: <People/>,
  },
  {
    path: "/friends",
    element: <Friends/>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
