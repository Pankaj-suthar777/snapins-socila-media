import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import AuthLayout from "./comonenets/AuthLayout";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ProtectedPage from "./comonenets/ProtectedPage";
import { useSelector } from "react-redux";
import "./index.css";
import Spinner from "./comonenets/Spinner.jsx";
import Explore from "./Pages/Explore";
import Saved from "./Pages/Saved/index.jsx";
import Profile from "./Pages/Profile";

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <main className="flex h-screen overflow-hidden">
      {loading && <Spinner></Spinner>}
      <Routes>
        <Route element={<AuthLayout></AuthLayout>}>
          <Route path="/sign-in" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<Register></Register>}></Route>
        </Route>
        <Route
          path="/"
          element={
            <ProtectedPage>
              <Home></Home>
            </ProtectedPage>
          }
        ></Route>
        <Route
          path="/explore"
          element={
            <ProtectedPage>
              <Explore></Explore>
            </ProtectedPage>
          }
        ></Route>
        <Route
          path="/saved"
          element={
            <ProtectedPage>
              <Saved></Saved>
            </ProtectedPage>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedPage>
              <Profile></Profile>
            </ProtectedPage>
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
