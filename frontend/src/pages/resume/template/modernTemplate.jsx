import React from 'react';

const ModernTemplate = ({ data }) => {

    return (
        <div className="font-sans text-gray-800 max-w-4xl mx-auto bg-white">
            <div className="bg-gray-50 px-8 py-12 border-l-8 border-blue-500">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h1 className="text-4xl font-bold mb-1">{data.name}</h1>
                        <h2 className="text-2xl text-blue-600 font-light mb-4">{data.title}</h2>
                        <p className="text-gray-600 max-w-xl">{data.summary}</p>
                    </div>
                    <div className="mt-6 md:mt-0 md:text-right">
                        <p className="mb-1">{data.contact.email}</p>
                        <p className="mb-1">{data.contact.phone}</p>
                        <p className="mb-1">{data.contact.location}</p>
                        <p>{data.contact.linkedin}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-10">
                <div className="md:col-span-1">
                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gray-200">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skill, i) => (
                                <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gray-200">Education</h3>
                        {data.education.map((edu, i) => (
                            <div key={i} className="mb-3">
                                <p className="font-semibold">{edu.degree}</p>
                                <p className="text-gray-700">{edu.institution}</p>
                                <p className="text-gray-600 text-sm">{edu.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-gray-200">Professional Experience</h3>
                    {data.experience.map((exp, i) => (
                        <div key={i} className="mb-6">
                            <div className="flex flex-col sm:flex-row justify-between mb-1">
                                <h4 className="text-lg font-semibold text-blue-600">{exp.title}</h4>
                                <span className="text-gray-600">{exp.duration}</span>
                            </div>
                            <p className="font-medium">{exp.company}</p>
                            <p className="mt-2 text-gray-700">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModernTemplate;
