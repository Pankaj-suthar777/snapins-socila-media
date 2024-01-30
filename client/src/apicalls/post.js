import { axiosInstance } from "./axiosInstance";

//add a new post
export const Addpost = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/posts/new-post", payload);
    return response.data;
  } catch (error) {
    return error.messgae;
  }
};

//get all posts
export const Getposts = async () => {
  try {
    const response = await axiosInstance.get("/api/posts/get-posts");
    return response.data;
  } catch (error) {
    return error.messgae;
  }
};
