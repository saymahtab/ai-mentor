import React from 'react';

const ExecutiveTemplate = ({ data }) => {
  return (
    <div className="font-serif text-gray-800 max-w-5xl mx-auto bg-white">
      {/* Header */}
      <div className="px-10 py-8 border-b-4 border-gray-800">
        <h1 className="text-4xl font-bold mb-1">{data.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{data.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <p className="text-gray-700">{data.summary}</p>
          </div>
          <div className="text-right text-sm">
            <p className="mb-1">{data.contact.email}</p>
            <p className="mb-1">{data.contact.phone}</p>
            <p className="mb-1">{data.contact.location}</p>
            {data.contact.linkedin && <p>{data.contact.linkedin}</p>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-8">
        {/* Left Column */}
        <div className="md:col-span-1">
          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-2 mb-4">Skills</h3>
            <ul className="space-y-2">
              {data.skills.map((skill, i) => (
                <li key={i} className="flex items-start">
                  <div className="w-2 h-2 bg-gray-800 rounded-full mt-1.5 mr-2"></div>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-2 mb-4">Education</h3>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <p className="font-semibold">{edu.degree}</p>
                <p>{edu.institution}</p>
                <p className="text-gray-600 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold border-b-2 border-gray-300 pb-2 mb-6">Professional Experience</h3>

          {data.experience.map((exp, i) => (
            <div key={i} className="mb-8">
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="text-lg font-bold">{exp.title}</h4>
                <span className="text-gray-600 font-medium">{exp.duration}</span>
              </div>
              <p className="font-medium">{exp.company}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTemplate;
