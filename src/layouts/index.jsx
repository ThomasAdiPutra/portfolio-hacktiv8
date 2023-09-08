import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/index";
import { Outlet } from "react-router-dom";
import { disable, enable, isEnabled } from "cursor-flashlight";

export default function Layout() {
  const [darkMode, setDarkMode] = React.useState(isEnabled());
  const [background, setBackground] = React.useState("");

  useEffect(() => {
    if (darkMode) {
      setBackground("bg-gray-800");
      enable({ size: "100px" });
    } else {
      setBackground("");
      disable();
    }
  }, [darkMode]);

  return (
    <div className="w-screen h-screen flex">
      <Sidebar handleDarkMode={setDarkMode} />
      <div className={`flex-1 flex flex-col justify-center px-5 ${background}`}>
        <Outlet />
      </div>
    </div>
  );
}
