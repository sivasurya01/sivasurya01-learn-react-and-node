import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ReactHookForm from "./pages/ReactHookForm";
function App() {
  const LazyHome = lazy(() => import("./pages/Home"));
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="d-flex justify-content-center align-items-center align-content-center">
              Loading...
            </div>
          }
        >
          <LazyHome />
        </Suspense>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "hookform", element: <ReactHookForm /> },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
