import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./features/auth/authSlice";
import { Loader } from "lucide-react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignupPage";
import { useEffect, useState } from "react";
import RoadmapGenerator from "./pages/roadmap/roadmapGenerator";
import ProfilePage from "./pages/Profile/profile";
import WelcomePage from "./pages/welcome/Welcome";
import ResumeFeature from "./pages/resume/resumeFeature";

const App = () => {
  const { user, isCheckingAuth } = useSelector((state) => state.auth);
  const [theme, setTheme] = useState("light");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isCheckingAuth && !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div data-theme={theme}>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage theme={theme} setTheme={setTheme} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={user ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route path="/roadmap" element={<RoadmapGenerator />} />
        <Route path="/resume" element={<ResumeFeature />}/>
        <Route path="/welcome" element={<WelcomePage/>}/>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
