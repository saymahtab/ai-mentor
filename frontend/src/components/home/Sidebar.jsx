import { useState } from "react";
import {
  LayoutDashboard,
  Network,
  Users,
  UserCircle,
  Code,
  Settings,
  HelpCircle,
  Cpu
} from "lucide-react";

export const Sidebar = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const navItems = [
    {
      id: "dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    { id: "connections", icon: <Network size={20} />, label: "Connections" },
    { id: "groups", icon: <Users size={20} />, label: "Groups" },
    { id: "profile", icon: <UserCircle size={20} />, label: "Profile" },
    { id: "code", icon: <Code size={20} />, label: "Resources" },
    { id: "settings", icon: <Settings size={20} />, label: "Settings" },
    { id: "help", icon: <HelpCircle size={20} />, label: "Help" },
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
          <div key={item.id} className="relative">
            <button
              className="w-10 h-10 cursor-pointer hover:text-accent hover:bg-base-200 flex justify-center items-center text-accent/50 rounded-lg hover:bg-primary-focus"
              onMouseEnter={() => showTooltip(item.id)}
              onMouseLeave={hideTooltip}
            >
              {item.icon}
            </button>

            {/* Tooltip */}
            {activeTooltip === item.id && (
              <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-base-100 text-base-content py-1 px-3 rounded shadow-lg z-10 whitespace-nowrap">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-base-100"></div>
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};