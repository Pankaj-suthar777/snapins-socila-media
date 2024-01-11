import React from "react";
import { Outlet } from "react-router-dom";
import sideimg from "../assets/images/side-img.svg";

function AuthLayout() {
  return (
    <>
      <section className="flex bg-black flex-1 justify-center flex-col py-10">
        <Outlet></Outlet>
      </section>
      <img
        src={sideimg}
        alt=""
        className="hidden img-start lg:block h-[800px] w-1/2 object-cover  bg-no-repeat"
      ></img>
    </>
  );
}

export default AuthLayout;
