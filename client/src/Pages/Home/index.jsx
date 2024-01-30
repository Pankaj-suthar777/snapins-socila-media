import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import ModalComponent from "../../comonenets/ModalComponent";
import { useEffect } from "react";
import { Getposts } from "../../apicalls/post";
import { SetLoader } from "../../redux/loaderSlice";
import { message } from "antd";

function Home() {
  const [posts, setPosts] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  async function getData() {
    try {
      dispatch(SetLoader(true));
      const response = await Getposts();

      dispatch(SetLoader(false));
      if (response.success) {
        Getposts(response.data);
      }
    } catch (error) {
      message.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="overflow-auto w-screen h-screen p-6 bg-black text-white">
      <button
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={() => setShowCreate(true)}
      >
        New Post
      </button>
      <div>
        {posts.map((post) => {
          return <div key={post}>{post}</div>;
        })}
      </div>
      {showCreate && (
        <ModalComponent
          setFile={setFile}
          showCreate={showCreate}
          setShowCreate={setShowCreate}
          file={file}
          description={description}
          setDescription={setDescription}
        ></ModalComponent>
      )}
    </div>
  );
}

export default Home;
