import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("linktrees");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle });

  if (!item) {
    return notFound() 
  }

  const item2 = {
    _id: {
      $oid: "67a278a78e8cc53d656b07b7",
    },
    links: [
      {
        link: "https://github.com/Satyam-R4j",
        linktext: "Github",
      },
      {
        link: "https://leetcode.com/u/Satyam-Raj/",
        linktext: "Leetcode",
      },
      {
        link: "https://www.instagram.com/___satyam_raj_rao/",
        linktext: "Instagram",
      },
    ],
    handle: "Satyam",
    pic: "https://avatars.githubusercontent.com/u/63488514?v=4",
  };
  return (
    <div className="flex min-h-screen bg-green-600  border-zinc-300 justify-center">
      {item && (
        <div className="photo flex justify-start items-center  flex-col my-36 ">
          <img className=" rounded-full w-28 h-28" src={item.pic} alt="" />
          <span className="font-bold text-center text-xl ">@{item.handle}</span>
          <span className="my-3 w-80 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            itaque sunt eos voluptas minima.
          </span>
          <div className="links">
            {item.links.map((item, index) => {
              return (
                <div
                  className="py-4 px-2 shadow-xl w-[20vw] text-center text-lg bg-slate-300 rounded-md my-3"
                  key={index}
                >
                  {" "}
                  <Link href={item.link}>{item.linktext}</Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
