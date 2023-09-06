import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="bg-purple-600 px-3 py-5 rounded ">
        <h1 className="text-md md:text-xl font-bold text-white text-center">
          TODO APPLICATION
        </h1>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <Link className=" text-purple-500" href="/">
          List todo
        </Link>
        <Link className="btn" href="/todo/new">
          <FaPlus />
        </Link>
      </div>
    </>
  );
}
