import React from 'react';

const TemplateTwo = ({ data }) => {
    return (
        <div className="font-serif text-black">
            <div className="text-center py-6 bg-gray-50 border-b border-gray-200">
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <p className="text-xl text-gray-700">{data.title}</p>
                <div className="flex justify-center gap-4 mt-2 text-sm">
                    {data.contact.email && <span><span className="font-semibold">Email:</span> {data.contact.email}</span>}
                    {data.contact.phone && <span><span className="font-semibold">Phone:</span> {data.contact.phone}</span>}
                    {data.contact.location && <span><span className="font-semibold">Location:</span> {data.contact.location}</span>}
                    {data.contact.linkedin && <span><span className="font-semibold">LinkedIn:</span> {data.contact.linkedin}</span>}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 p-6">
                <div className="col-span-1 bg-gray-100 p-4 rounded shadow-sm">
                    <div className="mb-6">
                        <h2 className="font-bold uppercase text-lg mb-3 text-gray-800 border-b border-gray-300 pb-1">Skills</h2>
                        <ul className="list-disc pl-4 space-y-1">
                            {data.skills && data.skills.map((skill, i) => (
                                <li key={i} className="text-gray-700">{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h2 className="font-bold uppercase text-lg mb-3 text-gray-800 border-b border-gray-300 pb-1">Education</h2>
                        {data.education && data.education.map((edu, i) => (
                            <div key={i} className="mb-4">
                                <h3 className="font-bold">{edu.degree}</h3>
                                <p className="text-gray-700">{edu.institution}</p>
                                <p className="text-sm text-gray-600">{edu.year}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mb-6">
                        <h2 className="font-bold uppercase text-lg mb-3 text-gray-800 border-b border-gray-300 pb-1">Languages</h2>
                        {data.languages && data.languages.map((lang, i) => (
                            <div key={i} className="mb-2">
                                <div className="flex justify-between mb-1">
                                    <span>{lang.name}</span>
                                    <span>{lang.level}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div 
                                        className="bg-gray-600 h-1.5 rounded-full" 
                                        style={{ width: lang.proficiency }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                        {(!data.languages || data.languages.length === 0) && (
                            <div className="mb-2">
                                <div className="flex justify-between mb-1">
                                    <span>English</span>
                                    <span>Fluent</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-gray-600 h-1.5 rounded-full w-4/5"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div>
                        <h2 className="font-bold uppercase text-lg mb-3 text-gray-800 border-b border-gray-300 pb-1">Certifications</h2>
                        {data.certifications && data.certifications.map((cert, i) => (
                            <div key={i} className="mb-2">
                                <p className="font-medium">{cert.name}</p>
                                <p className="text-sm text-gray-600">{cert.issuer} | {cert.date}</p>
                            </div>
                        ))}
                        {(!data.certifications || data.certifications.length === 0) && (
                            <p className="text-sm text-gray-700 italic">Relevant certifications will be listed here</p>
                        )}
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="mb-6">
                        <h2 className="font-bold uppercase text-lg border-b-2 border-black pb-1 mb-3">Professional Summary</h2>
                        <p className="text-gray-800 leading-relaxed">{data.summary}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="font-bold uppercase text-lg border-b-2 border-black pb-1 mb-3">Experience</h2>
                        {data.experience && data.experience.map((exp, i) => (
                            <div key={i} className="mb-6">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-bold text-gray-800">{exp.title}</h3>
                                    <span className="text-gray-600">{exp.duration}</span>
                                </div>
                                <p className="italic text-gray-700 mb-2">{exp.company}</p>
                                <p className="mt-1 text-gray-800">{exp.description}</p>
                                {exp.achievements && (
                                    <ul className="list-disc pl-5 mt-2 space-y-1">
                                        {exp.achievements.map((achievement, j) => (
                                            <li key={j} className="text-gray-700">{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mb-6">
                        <h2 className="font-bold uppercase text-lg border-b-2 border-black pb-1 mb-3">Projects</h2>
                        {data.projects && data.projects.map((project, i) => (
                            <div key={i} className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-bold text-gray-800">{project.name}</h3>
                                    <span className="text-gray-600">{project.date}</span>
                                </div>
                                <p className="italic text-gray-700 mb-1">{project.technologies}</p>
                                <p className="text-gray-800">{project.description}</p>
                            </div>
                        ))}
                        {(!data.projects || data.projects.length === 0) && (
                            <div className="mb-4">
                                <h3 className="font-bold text-gray-800">Personal Portfolio Website</h3>
                                <p className="italic text-gray-700 mb-1">HTML, CSS, JavaScript</p>
                                <p className="text-gray-800">Developed a responsive personal portfolio website to showcase skills and projects.</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <h2 className="font-bold uppercase text-lg border-b-2 border-black pb-1 mb-3">Additional Information</h2>
                        {data.interests && (
                            <div className="mb-3">
                                <h3 className="font-bold text-gray-800 mb-1">Interests</h3>
                                <p className="text-gray-700">{data.interests.join(', ')}</p>
                            </div>
                        )}
                        {data.achievements && (
                            <div>
                                <h3 className="font-bold text-gray-800 mb-1">Achievements</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    {data.achievements.map((achievement, i) => (
                                        <li key={i} className="text-gray-700">{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {(!data.interests && !data.achievements) && (
                            <p className="text-gray-700 italic">Available for relocation and remote work opportunities.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateTwo;