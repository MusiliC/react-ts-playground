import { useAuthContext } from "@/features/auth/AuthContext";


const AuthPage = () => {

  const {role, isLoggedIn} = useAuthContext();
  console.log(role, isLoggedIn);

  return (
    <div>AuthPage</div>
  )
}

export default AuthPage