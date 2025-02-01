import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between  shadow-xl w-[85vw] fixed top-10 right-[10vw] rounded-full py-4 px-8 ">
      <div className="logo flex items-center gap-20 ">
        <Image width={130} height={130} src="/logo.svg"></Image>
        <ul  className=" flex    cursor-pointer  text-gray-500 font-semibold    ">
            {["Templates","Marketplace","Discover","Pricing","Learn"].map((item,index)=>(
                <li className=" hover:bg-slate-200 px-3 py-2 rounded-md"  key={index}>{item}</li>
            ))}
        </ul></div>
        <div className="flex gap-2">
            <button className="login hover:bg-slate-300   font-semibold bg-slate-200 rounded-md p-4">Log in</button>
            <button className="signup hover:bg-slate-700  font-semibold rounded-full bg-slate-900 text-white p-4">Sign up free</button>
        </div>

      
    </nav>
  );
};

export default Navbar;
