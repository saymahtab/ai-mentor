import React from 'react';

const JakeTemplate = ({ data }) => {
    return (
        <div className="font-sans text-black">
            <div className="bg-white p-6 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold mb-2">{data.name}</h1>
            </div>

            <div className="flex flex-row">
                <div className="w-1/3 bg-gray-100 p-6">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3">About Me</h2>
                        <p className="text-sm">{data.summary}</p>
                    </div>

                    <div className="mb-8">
                        <p className="text-sm mb-1">{data.contact.email}</p>
                        <p className="text-sm mb-1">{data.contact.phone}</p>
                        <p className="text-sm">{data.contact.location}</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3">Education</h2>
                        {data.education.map((edu, i) => (
                            <div key={i} className="mb-4">
                                <p className="font-bold">{edu.degree}</p>
                                <p className="text-sm">{edu.institution}</p>
                                <p className="text-sm">{edu.year}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3">Language</h2>
                        {data.languages && data.languages.map((lang, i) => (
                            <p key={i} className="text-sm mb-1">{lang}</p>
                        ))}
                        {(!data.languages || data.languages.length === 0) && (
                            <p className="text-sm mb-1">English</p>
                        )}
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3">Expertise</h2>
                        <ul className="list-none text-sm">
                            <li className="mb-1">Management Skills</li>
                            <li className="mb-1">Visionary</li>
                            <li className="mb-1">Digital Marketing</li>
                            <li className="mb-1">Negotiation</li>
                            <li className="mb-1">Critical Thinking</li>
                            <li className="mb-1">Leadership</li>
                            <li className="mb-1">Self-initiating</li>
                            <li className="mb-1">Enthusiastic</li>
                            <li className="mb-1">Diligent</li>
                        </ul>
                    </div>
                </div>

                <div className="w-2/3 p-6">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Experience</h2>
                        {data.experience && data.experience.map((exp, i) => (
                            <div key={i} className="mb-4">
                                <div className="flex justify-between">
                                    <h3 className="font-bold">{exp.title}</h3>
                                    <span>{exp.duration}</span>
                                </div>
                                <p className="font-semibold">{exp.company}</p>
                                <p className="mt-1">{exp.description}</p>
                            </div>
                        ))}
                        {(!data.experience || data.experience.length === 0) && (
                            <div className="mb-4">
                                <p className="font-bold mb-2">My First project:</p>
                                <p className="mb-2">My Portfolio Website</p>
                                <p>And Currently Working on a business based Website</p>
                            </div>
                        )}
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Skills Summary</h2>
                        <div>
                            <h3 className="font-bold mb-2">Web Development</h3>
                            <div className="mb-4">
                                <div className="flex items-center justify-between mb-1">
                                    <span>HTML & CSS</span>
                                    <span>78%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2">Programming languages</h3>
                            {data.skills && data.skills.map((skill, i) => (
                                <p key={i} className="mb-1">{skill}</p>
                            ))}
                            {(!data.skills || data.skills.length === 0) && (
                                <>
                                    <p className="mb-1">C++</p>
                                    <p className="mb-1">C programming</p>
                                    <p className="mb-1">Python</p>
                                    <p className="mb-1">HTML & CSS</p>
                                    <p className="mb-1">Basics Of JavaScript</p>
                                </>
                            )}
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-1">
                                    <span>Programming Proficiency</span>
                                    <span>81%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '81%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Achievement</h2>
                        <p className="font-bold mb-2">Top Coder of my College Batch 2023-2024</p>
                        <p>I participated In Shivathon (A type hackathon conducted In our College On yearly basis).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JakeTemplate;