import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_COMPONENT } from "./constants/routeComponent.constant";

function App() {
  const { register, home } = ROUTE_COMPONENT;
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <AppBar />,
    //   children: [
    //     {
    //       path: "todo",
    //       element: <Todo />,
    //     },
    //     {
    //       path: "todo/:todoId",
    //       element: <DisplayTodo />,
    //     },
    //   ],
    // },
    {
      path: register.path,
      element: register.component(),
    },
    {
      path: home.path,
      element: home.component(),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
