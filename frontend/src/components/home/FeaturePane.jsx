import RoadmapGenerator from "../../pages/roadmap/roadmapGenerator";
import ResumeFeature from "../../pages/resume/resumeFeature";

export const FeaturePane = ({ featureId, closeFeature, theme, setTheme }) => {
  const featureContent = {
    roadmap: <RoadmapGenerator theme={theme} setTheme={setTheme} />,
    resume: <ResumeFeature theme={theme} setTheme={setTheme} />,
    opportunity: (
      <div className="bg-base-100 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">Find Opportunities</h3>
        <p className="mb-4">
          Discover job opportunities, internships, and events tailored to your profile.
        </p>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input type="text" placeholder="e.g. Software Engineer" className="input input-bordered" />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" placeholder="e.g. San Francisco, CA" className="input input-bordered" />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled selected>Select type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        <button className="btn btn-secondary w-full">Find Opportunities</button>
      </div>
    ),
    interviews: (
      <div className="bg-base-100 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">Mock Interview Practice</h3>
        <p className="mb-4">
          Practice interview scenarios with AI feedback to improve your performance.
        </p>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Interview Type</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled selected>Select type</option>
            <option>Behavioral</option>
            <option>Technical</option>
            <option>System Design</option>
            <option>Case Study</option>
          </select>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Position</span>
          </label>
          <input type="text" placeholder="e.g. Frontend Developer" className="input input-bordered" />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Experience Level</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled selected>Select level</option>
            <option>Junior</option>
            <option>Mid-level</option>
            <option>Senior</option>
          </select>
        </div>

        <button className="btn btn-info w-full">Start Practice Interview</button>
      </div>
    ),
    mentorship: (
      <div className="bg-base-100 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">Find a Mentor</h3>
        <p className="mb-4">
          Connect with industry professionals for personalized career guidance.
        </p>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Industry</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled selected>Select industry</option>
            <option>Software Development</option>
            <option>Data Science</option>
            <option>UX/UI Design</option>
            <option>Product Management</option>
            <option>Digital Marketing</option>
          </select>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Goal</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled selected>Select goal</option>
            <option>Career Transition</option>
            <option>Skill Development</option>
            <option>Interview Preparation</option>
            <option>Salary Negotiation</option>
            <option>Leadership Development</option>
          </select>
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Additional Details</span>
          </label>
          <textarea className="textarea textarea-bordered h-24" placeholder="Tell us more about what you're looking for in a mentor..."></textarea>
        </div>

        <button className="btn btn-warning w-full">Find Mentors</button>
      </div>
    ),
    community: (
      <div className="bg-base-100 rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-4">Community Resources</h3>
        <p className="mb-4">
          Connect with peers, mentors, and industry experts in our community platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-base-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" width="20" height="20">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" fill="currentColor" />
              </svg>
              Discord Community
            </h4>
            <p className="text-sm mb-4">Join technical discussions and get quick help from peers.</p>
            <button className="btn btn-sm btn-success w-full">Join Discord</button>
          </div>

          <div className="bg-base-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
              </svg>
              Slack Workspace
            </h4>
            <p className="text-sm mb-4">Network with professionals and join industry channels.</p>
            <button className="btn btn-sm btn-success w-full">Join Slack</button>
          </div>
        </div>

        <div className="bg-base-200 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">Upcoming Events</h4>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Resume Workshop</span>
              <span className="text-sm opacity-70">Tomorrow, 2 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Tech Interview Prep</span>
              <span className="text-sm opacity-70">Friday, 6 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Networking Mixer</span>
              <span className="text-sm opacity-70">Next Tuesday, 7 PM</span>
            </li>
          </ul>
        </div>

        <button className="btn btn-success w-full">Explore All Resources</button>
      </div>
    )
  };

  return (
    <div className="w-1/2 bg-base-200 overflow-y-auto transition-all duration-500 ease-in-out">
      <div className="flex justify-end items-center bg-[#6c7675] text-white">
        <button
          onClick={closeFeature}
          className="btn btn-sm btn-ghost rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Render the content for the active feature */}
      <div className="animate-fadeIn">
        {featureContent[featureId]}
        {console.log("Active feature: ", featureId)}
      </div>
    </div>
  );
};