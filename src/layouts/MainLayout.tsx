import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  // estado de la barra lateral
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSideBar={toggleSideBar} />
      <div className="flex bg-gray-400">
        {isSidebarOpen && <Sidebar />}
      </div>
      <main className="h-screen w-screen pt-12 items-center text-center rounded border-2 border-cyan-800">{children}</main>
    </>
  );
};

export default MainLayout;
