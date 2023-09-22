import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { auth } from "./firebase/config";

function App() {
  const user = auth.currentUser;
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
