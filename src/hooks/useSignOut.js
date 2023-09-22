import { useState } from "react";

import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useSignOut = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const signout = async () => {
    setError(null);
    setLoading(true);
    try {
      await signOut(auth);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  return { error, loading, signout };
};
