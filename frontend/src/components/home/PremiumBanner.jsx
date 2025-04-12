import { Sparkles } from "lucide-react";

export const PremiumBanner = () => {
  return (
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
  );
};