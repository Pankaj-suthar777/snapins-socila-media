import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import AuthLayout from "./comonenets/AuthLayout";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import ProtectedPage from "./comonenets/ProtectedPage";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout></AuthLayout>}>
          <Route path="/sign-in" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<Register></Register>}></Route>
        </Route>
        <Route
          path="/"
          element={
            // <ProtectedPage>
            <Home></Home>
            // </ProtectedPage>
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
