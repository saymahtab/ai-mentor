export const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  iconBgColor, 
  iconTextColor, 
  buttonColor, 
  buttonText 
}) => {
  return (
    <div className="card bg-base-200">
      <div className="card-body items-center text-center">
        <div className={`${iconBgColor} p-4 rounded-lg mb-4`}>
          <div className={iconTextColor}>
            {icon}
          </div>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="text-base-content opacity-70 mb-4">
          {description}
        </p>
        <button className={`btn btn-outline ${buttonColor} rounded-full`}>
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};