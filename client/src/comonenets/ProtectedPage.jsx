import { message } from "antd";
import { useEffect } from "react";

import { GetCurrentUser } from "../apicalls/users";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";
import { SetUser } from "../redux/usersSlice";
import { useDispatch } from "react-redux";

const ProtectedPage = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateToken = async () => {
    try {
      const response = await GetCurrentUser();

      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        navigate("/sign-in");
        message.error(response.message);
      }
    } catch (error) {
      navigate("/sign-up");
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/sign-in");
    }
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="sm:hidden">
        <Navbar></Navbar>
      </div>
      <div className="flex">
        <div className="sm:block hidden">
          <Sidebar></Sidebar>
        </div>
        <div>{children}</div>
      </div>
      <div className="sm:hidden">
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default ProtectedPage;
