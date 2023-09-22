import React, { useState } from "react";
import { useSignin } from "../hooks/useSignin";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, signIn } = useSignin();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
    console.log(email, password);
  };
  return (
    <>
      {error && (
        <p className="my-4 text-center text-white mx-2 text-xl font-mono">
          {error}
        </p>
      )}

      <div className="flex justify-center min-h-full mt-12">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <label>
            <p className="detail">Email Address:</p>
            <input
              type="email"
              placeholder="Enter Email"
              className="forms"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <p className="detail">Password:</p>
            <input
              type="password"
              placeholder="Enter password"
              className="forms"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          {!loading && (
            <button className="bg-white w-fit rounded-md px-4 py-1 text-purple-600 font-bold">
              {" "}
              Login
            </button>
          )}
          {loading && (
            <button
              className="bg-white w-fit rounded-md px-4 py-1 text-purple-600 font-bold"
              disabled
            >
              {" "}
              Loading
            </button>
          )}
          <p className="text-center my-2 text-white font-bold text-lg;">OR</p>
          <Link
            to="/signup"
            className=" bg-white w-fit rounded-md px-4 py-1 text-purple-600 font-bold"
          >
            {" "}
            Signup
          </Link>
        </form>
      </div>
    </>
  );
}
