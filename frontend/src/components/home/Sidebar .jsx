import { useState } from "react";
import {
  LayoutDashboard,
  UserCircle,
  Code,
  Settings,
  HelpCircle,
  Cpu,
  PanelsTopLeft,
  ArrowRightToLine,
} from "lucide-react";
import { NavItem } from "./NavItem";

export const Sidebar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard"); // ✅ Default active nav

  const navItems = [
    { id: "profile", icon: <UserCircle size={20} />, label: "Profile" },
    { id: "dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { id: "code", icon: <Code size={20} />, label: "Resources" },
    { id: "settings", icon: <Settings size={20} />, label: "Settings" },
    { id: "help", icon: <HelpCircle size={20} />, label: "Help" },
  ];

  const showTooltip = (id) => setActiveTooltip(id);
  const hideTooltip = () => setActiveTooltip(null);
  const handleNavClick = (id) => setActiveNav(id); // ✅ Update active nav

  return (
    <div className="flex flex-col w-18 bg-base-100 border-r border-base-300 text-primary-content">
      {/* Logo */}
      <div
        className="flex justify-center items-center h-12 transition-opacity duration-200 rounded-sm hover:bg-base-200 m-1 cursor-pointer relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <PanelsTopLeft
          size={20}
          className={`text-primary absolute transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <ArrowRightToLine
          size={20}
          className={`text-primary absolute transition-all duration-200 transform ${
            hovered ? "opacity-100 scale-110" : "opacity-0 scale-100"
          }`}
        />
      </div>

      {/* Nav Items */}
      <div className="flex-grow flex flex-col items-center py-1 border-t border-base-300">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={activeTooltip === item.id}
            isCurrent={activeNav === item.id} // ✅ Pass active state
            onClick={() => handleNavClick(item.id)} // ✅ Handle click
            onMouseEnter={() => showTooltip(item.id)}
            onMouseLeave={hideTooltip}
          />
        ))}
      </div>
    </div>
  );
};
