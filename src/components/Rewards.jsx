import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Rewards = () => {
  return (
    <div>
      <div className="bg-[#1e3932] py-3">
        <h1 className="text-white font-bold text-md w-10/12 mx-auto px-5">
          STARBUCKS® REWARDS
        </h1>
      </div>
      <div>
        <div></div>
        <div>
          <img src="https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png" />
          <h1></h1>
        </div>
      </div>

      <div className=" py-10 px-10 w-11/12 mx-auto my-10">
        <h1 className="text-center font-semibold text-3xl">
          Getting started is easy
        </h1>
        <p className="text-center text-gray-700 my-5 text-md">
          Earn Stars and get rewarded in a few easy steps.
        </p>
        <div className="flex justify-evenly">
          <div className="w-3/12 p-4 flex flex-col gap-4">
            <p className="text-3xl flex justify-center">
              <span className=" rounded-[50%] text-green-700 px-4 py-2 border-2 border-green-600 text-center">
                1
              </span>
            </p>
            <h1 className="text-center font-semibold text-lg">
              Create an account
            </h1>
            <p className="text-center text-sm">
              To get started, join now. You can also join in the app to get
              access to the full range of Starbucks® Rewards benefits.
            </p>
          </div>
          <div className="w-3/12 p-4 flex flex-col gap-4">
            <p className="text-3xl flex justify-center">
              <span className=" rounded-[50%] text-green-700 px-4 py-2 border-2 border-green-600 text-center">
                2
              </span>
            </p>
            <h1 className="text-center font-semibold text-lg">
              Order and pay how you’d like
            </h1>
            <p className="text-center text-sm">
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways. Learn how
            </p>
          </div>
          <div className="w-3/12 p-4 flex flex-col gap-4">
            <p className="text-3xl flex justify-center">
              <span className=" rounded-[50%] text-green-700 px-4 py-2 border-2 border-green-600 text-center">
                3
              </span>
            </p>
            <h1 className="text-center font-semibold text-lg">
              Earn Stars, get Rewards
            </h1>
            <p className="text-center text-sm">
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </p>
          </div>
        </div>
      </div>

      {/* get your favourites */}
      <div className="bg-[#f1f8f5] py-10 px-10 w-full my-10">
        <h1 className="text-center font-semibold text-3xl mb-5">
          Getting started is easy
        </h1>

        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg text-3xl "
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                25
                <i className="text-yellow-500 fa-solid fa-star text-sm"></i>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg text-3xl hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                100<i className="text-yellow-500 fa-solid fa-star text-sm"></i>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg text-3xl hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                200<i className="text-yellow-500 fa-solid fa-star text-sm"></i>
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg text-3xl hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
              >
                300<i className="text-yellow-500 fa-solid fa-star text-sm"></i>
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
