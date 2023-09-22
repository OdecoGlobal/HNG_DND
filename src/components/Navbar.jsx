import React from "react";
import { Link } from "react-router-dom";
import { useSignOut } from "../hooks/useSignOut";

export default function Navbar({ user }) {
  const { error, loading, signout } = useSignOut();
  return (
    <nav className="flex bg-white p-5 h-fit">
      <Link to="/" className="navs">
        Home
      </Link>

      <div className="ml-auto flex items-center ">
        {!user && (
          <Link className="navs ml-4" to="/login">
            Log In
          </Link>
        )}
        {user && (
          <Link className="navs ml-4" onClick={signout}>
            Log Out
          </Link>
        )}
      </div>
    </nav>
  );
}
