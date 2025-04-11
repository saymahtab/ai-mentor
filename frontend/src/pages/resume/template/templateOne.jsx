// src/templates/TemplateOne.js
import React from 'react';

const TemplateOne = ({ data }) => {
  return (
    <div className="font-sans text-black">
      <div className="bg-blue-700 text-white  p-6">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-xl">{data.title}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-sm">
          <span>{data.contact.email}</span>
          <span>{data.contact.phone}</span>
          <span>{data.contact.location}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Summary</h2>
          <p>{data.summary}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">{exp.title}</h3>
                <span>{exp.duration}</span>
              </div>
              <p className="italic">{exp.company}</p>
              <p className="mt-1">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i}>
              <div className="flex justify-between">
                <h3 className="font-bold">{edu.degree}</h3>
                <span>{edu.year}</span>
              </div>
              <p>{edu.institution}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
