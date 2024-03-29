import AppLayout from "./ui/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    // ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
