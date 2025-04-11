import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Calendar, ExternalLink, Download } from 'lucide-react';

// This would be imported in your actual app
const dummyProfile = {
  name: "John Doe",
  title: "Senior Software Developer",
  contact: {
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/johnsmith"
  },
  summary: "Experienced software developer with over 8 years of experience building web applications with React, Node.js, and modern JavaScript frameworks. Passionate about clean code and user experience.",
  experience: [
    {
      title: "Senior Developer",
      company: "Tech Innovations Inc.",
      duration: "2020 - Present",
      description: "Lead developer for customer-facing web applications. Improved site performance by 40% and implemented CI/CD pipeline."
    },
    {
      title: "Web Developer",
      company: "Digital Solutions",
      duration: "2017 - 2020",
      description: "Developed responsive web applications using React and Redux. Collaborated with design team to implement UI/UX improvements."
    }
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      institution: "University of Technology",
      year: "2017"
    }
  ],
  skills: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git", "TypeScript", "REST APIs", "MongoDB"]
};

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Header/Profile Card */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-32"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end">
              <div className="absolute -top-16">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-4xl font-bold text-blue-600">
                  {dummyProfile.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="mt-16 sm:ml-36 flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{dummyProfile.name}</h1>
                    <p className="text-gray-600">{dummyProfile.title}</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition-colors">
                      <Download size={16} />
                      Export Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail size={16} className="text-blue-600" />
                <span className="text-sm">{dummyProfile.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={16} className="text-blue-600" />
                <span className="text-sm">{dummyProfile.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-sm">{dummyProfile.contact.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Linkedin size={16} className="text-blue-600" />
                <a href={`https://${dummyProfile.contact.linkedin}`} className="text-sm hover:text-blue-600 flex items-center gap-1">
                  {dummyProfile.contact.linkedin}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Summary Section */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700">{dummyProfile.summary}</p>
            </div>
            
            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Work Experience</h2>
              
              <div className="space-y-8">
                {dummyProfile.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 relative">
                    <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <div className="h-3 w-3 bg-white rounded-full"></div>
                    </div>
                    <div className="mb-1">
                      <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{exp.company}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {dummyProfile.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Education Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
              {dummyProfile.education.map((edu, index) => (
                <div key={index} className="mb-3 last:mb-0">
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <div className="text-sm text-gray-600 flex flex-col sm:flex-row sm:justify-between">
                    <span>{edu.institution}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Available For Work Card */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Available for Projects</h3>
              <p className="text-white text-opacity-90 mb-4">
                Currently open to new opportunities and project collaborations.
              </p>
              <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors w-full">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;