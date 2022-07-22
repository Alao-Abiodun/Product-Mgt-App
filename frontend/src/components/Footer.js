import React from "react";
import TwitterLogo from "../assets/twitter.svg";
import FacebookLogo from "../assets/facebook.svg";
import InstagramLogo from "../assets/instagram.svg";
import footerLogo from "../assets/footerLogo.svg";
import location from "../assets/location.svg";

function Footer() {
  return (
    <div class="bg-dark m-auto ">
      <div class="m-auto md:m-0">
        <div className="text-white w-2/4 flex m-auto text-primary text-3xl text-center md:text-2xl py-5 justify-center items-center">
          <h1>Get Latest Updates From Us</h1>
        </div>
        <div className="text-white w-2/4 flex m-auto justify-center items-center">
          <form class="flex flex-row w-full rounded rounded-1-lg">
            <input
              class="h-16 bg-white text-grey-darker rounded-l-lg text-grey-darkest  font-primary w-full py-1 px-2 outline-none text-lg text-black"
              type="text"
              placeholder="Email"
            />
            <span class="flex items-center bg-white rounded rounded-l-none border-0 px-3 font-primary text-grey-100">
              <button class="bg-gredient-dark  bg-button hover:bg-dark  text-lg text-white font-primary w py-3 px-6 rounded">
                Subscibe
              </button>
            </span>
          </form>
        </div>
      </div>
      <div class="md:flex  flex-cols sm:grid grid-cols-2 gap-10 md:justify-evenly justify-between m-auto md:ml-20 pt-10 md:pb-20 w-4/5  ">
        <div class="md:w-1/6">
          <div className="header-logo md:flex flex-cols ">
            <img src={footerLogo} alt="logo" />
          </div>
          <div className="flex  pt-5 ">
            <div className=" text-gray-400">
              <img src={location} alt="logo" />
            </div>
            <h3 className=" text-gray-400 word-break font-primary font-sans w-5/6 text-xl ">
              34, Grazac Road Idi-aba, Abeokuta, Ogun
            </h3>
          </div>
          <div className="flex  ml-5 my-5   text-gray-400 gap-4  bg-primary">
            <img src={FacebookLogo} alt="fb" />
            <img src={TwitterLogo} alt="fb" />
            <img src={InstagramLogo} alt="fb" />
          </div>
        </div>

        <div>
          <ul className="no-underline lg:py-4 text-gray-400 text-xl">
            <li className="font-primary mb-4 text-white text-2xl">Discover</li>
            <li className="mb-4">lagos</li>
            <li className="mb-4">Ogun</li>
            <li className="mb-4">Abuja</li>
          </ul>
        </div>

        <div>
          <ul className=" font-primary text-gray-400 text-xl">
            <li className="font-head mb-4 md:pt-4  text-white text-2xl">
              List of Categories
            </li>
            <li className="mb-4">Apartment</li>
            <li className="mb-4">Penthouse</li>
            <li className="mb-4">House</li>
            <li className="mb-4">Offices</li>
            <li className="mb-4">Rent</li>
          </ul>
        </div>

        <div className="">
          <ul className="no-underline py-4 text-gray-400 text-xl">
            <li className="font-primary mb-4 text-white  text-2xl">
              Quick Link
            </li>

            <li className="mb-4">Newsletter</li>

            <li className="mb-4">About us</li>

            <li className="mb-4">contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
