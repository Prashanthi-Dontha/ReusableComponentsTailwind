import { FaBars, FaWindowClose, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const [isExploreDropDown, setIsExploreDropDown] = useState(false);
  const [isBlogDropDown, setIsBlogDropDown] = useState(false);

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

  return (
    <div className="bg-white">
      <nav className="flex items-center justify-between mx-auto w-[92%] py-2">
        <div className="flex items-center justify-around">
          <img
            className=" w-10 rounded-full mr-2"
            src="./images/dp.jpg"
            alt="logoname"
          />
          <h1 className="font-bold text-2xl">website</h1>
        </div>
        <div className="nav-links md:static md:min-h-fit md:w-auto absolute bg-white w-full left-0 min-h-fit top-[-100%] flex items-center px-5 py-2">
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
                <div className="dropdownItems md:absolute bg-gray-50 p-2 rounded-md my-2 shadow-md z-10">
                  <ul className="space-y-2 w-40">
                    <li>
                      <Link
                        to="categories"
                        className="hover:bg-gray-300 rounded-md px-2 py-1 flex"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="brands"
                        className="hover:bg-gray-300 rounded-md px-2 py-1 flex"
                      >
                        Brands
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="locations"
                        className="hover:bg-gray-300 rounded-md px-2 py-1 flex"
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
                <div className="dropdownItems md:absolute bg-gray-50 p-2 rounded-md my-2 shadow-md z-10">
                  <ul className="space-y-2 w-40">
                    <li>
                      <Link
                        to="categories"
                        className="hover:bg-gray-300 rounded-md px-2 py-1 flex"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="brands"
                        className="hover:bg-gray-300 rounded-md px-2 py-1 flex"
                      >
                        Brands
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="locations"
                        className="hover:bg-gray-300 rounded-md px-2 py-1 flex"
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
        <div className="flex items-center gap-5">
          <Link to="login">
            <button className="bg-[#6cb2eb] py-1 px-4 rounded-md text-white  hover:bg-[#2779bd]">
              Sign Up
            </button>
          </Link>

          <button className="md:hidden" onClick={onMenuToggle}>
            {isMenu ? (
              <FaWindowClose className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
