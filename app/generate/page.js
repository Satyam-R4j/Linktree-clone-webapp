"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {useSearchParams} from 'next/navigation'

const Generate = () => {
  const searchParams = useSearchParams()
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState(searchParams.get('handle'));
  const [pic, setPic] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initLinks) => {
      return initLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
   
    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
    });
    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const req = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await req.json();
    if (result.success) {
      toast.success(result.message);
      setLinks([{ link: "", linktext: "" }]);
      setPic("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-white min-h-screen grid grid-cols-2">
      <div className="overflow-y-auto h-screen scrollbar-hide  text-white  pt-44">
        <ToastContainer />
        <div className="form flex justify-center  text-black  flex-col ml-[5vw] ">
          <img className="w-36" src="/logo2.svg" alt="logo with green" />
          <div className="flex flex-col gap-5 my-4">
            <input
              value={handle || ""}
              onChange={(e) => {
                setHandle(e.target.value);
              }}
              className="p-4  w-80  rounded-full border-2 focus:outline-yellow-600 border-black"
              type="text"
              placeholder="Choose a handle"
            />
            {links &&
              links.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {" "}
                    <div className=" flex gap-1 ">
                      <input
                        value={item.linktext || ""}
                        onChange={(e) => {
                          handleChange(index, item.link, e.target.value);
                        }}
                        className="py-4  px-2 rounded-full border-2 focus:outline-yellow-600 border-black"
                        type="text"
                        placeholder="Enter link text"
                      />
                      <input
                        value={item.link || ""}
                        onChange={(e) => {
                          handleChange(index, e.target.value, item.linktext);
                        }}
                        className="py-4  px-2   rounded-full border-2 focus:outline-yellow-600 border-black"
                        type="text"
                        placeholder="Enter link "
                      />
                    </div>
                  </React.Fragment>
                );
              })}

            <button
              onClick={() => addLink()}
              className=" hover:bg-slate-700 w-20  font-semibold rounded-full bg-slate-900 text-white px-4 py-1 "
            >
              Add
            </button>

            <input
              value={pic || ""}
              onChange={(e) => {
                setPic(e.target.value);
              }}
              className="p-4   w-80 rounded-full border-2 focus:outline-yellow-600 border-black"
              type="text"
              placeholder="Enter link to your Picture"
            />
            <button
              disabled={pic == "" || handle == "" || links[0].linktext == ""}
              onClick={() => {
                submitLinks();
              }}
              className="disabled:bg-slate-500  hover:bg-slate-700 w-1/3  font-semibold rounded-full bg-slate-900 text-white p-4"
            >
              Generate
            </button>
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
