import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        navigate("/sign-in");
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
          <Form.Item label="Name" name="name" rules={rules}>
            <input
              placeholder="Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </Form.Item>

          <Form.Item label="Email" name="email" rules={rules}>
            <input
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </Form.Item>

          <Form.Item label="Password" name="password" rules={rules}>
            <input
              placeholder="Password"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </Form.Item>
          <Button
            className=" h-11 mt-6 bg-blue-500"
            type="primary"
            htmlType="submit"
            block
          >
            Submit
          </Button>
          <div className="mt-5 text-center">
            <span className="text-gray-500">
              Already have an account? <Link to="/sign-in">Login</Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
