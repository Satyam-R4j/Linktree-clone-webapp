import React from "react";

const Generate = () => {
  return (
    <div className="bg-white min-h-screen grid grid-cols-2">
      <div className="  text-white  pt-44">
        <div className="form flex justify-center  text-black  flex-col ml-[5vw] ">
        <img className="w-36" src="/logo2.svg" alt="logo with green" />
          <div className="flex flex-col gap-5 my-4">
            <input
              className="p-4  w-80  rounded-full border-2 focus:outline-yellow-600 border-black"
              type="text"
              placeholder="Choose a handle"
            />
            <div className=" flex gap-1 ">

                <input
              className="py-4  px-2 rounded-full border-2 focus:outline-yellow-600 border-black"
              type="text"
              placeholder="Enter link text"
            />
            <input
              className="py-4  px-2   rounded-full border-2 focus:outline-yellow-600 border-black"
              type="text"
              placeholder="Enter link "
            />
            <button className=" hover:bg-slate-700 w-20  font-semibold rounded-full bg-slate-900 text-white px-4 py-1 ">Add</button>
            </div>
            
            <input
              className="p-4  w-80 rounded-full border-2 focus:outline-yellow-600 border-black"
              type="text"
              placeholder="Enter link to your Picture" 
            />
            <button className=" hover:bg-slate-700 w-1/2  font-semibold rounded-full bg-slate-900 text-white p-4">Generate</button>
          </div>
        </div>
      </div>
      <div className="   overflow-y-auto h-screen">
        <img src="/generate.png" alt="generate image" />
      </div>
    </div>
  );
};

export default Generate;
