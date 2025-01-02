import { Outlet } from "react-router-dom"
import HeaderNavigation from "./HeaderNavigation"
import HeroPage from "./HeroPage";


function AppLayout() {
  return (
    <div>
      <HeaderNavigation />
      <main className="min-h-screen w-5/6 mx-auto ">
        <HeroPage />

        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout