import logo from "../assets/images/logo.svg";
import profileimg from "../assets/images/profile.png";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex sticky top-0  items-center justify-between h-[80px] bg-stone-900  text-white w-screen">
      <div className="flex items-center justify-center ml-2">
        <img
          alt="logo"
          src={logo}
          className="p-1 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        ></img>
      </div>
      <div className="flex gap-4 items-center justify-center mr-2">
        <i
          className="ri-logout-box-line text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/sign-in");
          }}
        ></i>
        <img alt="" src={profileimg}></img>
      </div>
    </div>
  );
}

export default Navbar;
