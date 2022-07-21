import Image from "next/image";
import logo from "../public/logo.svg";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";

import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function SearchHeader() {
   const router = useRouter();
   const searchInputRef = useRef(null);

   const search = (e) => {
      e.preventDefault();

      const term = searchInputRef.current.value;

      if (!term) return;

      router.push(`/search?term=${term}`);
   };

   return (
      <header className="sticky top-0 bg-white">
         <div className="flex w-full p-6 items-center">
            <Image
               src={logo}
               height={40}
               width={120}
               alt="logo"
               className="cursor-pointer"
               onClick={() => router.push("/")}
            />
            <form className="flex flex-grow customTransition border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full hover:shadow-lg focus-within:shadow-lg max-w-3xl items-center">
               <input
                  className="flex-grow w-full focus:outline-none"
                  ref={searchInputRef}
                  type="text"
               />
               <XIcon
                  className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-150 transform hover:scale-125"
                  onClick={() => (searchInputRef.current.value = "")}
               />
               <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
               <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
               <button hidden type="submit" onClick={search}>
                  Search
               </button>
            </form>
            <Avatar className="ml-auto" />
         </div>

         <HeaderOptions />
      </header>
   );
}

export default SearchHeader;
