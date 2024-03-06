import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/friends",
      element: <Table/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
