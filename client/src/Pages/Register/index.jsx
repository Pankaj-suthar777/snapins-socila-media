import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import logo from "../../assets/images/logo.svg";
import { Button } from "antd";
import { RegisterUser } from "../../apicalls/users";
const rules = [
  {
    required: true,
    message: "required",
  },
];

function Register() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      console.log(response);
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
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className=" bg-black text-white p-5 rounded sm:w-[450px] w-[350px]">
        <div className=" flex justify-center items-center">
          <img src={logo}></img>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 mb-2">
          <h1 className="text-2xl font-bold">Create a new account</h1>
          <p className="text-sm text-gray-400">Please enter your details.</p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <h1 className="text-white mb-1">Name :</h1>
          <Form.Item name="name" rules={rules}>
            <input
              placeholder="Name"
              className="w-full bg-gray-500 h-8 rounded-md text-white px-4 py-4 outline-none"
            ></input>
          </Form.Item>
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
              type="password"
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
        </Form>
      </div>
    </div>
  );
}

export default Register;
