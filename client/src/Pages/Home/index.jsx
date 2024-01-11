import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="overflow-auto w-screen h-screen p-6 bg-black text-white">
      Home
    </div>
  );
}

export default Home;
