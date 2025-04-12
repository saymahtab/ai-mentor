import { useState } from "react";
import {
  LayoutDashboard,
  Network,
  Users,
  UserCircle,
  Code,
  Settings,
  HelpCircle,
  Cpu,
} from "lucide-react";
import { NavItem } from "./NavItem";

export const Sidebar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const navItems = [
    {
      id: "dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "connections",
      icon: <Network size={20} />,
      label: "Connections",
      path: "/connections",
    },
    {
      id: "groups",
      icon: <Users size={20} />,
      label: "Groups",
      path: "/groups",
    },
    {
      id: "profile",
      icon: <UserCircle size={20} />,
      label: "Profile",
      path: "/profile",
    },
    {
      id: "code",
      icon: <Code size={20} />,
      label: "Resources",
      path: "/resources",
    },
    {
      id: "settings",
      icon: <Settings size={20} />,
      label: "Settings",
      path: "/settings",
    },
    {
      id: "help",
      icon: <HelpCircle size={20} />,
      label: "Help",
      path: "/help",
    },
  ];

  const showTooltip = (id) => {
    setActiveTooltip(id);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="flex flex-col w-16 bg-base-100 border-r border-base-300 text-primary-content">
      {/* Logo */}
      <div className="flex justify-center items-center h-18 bg-accent">
        <Cpu size={28} className="text-info-content" />
      </div>

      {/* Navigation Items */}
      <div className="flex-grow flex flex-col items-center py-4 space-y-3">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={activeTooltip === item.id}
            isCurrent={false} // you can update this logic to highlight active route
            onMouseEnter={() => showTooltip(item.id)}
            onMouseLeave={hideTooltip}
          />
        ))}
      </div>
    </div>
  );
};
