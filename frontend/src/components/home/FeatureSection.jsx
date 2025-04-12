import {
  FileText,
  Cpu,
  Network,
  UserCircle,
  Users,
  HelpCircle
} from "lucide-react";

export const FeatureSection = ({ openFeature }) => {
  const featureCards = [
    {
      id: "roadmap",
      title: "Generate Roadmap",
      icon: <FileText size={48} className="text-primary-content" />,
      description: "Build a personalized learning plan tailored to your goals and current skill level.",
      buttonText: "Get Started",
      buttonColor: "primary",
      bgColor: "bg-primary"
    },
    {
      id: "resume",
      title: "Resume Builder",
      icon: <Cpu size={48} className="text-accent-content" />,
      description: "Get instant AI-powered feedback on your resume and suggestions for improvement.",
      buttonText: "Build Now",
      buttonColor: "accent",
      bgColor: "bg-accent"
    },
    {
      id: "opportunity",
      title: "Opportunity Finder",
      icon: <Network size={48} className="text-secondary-content" />,
      description: "Discover internships, jobs, and events curated just for your profile and goals.",
      buttonText: "Discover",
      buttonColor: "secondary",
      bgColor: "bg-secondary"
    },
    {
      id: "interviews",
      title: "Mock Interviews",
      icon: <UserCircle size={48} className="text-info-content" />,
      description: "Practice with real interview questions and get evaluated by experts.",
      buttonText: "Practice Now",
      buttonColor: "info",
      bgColor: "bg-info"
    },
    {
      id: "mentorship",
      title: "1:1 Mentorship",
      icon: <Users size={48} className="text-warning-content" />,
      description: "Connect with industry mentors to guide your career decisions.",
      buttonText: "Book Session",
      buttonColor: "warning",
      bgColor: "bg-warning"
    },
    {
      id: "community",
      title: "Community Support",
      icon: <HelpCircle size={48} className="text-success-content" />,
      description: "Join our supportive Discord & Slack groups for peer discussions and expert help.",
      buttonText: "Join Now",
      buttonColor: "success",
      bgColor: "bg-success"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {featureCards.map((card) => (
        <div key={card.id} className="card bg-base-200">
          <div className="card-body items-center text-center">
            <div className={`${card.bgColor} p-4 rounded-lg mb-4`}>
              {card.icon}
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="text-base-content opacity-70 mb-4">
              {card.description}
            </p>
            <button
              className={`btn btn-outline btn-${card.buttonColor} rounded-full flex items-center`}
              onClick={() => openFeature(card.id)}
            >
              {card.buttonText}
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
      ))}
    </div>
  );
};