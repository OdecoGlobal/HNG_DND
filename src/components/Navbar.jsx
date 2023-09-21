import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex bg-white p-5 h-fit">
      <Link
        to="/"
        className="border-2 border-red-500 rounded-lg w-fit h-fit flex justify-center items-center px-5"
      >
        Home
      </Link>

      <div className="ml-auto">
        <Link>Sign Up</Link>
        <Link>Log In</Link>
        <Link>Log Out</Link>
      </div>
    </nav>
  );
}
