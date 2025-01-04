import { useAuthContext } from "@/features/auth/AuthContext";
import { Link } from "react-router-dom";


const AuthPage = () => {

  const {role, isLoggedIn} = useAuthContext();
  console.log(role, isLoggedIn);

  return (
    <div>
      <p className="font-semibold">My Nested Auth Pages, click to visit any</p>
      <div>
        <ul>
          <li className="flex flex-col gap-3 mt-10 text-blue-800 underline">
            <Link to="/admin">Go to Admin Pages</Link>
            <Link to="/agent">Go to Agent Pages</Link>
            <Link to="/trustee">Go to Trustee Pages</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AuthPage