import React, { useState } from "react";
import "./App.css";
const Features = () => {
  const [visible, setVisible] = useState(false);
  const handleOpenMenu = () => {
    setVisible(!visible);
    console.log(visible);
  };

  return (
    <div className="font-['Public_Sans'] p-0 m-0">
      <div className="hidden md:flex justify-between h-24 px-10 xl:px-28 items-center bg-gray-200">
        <img src="images/logo_1.png" alt="" className="object-contain h-6" />
        <ul class="flex gap-8 text-gray-500">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">About</a>
          </li>
          <li className="link">
            <a href="#">Contact</a>
          </li>
          <li className="link">
            <a href="#">Blog</a>
          </li>
          <li className="link">
            <a href="#">Careers</a>
          </li>
        </ul>
        <button className="button" aria-label="Request Invite">
          Request Invite
        </button>
      </div>
      <div
        className="flex md:hidden justify-between h-24 px-10 items-center bg-gray-200"
        onClick={handleOpenMenu}
      >
        <img src="images/logo_1.png" alt="" className="object-contain h-6" />
        <img
          src="images/icon-hamburger.svg"
          alt=""
          className="h-3 cursor-pointer"
        />
      </div>
      {visible && (
        <div className="fixed inset-0 z-10">
          <div className="fixed inset-0 bg-gradient-to-b from-black to-white duration-300 ease-in-out opacity-50"></div>
          <div className="">
            <div
              id="show-menu"
              className="w-full absolute z-20 top-20 justify-center flex"
            >
              <img
                src="images/icon-close.svg"
                alt=""
                className="cursor-pointer w-8 h-8 right-5 top-1 p-2 absolute z-10 hover:bg-gray-200 rounded-full"
                onClick={handleOpenMenu}
              />
              <ul className="w-4/5 flex flex-col items-center gap-4 py-8 text-gray-500 text-lg font-medium">
                <li className="link">
                  <a href="#">Home</a>
                </li>
                <li className="link">
                  <a href="#">About</a>
                </li>
                <li className="link">
                  <a href="#">Contact</a>
                </li>
                <li className="link">
                  <a href="#">Blog</a>
                </li>
                <li className="link">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:pl-10 xl:pl-28 md:grid-cols-2 ">
        <div className="my-auto px-10 md:px-0 py-14 md:py-0 order-2 md:order-none text-center md:text-left">
          <h1 className="text-5xl lg:text-7xl pb-9">
            Next generation digital banking
          </h1>
          <p className="text-xl text-gray-500 pb-9">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="button w-fit" aria-label="Request Invite">
            Request Invite
          </button>
        </div>
        <div className="bg-[url('./image-background.png')] h-96 md:h-screen bg-cover relative overflow-hidden order-1 md:order-none ">
          <img
            src="images/image-mockups.png"
            alt=""
            className="bottom-0 absolute md:left-28"
          />
        </div>
      </div>
      <>
        <div className="bg-primary-dark p-10 xl:p-28 bg-slate-100">
          <div className="pb-10 lg:pb-20 md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl pb-6">Why choose Easybank?</h2>
            <p className="text-xl text-gray-500 pb-9">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
            <div className="flex flex-col items-center md:items-start">
              <img src="images/icon-online.svg" alt="" />
              <h3 className="text-2xl py-6">Online Banking</h3>
              <p className="text-gray-500 text-center md:text-left">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img src="images/icon-budgeting.svg" alt="" />
              <h3 className="text-2xl py-6">Simple Budgeting</h3>
              <p className="text-gray-500 text-center md:text-left">
                See exactly where your money goes each month. Receive notifs
                when you’re close to hitting your limits.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img src="images/icon-onboarding.svg" alt="" />
              <h3 className="text-2xl py-6">Fast Onboarding</h3>
              <p className="text-gray-500 text-center md:text-left">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <img src="images/icon-api.svg" alt="" />
              <h3 className="text-2xl py-6">Open API</h3>
              <p className="text-gray-500 text-center md:text-left">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </>
      <div className="p-10 xl:p-28">
        <h2 className="text-4xl pb-8 text-center md:text-left">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="pb-10 md:pb-0 hover:shadow-lg duration-300" e>
            <img
              src="images/image-currency.jpg"
              alt=""
              class="rounded-t-lg h-56 md:h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-xs pb-3">By Claire Robinson</p>
              <h3 className=" font-semibold pb-3 hover: ease-in-out cursor-pointer">
                Receive money in any currency with no fees
              </h3>
              <p className="text-sm text-gray-500">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="pb-10 md:pb-0 hover:shadow-lg duration-300">
            <img
              src="images/image-restaurant.jpg"
              alt=""
              className="rounded-t-lg h-56 md:h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-xs pb-3">By Wilson Hutton</p>
              <h3 className=" font-semibold pb-3 hover: ease-in-out cursor-pointer">
                Treat yourself without worrying about money
              </h3>
              <p className="text-sm text-gray-500">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="pb-10 md:pb-0 hover:shadow-lg duration-500">
            <img
              src="images/image-plane.jpg"
              alt=""
              className="rounded-t-lg h-56 md:h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-xs pb-3">By Wilson Hutton</p>
              <h3 className=" font-semibold pb-3 hover: ease-in-out cursor-pointer">
                Take your Easybank card wherever you go
              </h3>
              <p className="text-sm text-gray-500">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div className="pb-10 md:pb-0 hover:shadow-lg duration-300">
            <img
              src="images/image-confetti.jpg"
              alt=""
              className="rounded-t-lg h-56 md:h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-gray-500 text-xs pb-3">By Claire Robinson</p>
              <h3 className=" font-semibold pb-3 hover: ease-in-out cursor-pointer">
                Our invite-only Beta accounts are now live!
              </h3>
              <p className="text-sm text-gray-500">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-950 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 py-7 justify-items-center">
        <div>
          <img
            src="images/logo-white.svg"
            alt=""
            className="object-contain mb-12 w-40"
          />
          <ul className="flex gap-3">
            <li>
              <a href="www.facebook.com">
                <img
                  src="images/icon-facebook.svg"
                  alt="Facebook"
                  className="w-7"
                />
              </a>
            </li>
            <li>
              <a href="www.youtube.com">
                <img
                  src="images/icon-youtube.svg"
                  alt="YouTube"
                  className="w-7"
                />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <img
                  src="images/icon-twitter.svg"
                  alt="Twitter"
                  className="w-7"
                />
              </a>
            </li>
            <li>
              <a href="www.pinterest.com">
                <img
                  src="images/icon-pinterest.svg"
                  alt="Pinterest"
                  className="w-7"
                />
              </a>
            </li>
            <li>
              <a href="www.instagram.com">
                <img
                  src="images/icon-instagram.svg"
                  alt="Instagram"
                  className="w-7"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-24 lg:col-span-2 my-10 md:my-0 text-white">
          <ul className="flex flex-col gap-2 cursor-pointer ">
            <li className="hover:text-green-500">About Us</li>
            <li className="hover:text-green-500">Contact</li>
            <li className="hover:text-green-500">Blog</li>
          </ul>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li className="hover:text-green-500">Careers</li>
            <li className="hover:text-green-500">Support</li>
            <li className="hover:text-green-500">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:col-span-2 lg:col-auto lg:items-end gap-5 md:mt-10 ">
          <button className="button">Request Invite</button>
          <p className="text-gray-500">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
