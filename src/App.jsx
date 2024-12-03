import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Registration from "./components/registration/Registration";
import app from "./fireBaseConfig";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRoute}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;