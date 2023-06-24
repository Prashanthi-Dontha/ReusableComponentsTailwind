import React from "react";
import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
  }
  //lg:w-[80vh] lg:h-[60vh]  md:w-[50vh] md:h-[50vh]
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center box-border">
      <form
        className=" bg-white flex flex-col justify-center items-center box-border shadow-2xl rounded-md 
         w-[40vh] h-[55vh] md:w-[55vh] md:h-[50vh] lg:w-[80vh] lg:h-[60vh] "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col space-y-5 ">
          <div className="relative">
            <FaUser className=" left-4 top-3 absolute font-extralight " />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input rounded-md h-10 w-56 md:h-10 md:w-80 lg:h-10 lg:w-96 bg-gray-50 border-slate-200 ring-1
               ring-gray-300 outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className=" left-4 top-3 absolute font-extralight " />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input rounded-md h-10 w-56 md:h-10 md:w-80 lg:h-10 lg:w-96 bg-gray-50 border-slate-200 ring-1 ring-gray-300 outline-none"
            />
          </div>
        </div>
        <div>
          <button
            className=" py-2 px-6 rounded-md bg-blue-400  hover:bg-blue-600 my-10 text-white font-semibold"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className=" flex flex-col lg:w-[60vh] w-56 md:w-80">
          <div className="social-dividers">
            <span className="">or</span>
          </div>

          <div className="social-media flex lg:w-[60vh] md:w-80 w-56 justify-evenly">
            <a href="https://gmail.com">
              <FaGoogle className="w-6 h-6 md:w-8 md:h-8 text-center" />
            </a>
            <a href="https://facebook.com">
              <FaFacebook className="w-6 h-6 md:w-8 md:h-8 text-center" />
            </a>
            <a href="https://github.com">
              <FaGithub className="w-6 h-6 md:w-8 md:h-8 text-center" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 text-center" />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
// relative flex justify-center w-[100%] border-b-2  border-gray-200 leading-none
