import { Link, Outlet } from "react-router-dom"


const Admin = () => {
  return (
    <>
      <Link
        to="dashboard"
        className="flex flex-col gap-3 my-10 text-blue-800 underline"
      >
        Click me to get to my nested route
      </Link>
      <Outlet />
    </>
  );
}

export default Admin