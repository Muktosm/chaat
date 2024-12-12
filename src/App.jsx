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
import MasterLayout from "./layout/MasterLayout";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Group from "./pages/Group";
import Frirnds from "./pages/Frirnds";
import People from "./pages/People";
function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/group" element={<Group />} />
          <Route path="/friends" element={<Frirnds />} />
          <Route path="/people" element={<People/>}/>
        </Route>

        <Route path="/signup" element={<Registration />} />
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
