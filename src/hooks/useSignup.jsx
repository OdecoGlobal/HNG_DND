import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const signup = async (email, password, displayName) => {
    setError(null);
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error("User could not sign up");
      }
      await updateProfile(res.currentUser, { displayName });
      setLoading(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
    }
  };
  return { error, loading, signup };
};
