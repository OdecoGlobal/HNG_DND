import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    console.log(email, password, displayName);
  };
  return (
    <>
      {error && <p className="mb-5 text-center">{error}</p>}

      <div className="flex justify-center min-h-full mt-12">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>
            <span>Display Name:</span>

            <input
              type="text"
              placeholder="Enter username"
              className="forms"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
          <label>
            <span>Email Address:</span>
            <input
              type="email"
              placeholder="Enter Email"
              className="forms"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password:</span>
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
              Signup
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
        </form>
      </div>
    </>
  );
}
