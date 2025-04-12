import React from 'react';
import { Cpu } from 'lucide-react'; // Assuming you're using lucide for icons

function Sidebar({ navItems, activeTooltip, showTooltip, hideTooltip, navigate }) {
    return (
        // Sidebar
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
                            onClick={() => navigate(`./${item.id}`)}
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
}

export default Sidebar;
