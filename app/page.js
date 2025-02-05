"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function Home() {
  const [text, setText] = useState("");

  const router = useRouter()

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  };

  return (
    <main>
      <section className="bg-[#254F1A] min-h-screen grid grid-cols-2 ">
        <div className=" flex  justify-center flex-col ml-[10vw] gap-6">
          <p className="text-yellow-300 font-extrabold text-6xl  ">
            Everything you are. In one, simple link in bio.
          </p>
          <p className="text-yellow-300 text-xl">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex  gap-2 ">
            <input
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="p-3 rounded-md focus:outline-green-700"
              placeholder="Enter your handle"
              type="text"
            />
            <button
              onClick={() => createTree()}
              className="bg-pink-200 p-3 rounded-full font-semibold hover:bg-pink-300"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-center flex-col mr-[10vw]">
          <img className="w-[35vw]" src="/landing.png" alt="landing_img" />
        </div>
      </section>
      <section className="bg-green-700 min-h-screen "></section>
    </main>
  );
}
