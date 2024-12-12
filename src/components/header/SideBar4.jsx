import { Avatar, Dropdown } from "flowbite-react";
import { useContext, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiPencilSimpleFill } from "react-icons/pi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { Spinner } from "../Spinner";
import { HiLogout, HiViewGrid } from "react-icons/hi";
import user from "./mclovin.jpg"
import clsx from "clsx";

export const SideBar4 = () => {
  const { handleAuth } = useContext(UserContext);
  const [isOpenSearchBar, setIsSearchOpenBar] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);


  const handleLogout = () => {
    handleAuth(false);
    localStorage.setItem("auth", JSON.stringify(false));
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-[#0F0F0F] text-white max-w-screen-3xl px-5 py-3 sticky top-0 z-50">
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center">
          <div className="mb-2 md:mb-0 mt-2 md:mr-8">
            <Link to="/">
              <h3 className="self-center whitespace-nowrap text-2xl md:text-3xl font-semibold text-[#E50914]">
                CineFlix
              </h3>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center mt-2">

          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={clsx(
              "p-0 m-0 transform transition-transform origin-right duration-500 hidden md:flex",
              {
                "scale-x-100": isOpenSearchBar,
                "scale-x-0": !isOpenSearchBar,
              }
            )}
          >
          </div>
          <div className="md:ml-1 ">
            <Dropdown
              arrowIcon={true}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={user}
                  rounded
                />
              }
            >
              <div className="">
                <Dropdown.Header className="">
                  <span className="block text-base font-semibold">
                    McLovin
                  </span>
                  <span className="block truncate italic text-xs  font-medium">
                    mclovin@cineflix.com
                  </span>
                </Dropdown.Header>
              </div>
              <div className="hover:bg-[#ffffff]">
                <Link to="/favoritos">
                  <Dropdown.Item className="text-[#141414]">
                    <PiPencilSimpleFill className="mr-2" />
                    Mis favoritos
                  </Dropdown.Item>
                </Link>
              </div>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={handleLogout}
                className="text-[#E50914] hover:text-[#E50914]"
                icon={HiLogout}
              >
                
                Cerrar sesión
              </Dropdown.Item>

            </Dropdown>
          </div>
        </div>
      </nav>
      <nav
        className={clsx(
          "flex flex-col bg-[#19063A] md:hidden justify-between items-center text-white max-w-screen-3xl pt-2 pb-3",
          {
            hidden: !isOpenList && !isOpenSearchBar,
          }
        )}
      >
      </nav>
    </>
  );
};
