import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex bg-white p-5 h-fit">
      <Link to="/" className="navs">
        Home
      </Link>

      <div className="ml-auto flex items-center ">
        <Link className="navs ml-4" to="/login">
          Log In
        </Link>
        <Link className="navs ml-4">Log Out</Link>
      </div>
    </nav>
  );
}
