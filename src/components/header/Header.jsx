import { useEffect, useState } from "react";
import clsx from "clsx";
import { SideBar4 } from "./SideBar4";

export const Header = () => {

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header

      className={clsx(
        "bg-transparent w-full text-white sticky top-0 z-40 transition-all duration-300",
        {
          "navbar-active": navbar,
        }
      )}
    >
      <SideBar4 />
    </header>
  );
};
