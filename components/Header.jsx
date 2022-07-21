import pic from "../public/1.jpg";
import Avatar from "./Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";

function Header() {
   
   return (
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
         <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
         </div>
         <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p>
				<p className="link">Images</p>
				
				<ViewGridIcon className="h-10 w-10 p-2 rounded-full transition-all hover:rotate-45 hover:bg-gray-100 hover:scale-110 active:rotate-90 cursor-pointer" />

				<Avatar url={pic} />
         </div>
         
      </header>
   );
}

export default Header;
