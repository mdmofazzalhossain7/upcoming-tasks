"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const navbuttonBasic =
  "px-4 py-2 text-sm font-semibold border-t-4 border-t-transparent sm:border-t-0 sm:border-b-4 sm:border-b-transparent rounded-md cursor-pointer";

const navbuttonActive =
  "bg-blue-50 border-t-blue-300 sm:border-b-blue-300 rounded-none cursor-default";

const navbuttonHover = "hover:bg-blue-100 active:bg-opacity-75";

const Navbar = () => {
  const pathname = usePathname();

  const matchRoutes = (route) => {
    if (route === pathname) return true;
    else return false;
  };

  return (
    <div className="flex justify-center bg-white gap-2 border-t-2 border-t-gray-200 sm:border-none shadow-sm">
      <Link href="/">
        <button
          className={`${navbuttonBasic} ${
            matchRoutes("/") ? navbuttonActive : navbuttonHover
          }`}
        >
          Home
        </button>
      </Link>
      <Link href="/posts/announcement">
        <button
          className={`${navbuttonBasic} ${
            matchRoutes("/posts/announcement")
              ? navbuttonActive
              : navbuttonHover
          }`}
        >
          Anouncements
        </button>
      </Link>
      <Link href="/posts/create">
        <button
          className={`${navbuttonBasic} ${
            matchRoutes("/posts/create") ? navbuttonActive : navbuttonHover
          }`}
        >
          Post
        </button>
      </Link>
      <Link href="/posts/todo">
        <button
          className={`${navbuttonBasic} ${
            matchRoutes("/posts/todo") ? navbuttonActive : navbuttonHover
          }`}
        >
          ToDo
        </button>
      </Link>
      <Link href="/profile">
        <button
          className={`${navbuttonBasic} ${
            matchRoutes("/profile") ? navbuttonActive : navbuttonHover
          }`}
        >
          Profile
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
