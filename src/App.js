import React from "react";
import "./App.css";

const Features = () => {
  return (
    <div className="font-Publicsans p-0 m-0">
      <div class="hidden md:flex justify-between h-24 px-10 xl:px-28 items-center max-w-screen-2xl m-auto z-50 bg-white relative">
        <img src="images/logo_1.png" alt="" className="object-contain h-6" />
        <ul class="flex gap-4 lg:gap-8 text-gray-500 h-full items-stretch">
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
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col">
          <h1 className="text-5xl lg:text-7xl pb-9">
            Next generation digital banking
          </h1>
          <p class="text-xl text-gray-500 pb-9">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="button" aria-label="Request Invite">
            Request Invite
          </button>
        </div>
        <div className=" transform scale-200 bg-[url('./image-background.png')] bg-bg-sm md:bg-bg-lg h-96 md:h-screen bg-cover relative overflow-hidden order-1 md:order-none ">
          <img
            src="images/image-mockups.png"
            alt=""
            className="transform scale-130 md:scale-130"
          />
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-5xl lg:text-7xl pb-9">Why choose Easybank?</h1>
          <p class="text-xl text-gray-500 pb-9">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div>
          <div>
            <img src="images/icon-online.svg" alt="" />
            <h1>Online Banking</h1>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div>
            <img src="images/icon-budgeting.svg" alt="" />
            <h1>Simple Budgeting</h1>
            <p>
              See exactly where your money goes each month. Receive notifs when
              you’re close to hitting your limits.
            </p>
          </div>
          <div>
            <img src="images/icon-onboarding.svg" alt="" />
            <h1>Fast Onboarding</h1>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div>
            <img src="images/icon-api.svg" alt="" />
            <h1>Open API</h1>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
