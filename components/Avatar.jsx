import Image from "next/image";

export default function Avatar({ url, className }) {
   return (
      <div className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}>
         <Image loading="lazy" height={40} width={40} src={url} alt="profile pic" className="rounded-full" />
      </div>
   );
}
