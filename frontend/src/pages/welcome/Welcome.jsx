import { useState } from 'react';
import { Search, BarChart2, Book, FileText, HelpCircle, TrendingUp } from 'lucide-react';

export default function WelcomePage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        location: '',
        educationLevel: '',
        fieldOfStudy: '',
        currentSkills: '',
        careerPath: '',
        skillsToLearn: '',
        shortTermGoals: '',
        longTermVision: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-indigo-600">Grow.Buddy</h1>
                        </div>
                        <div className='flex gap-5'>
                            <button className='btn btn-primary'><a href="./login">Login</a></button>
                            <button className='btn btn-primary'><a href="./signup">SignUp</a></button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden">
                <div className="bg-gray-50 bg-opacity-50 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                            <div className="pt-6 px-4 sm:px-6 lg:px-8"></div>

                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 text-center">
                                <div className="sm:text-center">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                        <span className="block text-indigo-600 xl:inline">AI Mentor</span>
                                        <span className="block xl:inline"> for your career journey</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                                        Your personalized AI-powered career companion that creates custom roadmaps, provides resources, analyzes your resume, and helps you find the perfect opportunities.
                                    </p>

                                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                                            Personalized Roadmaps
                                        </span>
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            Study Resources
                                        </span>
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                            Resume Analysis
                                        </span>
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                            Opportunity Finder
                                        </span>
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                                            Doubt Solving
                                        </span>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                What Our AI Mentor Can Do For You
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                                Get personalized guidance for your career journey with our comprehensive toolset
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <BarChart2 className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Personalized Roadmaps</p>
                                    <p className="mt-2 ml-16 text-base text-gray-500">
                                        Get a customized learning journey based on your current skills and career goals.
                                    </p>
                                </div>

                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Book className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Curated Resources</p>
                                    <p className="mt-2 ml-16 text-base text-gray-500">
                                        Discover the best courses, tutorials, books, and YouTube playlists to master your desired skills.
                                    </p>
                                </div>

                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Resume Analyzer</p>
                                    <p className="mt-2 ml-16 text-base text-gray-500">
                                        Get professional feedback on your resume and suggestions to make it stand out to employers.
                                    </p>
                                </div>

                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <Search className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Opportunity Finder</p>
                                    <p className="mt-2 ml-16 text-base text-gray-500">
                                        Discover relevant opportunities from Unstop, DevFolio, LinkedIn and other platforms matching your skills.
                                    </p>
                                </div>

                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <HelpCircle className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Doubt Solving</p>
                                    <p className="mt-2 ml-16 text-base text-gray-500">
                                        Get answers to your technical questions using resources like Stack Overflow and expert knowledge.
                                    </p>
                                </div>

                                <div className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Progress Tracking</p>
                                    <p className="mt-2 ml-16 text-base text-gray-500">
                                        Monitor your learning journey and celebrate milestones as you build your skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800">
                    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                        <nav className="flex flex-wrap justify-center">
                            <div className="px-5 py-2">
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    About
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Career paths
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Learning materials
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Community
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Contact
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Terms
                                </a>
                            </div>
                            <div className="px-5 py-2">
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Privacy
                                </a>
                            </div>
                        </nav>
                        <p className="mt-8 text-center text-base text-gray-400">
                            &copy; 2025 AI Mentor, Inc. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}