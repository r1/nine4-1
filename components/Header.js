import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header class="text-white body-font">
      <div class="container mx-auto flex flex-wrap p-5 md:flex-row">
        <a class="flex title-font font-medium text-white mb-4 md:mb-0 pr-4" href="/">
          <span class="ml-3 text-3xl">NINE4</span>
        </a>
        <button
            className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
          <a class="mr-6 hover:text-white" href="/">Home</a>
          <a class="mr-6 hover:text-white" href="/contact">Contact</a>
          <a class="mr-6 hover:text-white" href="/404">404</a>
        </nav>
        <button class="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          Download
        </button>
        </div>
      </div>
    </header>
  );
}
