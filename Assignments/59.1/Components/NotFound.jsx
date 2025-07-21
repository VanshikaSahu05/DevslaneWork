import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className=" mt-10 flex flex-col justify-center items-center ">
      <Link to="/">
        <button className="self-center   py-1 px-4 rounded-md bg-black text-white outline">
          Go Home
        </button>
      </Link>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/255/803/small_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg"
        alt="error"
      />
    </div>
  );
};

export default NotFound;
