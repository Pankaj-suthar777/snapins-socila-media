import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate();
  const [color, setColor] = useState("home");

  return (
    <div className="fixed flex   items-center justify-center bottom-0 left-0 right-0 w-screen bg-stone-900 h-[70px] rounded-t-md sm:hidden">
      <div className="text-white items-center flex w-full justify-around text-xl">
        <div
          className={`flex px-4 py-1 rounded-xl items-center flex-col ${
            color === "home" ? "bg-blue-500" : ""
          }`}
          onClick={() => {
            navigate("/");
            setColor("home");
          }}
        >
          <i className="ri-home-line"></i>
          <span className="text-sm">Home</span>
        </div>
        <div
          className={`flex items-center rounded-xl px-4 py-1 flex-col ${
            color === "explore" ? "bg-blue-500" : ""
          }`}
          onClick={() => {
            navigate("/explore");
            setColor("explore");
          }}
        >
          <i className="ri-seo-line"></i>
          <span className="text-sm">Explore</span>
        </div>
        <div
          className={`flex items-center rounded-xl px-4 py-1 flex-col ${
            color === "saved" ? "bg-blue-500" : ""
          }`}
          onClick={() => {
            navigate("/saved");
            setColor("saved");
          }}
        >
          <i className="ri-bookmark-line"></i>
          <span className="text-sm">Saved</span>
        </div>

        <div
          className={`flex items-center rounded-xl px-4 py-1 flex-col ${
            color === "profile" ? "bg-blue-500" : ""
          }`}
          onClick={() => {
            navigate("/profile");
            setColor("profile");
          }}
        >
          <i className="ri-settings-3-line"></i>
          <span className="text-sm">Setting</span>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
