import React, { useState, useRef } from 'react';
import dummyProfile from '../data/dummy';
import * as html2pdf from 'html2pdf.js';
import { Download, CheckCircle, Sun, Moon } from 'lucide-react';

// Import all templates
import TemplateOne from './template/templateOne';
import TemplateTwo from './template/templateTwo';
import JakeTemplate from './template/jakes';
import ModernTemplate from './template/modernTemplate';
import CreativeTemplate from './template/creativeTemplate';
import ExecutiveTemplate from './template/executiveTemplate';

function ResumeFeature({ theme, setTheme }) {
    const [template, setTemplate] = useState('template1');
    const resumeRef = useRef();

    const handleDownload = () => {
        const opt = {
            margin: 0.5,
            filename: `${dummyProfile.name.replace(/\s+/g, '_')}_Resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        const element = resumeRef.current;

        if (element) {
            html2pdf.default()
                .from(element)
                .set(opt)
                .save()
                .catch(err => console.error("PDF Download failed:", err));
        } else {
            console.error("Resume element not found");
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Template registry - centralized place to add new templates
    const templatesRegistry = {
        'template1': {
            component: TemplateOne,
            name: 'Template One',
            description: 'Professional blue header design',
            thumbnail: 'blue-header'
        },
        'template2': {
            component: TemplateTwo,
            name: 'Template Two',
            description: 'Clean two-column layout',
            thumbnail: 'two-column'
        },
        'jake': {
            component: JakeTemplate,
            name: 'Jake Template',
            description: 'Modern developer style with green accents',
            thumbnail: 'developer'
        },
        'modern': {
            component: ModernTemplate,
            name: 'Modern Template',
            description: 'Minimalist design with blue accent',
            thumbnail: 'modern'
        },
        'creative': {
            component: CreativeTemplate,
            name: 'Creative Template',
            description: 'Artistic layout with purple theme',
            thumbnail: 'creative'
        },
        'executive': {
            component: ExecutiveTemplate,
            name: 'Executive Template',
            description: 'Professional layout for senior positions',
            thumbnail: 'executive'
        },

    };

    // Render the selected template
    const renderTemplate = () => {
        const selectedTemplate = templatesRegistry[template];
        if (selectedTemplate) {
            const TemplateComponent = selectedTemplate.component;
            // Pass theme to templates that support theming
            return selectedTemplate.supportsTheme
                ? <TemplateComponent data={dummyProfile} theme={theme} />
                : <TemplateComponent data={dummyProfile} />;
        }
        return <p>Template Not found...</p>;
    };

    // Get thumbnails for template previews
    const getThumbnailContent = (thumbnailType) => {
        switch (thumbnailType) {
            case 'blue-header':
                return (
                    <div className="w-4/5 h-full py-2 text-white">
                        <div className="h-6 bg-white bg-opacity-20 rounded mb-1"></div>
                        <div className="h-4 bg-white bg-opacity-20 rounded w-1/2 mb-1"></div>
                        <div className="h-8 bg-white bg-opacity-10 rounded"></div>
                    </div>
                );
            case 'two-column':
                return (
                    <div className="w-4/5 h-full p-2 flex">
                        <div className="w-1/3 bg-gray-300 h-full rounded"></div>
                        <div className="w-2/3 pl-2">
                            <div className="h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="h-14 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                );
            case 'developer':
                return (
                    <div className="w-4/5 h-full py-2">
                        <div className="h-6 bg-white border-l-4 border-green-300 pl-2 flex items-center rounded mb-1">
                            <div className="h-2 w-1/2 bg-white rounded"></div>
                        </div>
                        <div className="h-4 bg-white border-l-4 border-green-300 pl-2 rounded w-3/4 mb-1"></div>
                        <div className="h-8 bg-white border-l-4 border-green-300 pl-2 rounded"></div>
                    </div>
                );
            case 'modern':
                return (
                    <div className="w-4/5 h-full py-2">
                        <div className="h-8 bg-blue-50 border-l-8 border-blue-500 mb-2 flex items-center">
                            <div className="h-3 w-1/2 bg-blue-200 ml-2 rounded"></div>
                        </div>
                        <div className="flex mt-1">
                            <div className="w-1/3 pr-2">
                                <div className="h-4 bg-blue-100 rounded mb-1"></div>
                                <div className="h-6 bg-blue-50 rounded"></div>
                            </div>
                            <div className="w-2/3">
                                <div className="h-4 bg-gray-200 rounded mb-1"></div>
                                <div className="h-6 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                );
            case 'creative':
                return (
                    <div className="w-4/5 h-full py-2">
                        <div className="h-8 bg-purple-900 mb-1 rounded flex items-center justify-center">
                            <div className="h-2 w-1/2 bg-white rounded"></div>
                        </div>
                        <div className="bg-gray-100 h-4 rounded mb-1"></div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-8 bg-purple-200 rounded"></div>
                            <div className="h-8 bg-gray-200 border-l-4 border-purple-300 rounded"></div>
                        </div>
                    </div>
                );
            case 'executive':
                return (
                    <div className="w-4/5 h-full py-2">
                        <div className="h-6 border-b-4 border-gray-800 mb-2 flex items-center">
                            <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex mt-2">
                            <div className="w-1/3 pr-2">
                                <div className="h-4 bg-gray-200 border-b-2 border-gray-300 mb-2"></div>
                                <div className="h-2 w-full bg-gray-200 mb-1 rounded"></div>
                                <div className="h-2 w-full bg-gray-200 rounded"></div>
                            </div>
                            <div className="w-2/3">
                                <div className="h-4 bg-gray-200 border-b-2 border-gray-300 mb-1"></div>
                                <div className="h-8 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                );
            case 'technical':
                return (
                    <div className="w-4/5 h-full py-4">
                        <div className="h-8 bg-gray-900 mb-2 rounded flex items-center justify-center">
                            <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
                        </div>
                        <div className="h-4 border-b border-gray-300 mb-2 flex items-center">
                            <div className="h-2 w-1/3 bg-gray-300 rounded"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-10 bg-gray-100 rounded pl-2 pt-1">
                                <div className="h-1 w-1/2 bg-gray-300 rounded mb-1"></div>
                                <div className="h-1 w-3/4 bg-gray-300 rounded"></div>
                            </div>
                            <div className="h-10 bg-gray-100 rounded"></div>
                        </div>
                    </div>
                );
            default:
                return <div className="w-4/5 h-full bg-gray-200"></div>;
        }
    };

    // Get background style for thumbnails
    const getThumbnailBackground = (thumbnailType) => {
        switch (thumbnailType) {
            case 'blue-header':
                return 'bg-gradient-to-b from-blue-700 to-blue-600';
            case 'two-column':
                return 'bg-gray-200';
            case 'developer':
                return 'bg-gradient-to-r from-green-500 to-green-400';
            case 'modern':
                return 'bg-white';
            case 'creative':
                return 'bg-purple-100';
            case 'executive':
                return 'bg-white';
            case 'technical':
                return theme === 'dark' ? 'bg-gray-800' : 'bg-white';
            default:
                return 'bg-gray-100';
        }
    };

    // Get all templates as an array for rendering
    const templates = Object.entries(templatesRegistry).map(([id, templateData]) => ({
        id,
        ...templateData
    }));

    return (
        <div className={`flex flex-col max-w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} border-r p-2 overflow-x-auto`}>
                <div className="flex justify-between items-center mb-6 ">
                    <h2 className="text-lg font-bold">Choose a Template</h2>
                    <button
                        className="p-2 rounded bg-[#5deddc] font-bold text-gray-700 hover:bg-[#00d4bb] transition duration-200"
                    >
                        Resume Analyser
                    </button>
                </div>


                <div className="flex space-x-4 w-40">
                    {templates.map((t) => (
                        <div
                            key={t.id}
                            className={`w-60 border-2 rounded-lg cursor-pointer transition-all flex-shrink-0 ${template === t.id
                                ? theme === 'dark'
                                    ? 'border-blue-400 bg-blue-900 bg-opacity-25'
                                    : 'border-blue-600 bg-blue-50'
                                : theme === 'dark'
                                    ? 'border-gray-700 hover:border-blue-500'
                                    : 'border-gray-200 hover:border-blue-300'
                                }`}
                            onClick={() => setTemplate(t.id)}
                        >
                            <div className="relative w-full">
                                <div
                                    className={`h-24 rounded-t-lg flex items-center justify-center ${getThumbnailBackground(
                                        t.thumbnail
                                    )}`}
                                >
                                    {getThumbnailContent(t.thumbnail)}

                                    {template === t.id && (
                                        <div className="absolute top-2 right-2 bg-blue-600 rounded-full p-1">
                                            <CheckCircle className="h-5 w-5 text-white" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-4 w-full">
                                <h3 className="font-medium">{t.name}</h3>
                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{t.description}</p>
                                {t.supportsTheme && (
                                    <span className="inline-block mt-1 text-xs bg-blue-500 text-white px-2 py-0.5 rounded">
                                        Supports themes
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full p-2 overflow-y-auto">
                <div className={`flex justify-between items-center mb-6 ${theme === 'dark' ? 'bg-blue-900' : 'bg-[#acd7e6]'
                    } p-3 rounded-lg`}>
                    <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        Resume Preview
                    </h2>
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                        <Download className="h-5 w-5" />
                        Download PDF
                    </button>
                </div>

                <div ref={resumeRef} className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
                    <div className="border border-gray-200 shadow-sm">
                        {renderTemplate()}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ResumeFeature;