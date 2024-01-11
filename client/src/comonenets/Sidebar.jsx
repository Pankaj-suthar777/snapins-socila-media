import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import profileimg from "../assets/images/profile.png";
import { useState } from "react";

function Sidebar() {
  const [color, setColor] = useState("home");
  const navigate = useNavigate();
  return (
    <div className="bg-stone-900 min-w-[230px] h-screen  max-w-[300px] ">
      <div className="flex h-full flex-col justify-between ">
        <div>
          <div className="flex w-full items-center justify-center h-[80px]">
            <img
              alt="logo"
              src={logo}
              className="p-1 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            ></img>
          </div>
          <div className="flex gap-3 h-[120px] w-full justify-center items-center pr-6">
            <div>
              <img alt="" className="img-sidebar" src={profileimg}></img>
            </div>
            <div className="flex flex-col text-white">
              <h1 className="text-lg font-semibold">The Real me</h1>
              <p className="text-sm   font-extralight">therealme</p>
            </div>
          </div>

          <div className="text-white p-4 flex-col flex w-full justify-between gap-4  text-2xl">
            <div className="flex flex-col gap-5">
              <div
                className={`flex hover:bg-blue-500 rounded-xl px-2 active:scale-[0.98] ease-in-out duration-300   h-[50px] gap-4 items-center cursor-pointer ${
                  color === "home" ? "bg-blue-400" : ""
                } `}
                onClick={() => {
                  navigate("/");
                  setColor("home");
                }}
              >
                <i className="ri-home-line"></i>
                <span className="text-sm">Home</span>
              </div>
              <div
                className={`flex hover:bg-blue-500 rounded-xl px-2 h-[50px] active:scale-[0.98] ease-in-out duration-300  gap-4 items-center cursor-pointer ${
                  color === "explore" ? "bg-blue-500" : ""
                } `}
                onClick={() => {
                  navigate("/explore");
                  setColor("explore");
                }}
              >
                <i className="ri-seo-line"></i>
                <span className="text-sm">Explore</span>
              </div>
              <div
                className={`flex hover:bg-blue-500 rounded-xl px-2 h-[50px] active:scale-[0.98] ease-in-out duration-300  gap-4 items-center cursor-pointer ${
                  color === "saved" ? "bg-blue-500" : ""
                } `}
                onClick={() => {
                  navigate("/saved");
                  setColor("saved");
                }}
              >
                <i className="ri-bookmark-line"></i>
                <span className="text-sm">Saved</span>
              </div>

              <div
                className={`flex hover:bg-blue-500 rounded-xl px-2 h-[50px] cursor-pointer gap-4 items-center active:scale-[0.98] ease-in-out duration-300 ${
                  color === "create" ? "bg-blue-500" : ""
                }`}
                onClick={() => {
                  navigate("/create");
                  setColor("create");
                }}
              >
                <i className="ri-image-edit-line"></i>
                <span className="text-sm">Create</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white p-4   text-2xl">
          <div
            className="flex hover:bg-blue-500 rounded-xl px-2 h-[50px] cursor-pointer gap-4 items-center active:scale-[0.98] ease-in-out duration-300 "
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/sign-in");
            }}
          >
            <i className="ri-logout-box-line"></i>
            <span className="text-sm ">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
