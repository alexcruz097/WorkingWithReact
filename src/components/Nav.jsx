import React from "react";

function Nav() {
  return (
    <>
      <nav
        aria-label="Global"
        class="flex items-center justify-between p-6 lg:px-8 bg-black
"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img

            
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
              class="h-8 w-auto"
            />
          </a>
        </div>
        <div class="flex lg:hidden text-black">
          <button
            type="button"
            command="show-modal"
            commandfor="mobile-menu"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              data-slot="icon"
              aria-hidden="true"
              class="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm/6 font-semibold text-white">
            Products
          </a>
          <a href="#" class="text-sm/6 font-semibold text-white">
            Features
          </a>
          <a href="#" class="text-sm/6 font-semibold text-white">
            Marketplace
          </a>
          <a href="#" class="text-sm/6 font-semibold text-white">
            Company
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
