import { Button, Form, Upload } from "antd";

function Create() {
  return (
    <div className="overflow-auto w-screen h-screen p-6 bg-black text-white">
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-5">
          <span className="material-symbols-outlined text-4xl">
            add_photo_alternate
          </span>
          <p className="text-xl font-bold">Create Post</p>
        </div>
        <Form layout="vertical">
          <Form.Item label="Caption">
            <textarea
              rows={2}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full sm:w-[50%]"
            ></textarea>
          </Form.Item>
          <Form.Item label="Add Photo">
            <Upload listType="picture">
              <Button size="middle" className="text-white " type="dashed">
                Upload image
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Create;
