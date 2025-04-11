import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../features/auth/authSlice";
import { useState } from "react";
import {
  LayoutDashboard,
  Network,
  Users,
  UserCircle,
  Code,
  Settings,
  HelpCircle,
  Sparkles,
  FileText,
  Cpu,
} from "lucide-react";
import Header from "../components/home/Header";

const HomePage = ({theme, setTheme}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

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
    <div className="flex min-h-screen bg-base-100">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="flex-grow">
        <Header theme={theme} setTheme={setTheme} />

        {/* Hero Section */}
        <div className="px-8 py-12">
          <h1 className="text-5xl font-bold mb-2">
            Accelerate Your{" "}
            <span className="text-secondary">Career Growth</span> with
            AI-Powered Guidance
          </h1>
          <p className="text-base-content opacity-70 mb-12">
            From personalized roadmaps to resume analysis and live
            mentorship—everything you need to land your dream job, all in one
            place.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card 1: Roadmap Generator */}
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="bg-primary p-4 rounded-lg mb-4">
                  <FileText size={48} className="text-primary-content" />
                </div>
                <h3 className="card-title">Generate Roadmap</h3>
                <p className="text-base-content opacity-70 mb-4">
                  Build a personalized learning plan tailored to your goals and
                  current skill level.
                </p>
                <button className="btn btn-outline btn-primary rounded-full">
                  Get Started
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

            {/* Card 2: Resume Analyzer */}
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="bg-accent p-4 rounded-lg mb-4">
                  <Cpu size={48} className="text-accent-content" />
                </div>
                <h3 className="card-title">Resume Analyzer</h3>
                <p className="text-base-content opacity-70 mb-4">
                  Get instant AI-powered feedback on your resume and suggestions
                  for improvement.
                </p>
                <button className="btn btn-outline btn-accent rounded-full">
                  Analyze Now
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

            {/* Card 3: Opportunity Finder */}
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="bg-secondary p-4 rounded-lg mb-4">
                  <Network size={48} className="text-secondary-content" />
                </div>
                <h3 className="card-title">Opportunity Finder</h3>
                <p className="text-base-content opacity-70 mb-4">
                  Discover internships, jobs, and events curated just for your
                  profile and goals.
                </p>
                <button className="btn btn-outline btn-secondary rounded-full">
                  Discover
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

            {/* Card 4: Mock Interviews */}
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="bg-info p-4 rounded-lg mb-4">
                  <UserCircle size={48} className="text-info-content" />
                </div>
                <h3 className="card-title">Mock Interviews</h3>
                <p className="text-base-content opacity-70 mb-4">
                  Practice with real interview questions and get evaluated by
                  experts.
                </p>
                <button className="btn btn-outline btn-info rounded-full">
                  Practice Now
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

            {/* Card 5: 1:1 Mentorship */}
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="bg-warning p-4 rounded-lg mb-4">
                  <Users size={48} className="text-warning-content" />
                </div>
                <h3 className="card-title">1:1 Mentorship</h3>
                <p className="text-base-content opacity-70 mb-4">
                  Connect with industry mentors to guide your career decisions.
                </p>
                <button className="btn btn-outline btn-warning rounded-full">
                  Book Session
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

            {/* Card 6: Community Support */}
            <div className="card bg-base-200">
              <div className="card-body items-center text-center">
                <div className="bg-success p-4 rounded-lg mb-4">
                  <HelpCircle size={48} className="text-success-content" />
                </div>
                <h3 className="card-title">Community Support</h3>
                <p className="text-base-content opacity-70 mb-4">
                  Join our supportive Discord & Slack groups for peer
                  discussions and expert help.
                </p>
                <button className="btn btn-outline btn-success rounded-full">
                  Join Now
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
          </div>
          <div className="bg-base-300 rounded-lg p-6 mb-12">
            <div className="flex items-center justify-between flex-col md:flex-row gap-4">
              <div className="flex items-center gap-6 flex-col md:flex-row">
                <div className="bg-base-100 p-4 rounded-lg">
                  <div className="font-bold text-2xl flex items-center">
                    Mentor+{" "}
                    <Sparkles size={20} className="text-secondary ml-1" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    Unlock Advanced AI Tools with Mentor+
                  </h2>
                  <p className="text-base-content opacity-70">
                    AI-generated interview prep, personalized mentorship
                    suggestions, career tracking, and exclusive learning
                    resources.
                  </p>
                </div>
              </div>
              <button className="btn btn-secondary rounded-full">
                Get Mentor+
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar at the bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-base-300 text-base-content p-2 flex justify-between text-xs">
        <div className="flex items-center gap-2">
          <span>AI Mentor</span>
          <span>Beta v1.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span>ENG</span>
          <span>
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
