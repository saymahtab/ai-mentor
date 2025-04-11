import React, { useState, useRef } from 'react';
import dummyProfile from '../data/dummy';
import * as html2pdf from 'html2pdf.js';
import { Download, CheckCircle } from 'lucide-react';

// Import all templates - we'll use dynamic import approach
import TemplateOne from './template/templateOne';
import TemplateTwo from './template/templateTwo';
import JakeTemplate from './template/jakes';
import ModernTemplate from './template/modernTemplate';
import CreativeTemplate from './template/creativeTemplate';
import ExecutiveTemplate from './template/executiveTemplate';
// import TechnicalTemplate from './template/technicalTemplate';

function ResumeFeature() {
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
        // 'technical': {
        //     component: TechnicalTemplate,
        //     name: 'Technical Template',
        //     description: 'Developer-focused with code-inspired design',
        //     thumbnail: 'technical'
        // }
    };

    // Render the selected template
    const renderTemplate = () => {
        const selectedTemplate = templatesRegistry[template];
        if (selectedTemplate) {
            const TemplateComponent = selectedTemplate.component;
            return <TemplateComponent data={dummyProfile} />;
        }
        return <p>Template Not found...</p>;
    };

    // Get thumbnails for template previews
    const getThumbnailContent = (thumbnailType) => {
        switch (thumbnailType) {
            case 'blue-header':
                return (
                    <div className="w-4/5 h-full py-4 text-white">
                        <div className="h-6 bg-white bg-opacity-20 rounded mb-2"></div>
                        <div className="h-4 bg-white bg-opacity-20 rounded w-1/2 mb-4"></div>
                        <div className="h-20 bg-white bg-opacity-10 rounded"></div>
                    </div>
                );
            case 'two-column':
                return (
                    <div className="w-4/5 h-full p-2 flex">
                        <div className="w-1/3 bg-gray-300 h-full rounded"></div>
                        <div className="w-2/3 pl-2">
                            <div className="h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="h-20 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                );
            case 'developer':
                return (
                    <div className="w-4/5 h-full py-4">
                        <div className="h-6 bg-white border-l-4 border-green-300 pl-2 flex items-center rounded mb-2">
                            <div className="h-2 w-1/2 bg-white rounded"></div>
                        </div>
                        <div className="h-4 bg-white border-l-4 border-green-300 pl-2 rounded w-3/4 mb-2"></div>
                        <div className="h-16 bg-white border-l-4 border-green-300 pl-2 rounded"></div>
                    </div>
                );
            case 'modern':
                return (
                    <div className="w-4/5 h-full py-4">
                        <div className="h-8 bg-blue-50 border-l-8 border-blue-500 mb-2 flex items-center">
                            <div className="h-3 w-1/2 bg-blue-200 ml-2 rounded"></div>
                        </div>
                        <div className="flex mt-2">
                            <div className="w-1/3 pr-2">
                                <div className="h-4 bg-blue-100 rounded mb-2"></div>
                                <div className="h-10 bg-blue-50 rounded"></div>
                            </div>
                            <div className="w-2/3">
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-10 bg-gray-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                );
            case 'creative':
                return (
                    <div className="w-4/5 h-full py-4">
                        <div className="h-8 bg-purple-900 mb-2 rounded flex items-center justify-center">
                            <div className="h-2 w-1/2 bg-white rounded"></div>
                        </div>
                        <div className="bg-gray-100 h-6 rounded mb-2"></div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-12 bg-purple-100 rounded"></div>
                            <div className="h-12 bg-gray-200 border-l-4 border-purple-300 rounded"></div>
                        </div>
                    </div>
                );
            case 'executive': 
                return (
                    <div className="w-4/5 h-full py-4">
                        <div className="h-8 border-b-4 border-gray-800 mb-2 flex items-center">
                            <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex mt-2">
                            <div className="w-1/3 pr-2">
                                <div className="h-4 bg-gray-200 border-b-2 border-gray-300 mb-2"></div>
                                <div className="h-2 w-full bg-gray-200 mb-1 rounded"></div>
                                <div className="h-2 w-full bg-gray-200 rounded"></div>
                            </div>
                            <div className="w-2/3">
                                <div className="h-4 bg-gray-200 border-b-2 border-gray-300 mb-2"></div>
                                <div className="h-12 bg-gray-100 rounded"></div>
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
                return 'bg-white';
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
        <div className="flex w-2/3 h-screen bg-gray-100">
            <div className="w-1/4 bg-white border-r p-2 overflow-y-auto">
                <h2 className="text-lg font-bold mb-6 text-black">Choose a Template</h2>

                <div className="space-y-4">
                    {templates.map((t) => (
                        <div
                            key={t.id}
                            className={`border-2 rounded-lg cursor-pointer transition-all ${template === t.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                            onClick={() => setTemplate(t.id)}
                        >
                            <div className="relative">
                                {/* Template thumbnail representation */}
                                <div className={`h-40 rounded-t-lg flex items-center justify-center ${getThumbnailBackground(t.thumbnail)}`}>
                                    {getThumbnailContent(t.thumbnail)}

                                    {template === t.id && (
                                        <div className="absolute top-2 right-2 bg-blue-600 rounded-full p-1">
                                            <CheckCircle className="h-5 w-5 text-white" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-medium text-black">{t.name}</h3>
                                <p className="text-sm text-gray-500">{t.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full p-2 overflow-y-auto">
                <div className="flex justify-between items-center mb-6 bg-[#acd7e6] p-3 rounded-lg">
                    <h2 className="text-xl font-semibold text-black">Resume Preview</h2>
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