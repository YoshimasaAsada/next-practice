"use client";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="md:hidden p-4 text-white"
        onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <div
        className={`h-screen text-white w-64 p-5 bg-gray-800 fixed md:relative z-10 md:z-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Link href="/">
          <h2 className="text-2xl font-bold mb-5">Sidebar</h2>
        </Link>
        <ul>
          <li className="mb-4">
            <Link href="/sample1">
              <p className="block py-2 px-4 rounded hover:bg-gray-700">
                Sample1
              </p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/sample2">
              <p className="block py-2 px-4 rounded hover:bg-gray-700">
                Sample2
              </p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/sample3">
              <p className="block py-2 px-4 rounded hover:bg-gray-700">
                Sample3
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
