import { FileText, Cpu, Network, UserCircle, Users, HelpCircle } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const FeatureSection = () => {
  const features = [
    {
      id: "roadmap",
      title: "Generate Roadmap",
      description: "Build a personalized learning plan tailored to your goals and current skill level.",
      icon: <FileText size={48} />,
      iconBgColor: "bg-primary",
      iconTextColor: "text-primary-content",
      buttonColor: "btn-primary",
      buttonText: "Get Started",
    },
    {
      id: "resume",
      title: "Resume Analyzer",
      description: "Get instant AI-powered feedback on your resume and suggestions for improvement.",
      icon: <Cpu size={48} />,
      iconBgColor: "bg-accent",
      iconTextColor: "text-accent-content",
      buttonColor: "btn-accent",
      buttonText: "Analyze Now",
    },
    {
      id: "opportunity",
      title: "Opportunity Finder",
      description: "Discover internships, jobs, and events curated just for your profile and goals.",
      icon: <Network size={48} />,
      iconBgColor: "bg-secondary",
      iconTextColor: "text-secondary-content",
      buttonColor: "btn-secondary",
      buttonText: "Discover",
    },
    {
      id: "interviews",
      title: "Mock Interviews",
      description: "Practice with real interview questions and get evaluated by experts.",
      icon: <UserCircle size={48} />,
      iconBgColor: "bg-info",
      iconTextColor: "text-info-content",
      buttonColor: "btn-info",
      buttonText: "Practice Now",
    },
    {
      id: "mentorship",
      title: "1:1 Mentorship",
      description: "Connect with industry mentors to guide your career decisions.",
      icon: <Users size={48} />,
      iconBgColor: "bg-warning",
      iconTextColor: "text-warning-content",
      buttonColor: "btn-warning",
      buttonText: "Book Session",
    },
    {
      id: "community",
      title: "Community Support",
      description: "Join our supportive Discord & Slack groups for peer discussions and expert help.",
      icon: <HelpCircle size={48} />,
      iconBgColor: "bg-success",
      iconTextColor: "text-success-content",
      buttonColor: "btn-success",
      buttonText: "Join Now",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          iconBgColor={feature.iconBgColor}
          iconTextColor={feature.iconTextColor}
          buttonColor={feature.buttonColor}
          buttonText={feature.buttonText}
        />
      ))}
    </div>
  );
};