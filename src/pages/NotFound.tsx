import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-4xl text-pure-greys-700 flex flex-col justify-center items-center h-[42vh]">
      404 Not Found.
      <br />
      <div className="text-xl mt-10 underline underline-offset-2 text-blue-400 hover:text-blue-500">
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
