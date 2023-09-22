import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  // const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
    } else {
      setUser(false);
    }
  });
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// element={user ? <Home /> : <Navigate to="/login" />}
export default App;
