import Image from "next/image";

export default function Avatar({ className }) {
   // console.log(url)
   return (
      <div
         className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      >
         <Image
            loading="lazy"
            height={40}
            width={40}
            src="https://pyxis.nymag.com/v1/imgs/34c/cae/ce8997338cbad42766ca705559b6e0ad6f-elon-musk-.2x.rhorizontal.w700.jpg"
            alt="profile pic"
            className="rounded-full"
         />
      </div>
   );
}
