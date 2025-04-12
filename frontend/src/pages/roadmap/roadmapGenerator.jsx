import React, { useState } from "react";
import RoadmapTree from "./roadmapPage";

const RoadmapGenerator = () => {
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(0);
  const [generatedTopic, setGeneratedTopic] = useState("");

  const handleGenerate = () => {
    if (count < 10 && topic.trim()) {
      setCount((prev) => prev + 1);
      setGeneratedTopic(topic);
      setTopic("");
    }
  };

  const quickTags = ["OAuth", "UI / UX", "SRE", "DevRel"];

  return (
    <div className="flex min-h-screen">
      
      {/* Left Panel */}
      <div
        className={`bg-[#262624] text-center flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          generatedTopic ? "w-0 overflow-hidden" : "w-full"
        }`}
      >
        <div className="w-full flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl text-white font-bold mb-2">Generate roadmaps with AI</h1>
          <p className="text-gray-500 mb-6">
            Enter a topic and let the AI generate a roadmap for you
          </p>

          <div className="flex items-center w-full max-w-xl mb-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a topic to generate a roadmap for"
              className="border-none flex-grow px-4 py-2 border bg-[#1c2229] border-gray-300 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleGenerate}
              disabled={!topic.trim() || count >= 10}
              className="bg-gray-600 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ✨ Generate
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {quickTags.map((tag) => (
              <button
                key={tag}
                className="bg-gray-100 text-sm text-black px-3 py-1 rounded-full hover:bg-gray-200 border border-gray-300"
                onClick={() => setTopic(tag)}
              >
                {tag} <span className="ml-1">↗</span>
              </button>
            ))}
            <button className="bg-gray-900 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1 hover:bg-gray-800">
              Explore AI Roadmaps 🚀
            </button>
          </div>

          <p className="text-gray-600 mb-2">
            You have generated <strong>{count} of 10</strong> roadmaps today.
          </p>

          <a href="#" className="text-blue-600 hover:underline text-sm">
            Need to generate more? <strong>Click here.</strong>
          </a>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className={`bg-[#1a1a1a] overflow-auto transition-all duration-300 ease-in-out ${
          generatedTopic ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      >
        {generatedTopic && (
          <div className="">
            <RoadmapTree item={generatedTopic} setItem = {setGeneratedTopic} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapGenerator;
