import React from 'react'

const Footer = () => {
  return (
    <>
  <footer className="shadow-xl border border-t lg:hidden xl:hidden md:block sm:block">
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-8 font-medium rtl:text-right text-gray-500"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span className="text-black text-lg">About Us</span>
          <svg
            data-accordion-icon=""
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className="hidden"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="flex flex-col gap-5 py-4 px-8 border-b border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Our Company</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Our Coffee</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Stories and News</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Starbucks Archive</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Investor Relations</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Customer Service</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Contact Us</a>
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-8 font-medium rtl:text-right text-gray-500"
          data-accordion-target="#accordion-flush-body-2"
          aria-expanded="true"
          aria-controls="accordion-flush-body-2"
        >
          <span className="text-black text-lg">Careers</span>
          <svg
            data-accordion-icon=""
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-2"
        className="hidden"
        aria-labelledby="accordion-flush-heading-2"
      >
        <div className="flex flex-col gap-5 py-4 px-8 border-b border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Culture and Values</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Inclusion, Diversity, and Equity</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">College Achievement Plan</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Alumini Community</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">U.S. Careers</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">International Careers</a>
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-8 font-medium rtl:text-right text-gray-500"
          data-accordion-target="#accordion-flush-body-3"
          aria-expanded="true"
          aria-controls="accordion-flush-body-3"
        >
          <span className="text-black text-lg">Social Impact</span>
          <svg
            data-accordion-icon=""
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-3"
        className="hidden"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="flex flex-col gap-5 py-4 px-8 border-b border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">People</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Planet</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Environmental and Social Impact Reporting</a>
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-4">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-8 font-medium rtl:text-right text-gray-500"
          data-accordion-target="#accordion-flush-body-4"
          aria-expanded="true"
          aria-controls="accordion-flush-body-4"
        >
          <span className="text-black text-lg">For Business Partners</span>
          <svg
            data-accordion-icon=""
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-4"
        className="hidden"
        aria-labelledby="accordion-flush-heading-4"
      >
        <div className="flex flex-col gap-5 py-4 px-8 border-b border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Landlord Support Center</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Suppliers</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Corporate Gift Card Sales</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Office and Foodservice Coffee</a>
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-5">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 px-8 font-medium rtl:text-right text-gray-500"
          data-accordion-target="#accordion-flush-body-5"
          aria-expanded="true"
          aria-controls="accordion-flush-body-5"
        >
          <span className="text-black text-lg">Order and Pick Up</span>
          <svg
            data-accordion-icon=""
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-5"
        className="hidden"
        aria-labelledby="accordion-flush-heading-5"
      >
        <div className="flex flex-col gap-5 py-4 px-8 border-b border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Order on the App</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Order on the Web</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Delivery</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Order and Pick Up Options</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Explore and Find Coffee for Home</a>
          </p>
        </div>
      </div>
    </div>
    <div className=" w-11/12 mx-auto border-t-2">
      <div className="text-3xl flex justify-start gap-4 py-6">
        <a href="#">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa-brands fa-github" />
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube" />
        </a>
        <a href="#">
          <i className="fa-brands fa-discord" />
        </a>
      </div>
      <div>
        <ul className="flex flex-col gap-2 justify-between">
          <li>
            <a className="hover:underline hover:decoration-1" href="#">
              Privacy Notice
            </a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li>
            <a className="hover:underline hover:decoration-1" href="#">
              Terms of Use
            </a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li>
            <a className="hover:underline hover:decoration-1" href="#">
              Do Not Share My Personal Information
            </a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li>
            <a className="hover:underline hover:decoration-1" href="#">
              CA Supply Chain Act
            </a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li>
            <a className="hover:underline hover:decoration-1" href="#">
              Accessibility
            </a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li>
            <a className="hover:underline hover:decoration-1" href="#">
              Cookie Preferences
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-gray-500 py-4">
          © 2024 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  <footer className="border-t-2 lg:block md:hidden sm:hidden hidden mx-auto">
    <div className=" flex py-4 mx-auto justify-evenly lg:w-10/12 ">
      <div className="w-2/12">
        <h3 className="text-black text-lg py-4 font-semibold">About Us</h3>
        <div className="flex flex-col gap-5 py-4">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Our Company</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Our Coffee</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Stories and News</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Starbucks Archive</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Investor Relations</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Customer Service</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Contact Us</a>
          </p>
        </div>
      </div>
      <div className="w-2/12">
        <h3 className="text-black text-lg py-4 font-semibold">Careers</h3>
        <div className="flex flex-col gap-5 py-4">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Culture and Values</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Inclusion, Diversity, and Equity</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">College Achievement Plan</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Alumini Community</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">U.S. Careers</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">International Careers</a>
          </p>
        </div>
      </div>
      <div className="w-2/12">
        <h3 className="text-black text-lg py-4 font-semibold">Social Impact</h3>
        <div className="flex flex-col gap-5 py-4">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">People</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Planet</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Environmental and Social Impact Reporting</a>
          </p>
        </div>
      </div>
      <div className="w-2/12">
        <h3 className="text-black text-lg py-4 font-semibold">
          For Business Partners
        </h3>
        <div className="flex flex-col gap-5 py-4">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Landlord Support Center</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Suppliers</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Corporate Gift Card Sales</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Office and Foodservice Coffee</a>
          </p>
        </div>
      </div>
      <div className="w-2/12">
        <h3 className="text-black text-lg py-4 font-semibold">
          Order and Pick Up
        </h3>
        <div className="flex flex-col gap-5 py-4">
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Order on the App</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Order on the Web</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Delivery</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Order and Pick Up Options</a>
          </p>
          <p className="text-gray-500 dark:text-gray-400 hover:text-black">
            <a href="#">Explore and Find Coffee for Home</a>
          </p>
        </div>
      </div>
    </div>
    <div className=" w-9/12 lg:w-10/12  mx-auto border-t-2 px-8 py-4">
      <div className="text-3xl flex justify-start gap-4 py-6">
        <a href="#">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa-brands fa-github" />
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube" />
        </a>
        <a href="#">
          <i className="fa-brands fa-discord" />
        </a>
      </div>
      <div>
        <ul className="flex justify-between">
          <li className="hover:underline hover:decoration-1">
            <a href="#">Privacy Notice</a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li className="hover:underline hover:decoration-1">
            <a href="#">Terms of Use</a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li className="hover:underline hover:decoration-1">
            <a href="#">Do Not Share My Personal Information</a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li className="hover:underline hover:decoration-1">
            <a href="#">CA Supply Chain Act</a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li className="hover:underline hover:decoration-1">
            <a href="#">Accessibility</a>
          </li>
          <li className="w-[2px] bg-slate-500" />
          <li className="hover:underline hover:decoration-1">
            <a href="#">Cookie Preferences</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-gray-500 py-2">
          © 2024 Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</>

  )
}

export default Footer