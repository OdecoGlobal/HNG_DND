import { useState } from "react";

import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const signIn = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error("User could not sign up");
      }
      console.log(res);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return { error, loading, signIn };
};
