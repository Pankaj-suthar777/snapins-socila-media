import { message } from "antd";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";

const ProtectedPage = ({ children }) => {
  const navigate = useNavigate();

  const validateToken = async () => {
    try {
      const response = await GetCurrentUser();

      if (response.success) {
        console.log("hi");
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
      navigate("/login");
    }
  }, []);

  return <div className="p-5">{children}</div>;
};

export default ProtectedPage;
