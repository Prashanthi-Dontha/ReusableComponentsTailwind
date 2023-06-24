import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  console.log(year);
  return (
    <div className="bg-gray-50 h-fit">
      <div className=" md:grid md:grid-rows-6 md:grid-cols-1 md:px-16 md:items-center md:justify-items-center md:shadow-md hidden ">
        <div className=" row-span-5 grid grid-cols-4 gap-x-4">
          <div>
            <p className="mb-3 font-semibold">Page Name</p>
            <p className=" text-gray-500 text-sm">
              This is my first web page that iam making responsive with full of
              tailwind CSS.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Link to="contact" className="mb-3">
              <p className=" font-semibold">Market Place</p>
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Profile
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Market Place
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Creators
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Activity
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Collections
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <Link to="contact" className="mb-3">
              <p className=" font-semibold">Company</p>
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Upload
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Connect Wallet
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Our blog
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Item details
            </Link>
            <Link to="contact" className=" text-gray-500 text-sm">
              Contact us
            </Link>
          </div>
          <div className="flex flex-col ">
            <Link to="contact" className="mb-3">
              <p className=" font-semibold">Join Newsletter</p>
            </Link>
            <div className=" lg:bg-white lg:h-10 w-[100%] py-3 px-2 lg:shadow-md rounded-md flex lg:flex-row md:flex-col justify-between items-center ">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" outline-none lg:w-[70%] text-xs md:p-2 md:mb-2"
              />
              <button className=" bg-blue-500 hover:bg-blue-800 text-white py-1 px-2 text-xs rounded-md lg:shadow-md ">
                Subscribe
              </button>
            </div>
            <div className="flex pt-5 gap-1 lg:gap-3 md:w-[100%] w-[70%]">
              <a href="https://twitter.com">
                <FaTwitter className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-center bg-white p-1 shadow-md rounded-md" />
              </a>
              <a href="https://facebook.com">
                <FaFacebook className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-center bg-white p-1 shadow-md rounded-md" />
              </a>
              <a href="https://github.com">
                <FaGithub className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-center bg-white p-1 shadow-md rounded-md" />
              </a>
              <a href="https://youtube.com">
                <FaYoutube className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-center bg-white p-1 shadow-md rounded-md" />
              </a>{" "}
              <a href="https://instagram.com">
                <FaInstagram className="md:w-6 md:h-6 lg:w-8 lg:h-8 text-center bg-white p-1 shadow-md rounded-md" />
              </a>
            </div>
          </div>
        </div>
        <div className=" text-center border-t-2 w-[100%]">
          <p className=" p-5 text-gray-500 text-sm w-[100%]">
            Copyright © {year}
          </p>
        </div>
      </div>
      <div className="lg:hidden md:hidden divide-y-2">
        <div className=" flex flex-col justify-center items-center gap-y-3 py-4">
          <Link to="contact">Page Name</Link>
          <Link to="contact">Market Place</Link>
          <Link to="contact">Company</Link>
          <Link to="contact">Join Newsletter</Link>
        </div>
        <div className=" text-center ">
          <p className=" p-5 text-gray-500 text-sm w-[100%]">
            Copyright © {year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
