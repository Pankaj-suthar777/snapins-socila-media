import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Form, message } from "antd";
import { Addpost } from "../apicalls/post";
import { useDispatch } from "react-redux";
import { SetLoader } from "../redux/loaderSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#36454F",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

const ModalComponent = ({
  showCreate,
  setShowCreate,
  setFile,
  file,
  description,
  setDescription,
}) => {
  const dispatch = useDispatch();
  async function handlePost(values) {
    try {
      dispatch(SetLoader(true));
      const res = await Addpost({ description, file });
      if (res.success) {
        dispatch(SetLoader(false));
        message.success("Post Created Successfully");
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message || "something went wrong");
    }
  }

  return (
    <div>
      <Modal open={showCreate} onClose={() => setShowCreate(false)}>
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Form onFinish={handlePost}>
              <textarea
                className="description w-full text-white bg-gray-800  p-3 h-[140px] border border-gray-900 outline-none rounded-xl mb-3"
                placeholder="Describe everything about this post here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <input
                className="text-white text-sm relative m-0 block w-full min-w-0 flex-auto rounded-xl border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem]  font-normal  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile"
                value={file}
                onChange={(e) => setFile(e.target.value)}
              />
            </Form>
            <div className="flex gap-2 mt-5">
              <div
                className="btn borderborder-gray-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-auto border rounded-xl"
                onClick={() => setShowCreate(false)}
              >
                Cancel
              </div>
              <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 rounded-xl">
                Post
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
