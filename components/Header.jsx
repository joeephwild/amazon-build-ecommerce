import Image from "next/image";
import React from "react";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

function Header() {
  return <header>
      <div className="flex space-x-2 items-center p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
              <Image 
              src="https://links.papareact.com/f90"
              width={100}
              height={40}
              objectfit="contain"
              className="cursor-pointer" alt="amazon" />
          </div>
          {/* seasrchbar */}
          <div className="hidden sm:flex items-center rounded-md bg-yellow-400 flex-grow h-26 cursor-pointer hover:bg-yellow-500">
              <input type="text" className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4"/>
             <SearchIcon className="h-12 p-4"/>
          </div>
          <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap">
              <div className="link">
                  <p>Hello joseph omotade</p>
                  <p>Account & List</p>
              </div>
              <div className="link">
                  <p>Returns</p>
                  <p>& Orders</p>
              </div>
              <div className="relative link flex-row items-center">
                  <span className="absolute top0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                  <ShoppingCartIcon className="h-10"/>
                  <p className="hidden md:inline mt-2 ">Basket</p>
              </div>
          </div>
      </div>
      {/* bottom */}
      <div className="flex space-x-2 p-3 pl-6 items-center bg-[#232f3e] text-white text-sm">
          <p className="link flex">
              <MenuIcon className="h-6 mr-1"/>
              All
          </p>
          <p className="link">prime video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today Deals</p>
          <p className="hidden md:inline">Electronics</p>
      </div>
  </header>;
}

export default Header;
