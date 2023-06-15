import { FaBars } from "react-icons/fa";

function Header() {
  function onMenuToggle() {
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("top-[9%]");
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
          <h1 className="font-bold text-2xl">Website</h1>
        </div>
        <div className="nav-links md:static md:min-h-fit md:w-auto absolute bg-white w-full left-0 min-h-fit top-[-100%] flex items-center px-5 py-2">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-7 ">
            <li>
              <a className="hover:text-gray-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Explore
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Create
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <button className="bg-[#6cb2eb] py-1 px-4 rounded-md text-white  hover:bg-[#2779bd]">
            Sign Up
          </button>
          <button className="md:hidden" onClick={onMenuToggle}>
            <FaBars />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
