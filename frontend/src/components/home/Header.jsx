import { useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { logoutUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function Header({ theme, setTheme }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-base-300">
      <div className="text-secondary font-bold text-2xl">GrowBuddy</div>
      <div className="flex items-center gap-4">
        <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button className="btn btn-primary rounded-full" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
