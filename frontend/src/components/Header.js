import React from 'react';
import HeaderLogo from '../assets/headerLogo.svg';
import login from '../assets/login.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header class=" bg-white  items-center ">
      <nav class="md:flex w-9/10 sm-w-7/12  h-20 md:h-20 ml-10 md:ml-28 items-center">
        <div className="header-logo lg:mt-2 lg:mr-28 py-5 lg:pr-10">
          <img src={HeaderLogo} alt="logo" />
        </div>
        <section className=" items-center {!toggle ?">
          <div className="CROSS-ICON absolute cursor-pointer top-0 right-2   py-5">
            <button onClick={handleToggle} class="outline-none pt-2 md:hidden ">
              {toggle ? (
                <svg
                  class=" w-8 h-6 gap-4 text-gray-500 hover:text-violent-500 "
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <span class="text-2xl text-bold pb-5 text-gray-700 top-0 right-2  ">
                  X
                </span>
              )}
            </button>
          </div>
          {/* <button class="outline-none mobile-menu-button">
              <svg
                class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                name="!open"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button> */}
          {!toggle ? (
            <nav class="mobile left-0 right-0">
              <ul
                className={
                  ' lg-w-full p-8  text-black z-10 absolute bg-white   sm:text-lg lg:text-xl  lg-hidden right-0 left-0  '
                }
                g
              >
                <Link to="/">
                  <li className=" my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold  ">
                    Home
                  </li>
                </Link>
                <li className=" my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold ">
                  About Us
                </li>
                <li className=" my-8 text-lg font-head  hover:border-b-2 border-violet-400 hover:font-bold ">
                  Our Service
                </li>
                <li className=" my-8 text-lg font-head hover:border-b-2 border-violet-400 hover:font-bold  focus:ring-red-300 ">
                  Post a House
                </li>
                <div className="flex  text-button gap-2   lg-hidden text-2xl ">
                  <div>
                    <h3>
                      <Link to="/login">
                        <span class="text-2xl font-head hover:border-b-2 border-violet-400 hover:text-black">
                          login
                        </span>
                      </Link>
                      /
                      <Link to="/signup">
                        <span class="text-2xl  font-head hover:border-b-2 border-violet-400 hover:text-black">
                          register
                        </span>
                      </Link>
                    </h3>
                  </div>
                  <div class="pt-2">
                    <img class="" src={login} alt="logo" />
                  </div>
                </div>
              </ul>
            </nav>
          ) : (
            <ul className="DESKTOP-MENU sm-gap-2 md:gap-4 hidden w-full  md:flex ">
              <Link to="/">
                <li className=" lg:text-xl font-head hover:border-b-2 border-violet-400 md:text-xl hover:text-button  ">
                  Home
                </li>
              </Link>
              <li className=" lg:text-xl font-head hover:border-b-2 md:text-xl  border-violet-400 hover:text-button ">
                About Us
              </li>
              <Link to="/boomarks">
                <li className=" lg:text-xl font-head hover:border-b-2 md:text-xl   border-violet-400 hover:text-button ">
                  Our Service
                </li>
              </Link>
              <li className=" lg:text-xl font-head hover:border-b-2 md:text-xl  border-violet-400 hover:text-button  ">
                Post a House
              </li>
              <div className="flex  text-button lg:ml-16 items-center lg-hidden  ">
                <h3>
                  <Link to="/login">
                    <span class="text-xl font-head hover:border-b-2 md:text-lg lg:text-xl  border-violet-400 hover:text-black">
                      login
                    </span>
                  </Link>
                  /
                  <Link to="/signup">
                    <span class="text-xl font-head text-bold lg:text-xl hover:border-b-2 border-violet-400 hover:text-black">
                      register
                    </span>
                  </Link>
                </h3>
              </div>
              <div class="pt-2">
                <img src={login} alt="logo" />
              </div>
            </ul>
          )}
        </section>
      </nav>
    </header>
  );
}

export default Header;
