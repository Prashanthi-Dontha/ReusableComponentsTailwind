import {
  FaBars,
  FaWindowClose,
  FaAngleDown,
  FaAngleUp,
  FaSun,
  FaMoon,
  FaLaptop,
} from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { resource } from "../Main";

function Header() {
  const { theme, setTheme } = useContext(resource);
  const [isMenu, setIsMenu] = useState(false);
  const [isExploreDropDown, setIsExploreDropDown] = useState(false);
  const [isBlogDropDown, setIsBlogDropDown] = useState(false);
  const [isTheme, setIsTheme] = useState(false);
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  //as window refreshes it will check for the local storage and assign the color
  useEffect(() => {
    onWindowMatch();
  }, [theme]);

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
      console.log("window called1");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("window called2");
    }
  };

  // on button click we are setting the theme a//c to the theme this will get executes
  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        console.log("effect 1 called1");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        console.log("effect 1 called2");
        break;
      default:
        localStorage.removeItem("theme");
        console.log("effect 1 called3");

        break;
    }
  }, [theme]);

  // changes the color of the screen on dynamically changing the theme of the browser
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
        console.log("function called1");
      } else {
        document.documentElement.classList.remove("dark");
        console.log("funtion called2");
      }
    }
  });
  function onMenuToggle() {
    setIsMenu(!isMenu);
    setIsBlogDropDown(false);
    setIsExploreDropDown(false);
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("top-[9%]");
  }
  function onExploreDropdownToggle() {
    setIsExploreDropDown(!isExploreDropDown);
    setIsBlogDropDown(false);
  }

  function onBlogDropdownToggle() {
    setIsBlogDropDown(!isBlogDropDown);
    setIsExploreDropDown(false);
  }
  const themeToggled = () => {
    setIsTheme(!isTheme);
  };

  return (
    <div className="bg-white dark:bg-slate-700">
      <nav className="flex items-center justify-between mx-auto w-[92%] py-2">
        <div className="flex items-center justify-around">
          <img
            className=" w-10 rounded-full mr-2 dark: border border-slate-50"
            src="./images/dp.jpg"
            alt="logoname"
          />
          <h1 className="font-bold text-2xl dark:text-slate-50">website</h1>
        </div>
        <div className="nav-links md:static md:min-h-fit md:w-auto absolute bg-white dark:bg-slate-700 dark:text-slate-50 w-full left-0 min-h-fit top-[-100%] flex items-center px-5 py-2  z-10">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-7 ">
            <li>
              <Link to="home" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                className="hover:text-gray-500 flex items-center"
                onClick={onExploreDropdownToggle}
              >
                Explore {isExploreDropDown ? <FaAngleUp /> : <FaAngleDown />}
              </button>
              {isExploreDropDown && (
                <div className="dropdownItems md:absolute bg-gray-50 dark:bg-slate-500 p-2 rounded-md mt-5 shadow-md z-10">
                  <ul className="space-y-2 w-40">
                    <li>
                      <Link
                        to="categories"
                        className="hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md px-2 py-1 flex"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="brands"
                        className="hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md px-2 py-1 flex"
                      >
                        Brands
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="locations"
                        className="hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md px-2 py-1 flex"
                      >
                        Locations
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to="create" className="hover:text-gray-500">
                Create
              </Link>
            </li>
            <li className="relative">
              <button
                className="hover:text-gray-500 flex items-center"
                onClick={onBlogDropdownToggle}
              >
                Blog{isBlogDropDown ? <FaAngleUp /> : <FaAngleDown />}
              </button>
              {isBlogDropDown && (
                <div className="dropdownItems md:absolute bg-gray-50 dark:bg-slate-500 p-2  rounded-md my-2 shadow-md z-10">
                  <ul className="space-y-2 w-40">
                    <li>
                      <Link
                        to="categories"
                        className="hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md px-2 py-1 flex"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="brands"
                        className="hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md px-2 py-1 flex"
                      >
                        Brands
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="locations"
                        className="hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md px-2 py-1 flex"
                      >
                        Locations
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to="contact" className="hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="flex items-center relative">
            <button
              className="mr-5  bg-slate-200 rounded-full px-2 py-1"
              onClick={themeToggled}
            >
              <FaSun />
            </button>
            {isTheme && (
              <ul>
                <div className="absolute dropdownItems bg-gray-50 p-2 rounded-md my-2 shadow-md z-10 w-32 left-0 mt-5">
                  <li
                    className="hover:bg-gray-300 rounded-md px-2 py-1 flex items-center justify-start cursor-pointer"
                    onClick={() => {
                      setTheme("light");
                      setIsTheme(false);
                    }}
                  >
                    {<FaSun />}
                    <p className="ml-3 theme-color">Light</p>
                  </li>
                  <li
                    className="hover:bg-gray-300 rounded-md px-2 py-1 flex items-center justify-start cursor-pointer"
                    onClick={() => {
                      setTheme("dark");
                      setIsTheme(false);
                    }}
                  >
                    {<FaMoon />}
                    <p className="ml-3 theme-color"> Dark</p>
                  </li>
                  <li
                    className="hover:bg-gray-300 rounded-md px-2 py-1 flex items-center justify-start cursor-pointer"
                    onClick={() => {
                      setTheme("system");
                      setIsTheme(false);
                      // onWindowMatch();
                    }}
                  >
                    <FaLaptop />
                    <p className="ml-3 theme-color">System</p>
                  </li>
                </div>
              </ul>
            )}
            {/* <div>
                <ul className="absolute dropdownItems bg-gray-50 p-2 rounded-md my-2 shadow-md z-10 w-28">
                  <li className="hover:bg-gray-300 rounded-md px-2 py-1 flex">
                    Light
                  </li>
                  <li className="hover:bg-gray-300 rounded-md px-2 py-1 flex">
                    Dark
                  </li>
                  <li className="hover:bg-gray-300 rounded-md px-2 py-1 flex">
                    System
                  </li>
                </ul>
              </div> */}
            {/* )} */}
          </div>

          <div className="flex items-center gap-5">
            <Link to="login">
              <button className="bg-[#6cb2eb] py-1 px-4 rounded-md text-white  hover:bg-[#2779bd] md:text-sm">
                Sign Up
              </button>
            </Link>

            <button className="md:hidden z-10" onClick={onMenuToggle}>
              {isMenu ? (
                <FaWindowClose className="text-2xl  dark:text-white" />
              ) : (
                <FaBars className="text-2xl dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
