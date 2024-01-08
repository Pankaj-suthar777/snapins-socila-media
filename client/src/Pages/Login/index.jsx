import { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const rules = [
  {
    required: true,
    message: "required",
  },
];

function Login() {
  const navigate = useNavigate();
  /* const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };*/

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className=" bg-black text-white p-5 rounded sm:w-[450px] w-[350px]">
        <div className="flex justify-center items-center">
          <img src={logo}></img>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 mb-2">
          <h1 className="text-2xl font-bold">Log in to your account</h1>
          <p className="text-sm text-gray-400">
            Welcome back! Please enter your details.
          </p>
        </div>

        <Form layout="vertical">
          <h1 className="text-white mb-1">Email :</h1>
          <Form.Item name="email" rules={rules}>
            <input
              placeholder="Email"
              className="w-full bg-gray-500 h-8 rounded-md text-white px-4 py-4 outline-none"
            ></input>
          </Form.Item>
          <h1 className="text-white mb-1">Password :</h1>
          <Form.Item name="password" rules={rules}>
            <input
              placeholder="Password"
              className="w-full bg-gray-500 h-8 rounded-md text-white px-4 py-4 outline-none"
            ></input>
          </Form.Item>
          <Button
            className=" h-8 bg-blue-500"
            type="primary"
            htmlType="submit"
            block
          >
            Submit
          </Button>
          <div className="mt-5 text-center">
            <span className="text-gray-500">
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
