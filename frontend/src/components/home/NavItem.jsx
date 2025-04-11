import { useNavigate } from "react-router";

export const NavItem = ({ item, isActive, isCurrent, onClick, onMouseEnter, onMouseLeave }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button
        onClick={() => {
          onClick(); // ✅ Update active nav
          navigate(`/${item.id}`);
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`w-12 h-12 flex justify-center items-center rounded-sm cursor-pointer text-accent/50 
          hover:text-accent hover:bg-primary-focus 
          ${isCurrent ? "bg-base-300 text-accent" : ""}`}
      >
        {item.icon}
      </button>

      {/* Tooltip */}
      {isActive && (
        <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-base-200 text-base-content py-2 px-4 rounded shadow-lg z-10 whitespace-nowrap">
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-base-100"></div>
          {item.label}
        </div>
      )}
    </div>
  );
};
