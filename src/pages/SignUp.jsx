import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-center min-h-full mt-12">
      <form>
        <label>
          <span>Display Name:</span>

          <input
            type="text"
            placeholder="Enter username"
            className="ml-4 placeholder:text-center rounded-lg h-10"
          />
        </label>
      </form>
    </div>
  );
}
