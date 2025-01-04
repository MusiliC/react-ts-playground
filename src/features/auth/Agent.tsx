import { Link, Outlet } from "react-router-dom";


const Agent = () => {
  return (
    <>
      <Link
        to="dashboard"
        className="flex flex-col gap-3 my-10 text-blue-800 underline"
      >
        Click me to get agent nested route
      </Link>
      <Outlet />
    </>
  );
}

export default Agent