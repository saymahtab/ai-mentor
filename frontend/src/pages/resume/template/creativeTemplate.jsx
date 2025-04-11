import React from 'react';


const CreativeTemplate = ({data}) => {
    return (
        <div className="font-sans bg-white text-black">
            <div className="bg-purple-900 text-white px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-black mb-2">{data.name}</h1>
                    <h2 className="text-2xl font-light mb-6">{data.title}</h2>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-10">
                <div className="flex flex-wrap justify-between items-center bg-gray-100 p-4 mb-10 rounded-lg">
                    <div className="flex items-center mb-2 md:mb-0">
                        <span className="mr-4">{data.contact.email}</span>
                        <span className="mr-4">{data.contact.phone}</span>
                        <span>{data.contact.location}</span>
                    </div>
                    <div className="flex gap-4">
                        {data.contact.linkedin && (
                            <span className="text-purple-700">{data.contact.linkedin}</span>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-5">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-purple-900">Skills</h3>
                            {data.skills.map((skill, i) => (
                                <div key={i} className="mb-3">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">{skill}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-purple-600 h-2 rounded-full"
                                            style={{ width: `100%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4 text-purple-900">Education</h3>
                            {data.education.map((edu, i) => (
                                <div key={i} className="mb-3">
                                    <p className="font-semibold">{edu.degree}</p>
                                    <p>{edu.institution}</p>
                                    <p className="text-gray-600">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <h3 className="text-2xl font-bold mb-6 text-purple-900">Experience</h3>
                        {data.experience.map((exp, i) => (
                            <div key={i} className="mb-8 relative pl-6 border-l-2 border-purple-300">
                                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2 top-1"></div>
                                <div className="mb-2">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                        <h4 className="text-xl font-bold text-purple-700">{exp.title}</h4>
                                        <span className="text-gray-600">{exp.duration}</span>
                                    </div>
                                    <p className="font-medium">{exp.company}</p>
                                </div>
                                <ul className="list-disc pl-5 mt-3">
                                    <li className="mb-1">{exp.description}</li>
                                </ul>
                            </div>
                        ))}

                        <div className="mt-12 bg-purple-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-purple-900">Professional Summary</h3>
                            <p className="text-gray-700">
                                {data.summary}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeTemplate;
