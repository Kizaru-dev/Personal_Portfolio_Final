import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Server, Database, Cloud, Layers, Box, Cpu, Globe, Code2,
    Shield, Key, GitBranch, Github, Hammer, Send, FileCode,
    Palette, Layout, Terminal, Coffee, Braces
} from 'lucide-react';

const Skills = () => {
    const [activeTab, setActiveTab] = useState("All");

    const categories = [
        "All",
        "Languages",
        "Backend",
        "Database",
        "API",
        "Security",
        "Tools",
        "Frontend"
    ];

    const allSkills = [
        { name: "Java", category: "Languages", icon: <Coffee size={24} />, color: "text-orange-600", bg: "bg-orange-600/10", border: "border-orange-600/20" },
        { name: "Spring Boot", category: "Backend", icon: <Server size={24} />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
        { name: "Spring MVC", category: "Backend", icon: <Layers size={24} />, color: "text-green-600", bg: "bg-green-600/10", border: "border-green-600/20" },
        { name: "Hibernate", category: "Backend", icon: <Database size={24} />, color: "text-yellow-600", bg: "bg-yellow-600/10", border: "border-yellow-600/20" },
        { name: "JPA", category: "Backend", icon: <Database size={24} />, color: "text-gray-400", bg: "bg-gray-400/10", border: "border-gray-400/20" },
        { name: "MySQL", category: "Database", icon: <Database size={24} />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { name: "SQL", category: "Database", icon: <Terminal size={24} />, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
        { name: "REST APIs", category: "API", icon: <Globe size={24} />, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { name: "JSON", category: "API", icon: <Braces size={24} />, color: "text-gray-300", bg: "bg-gray-300/10", border: "border-gray-300/20" },
        { name: "Spring Security", category: "Security", icon: <Shield size={24} />, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
        { name: "JWT", category: "Security", icon: <Key size={24} />, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
        { name: "Git", category: "Tools", icon: <GitBranch size={24} />, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
        { name: "GitHub", category: "Tools", icon: <Github size={24} />, color: "text-white", bg: "bg-slate-700", border: "border-slate-600" },
        { name: "Maven", category: "Tools", icon: <Hammer size={24} />, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
        { name: "Postman", category: "Tools", icon: <Send size={24} />, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
        { name: "HTML", category: "Frontend", icon: <Layout size={24} />, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
        { name: "CSS", category: "Frontend", icon: <Palette size={24} />, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { name: "JavaScript", category: "Frontend", icon: <FileCode size={24} />, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
        { name: "React", category: "Frontend", icon: <Code2 size={24} />, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" }
    ];

    const filteredSkills = activeTab === "All"
        ? allSkills
        : allSkills.filter(skill => skill.category === activeTab || (activeTab === "Frontend (Basic)" && skill.category === "Frontend"));

    return (
        <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My <span className="text-accent">Skills</span></h2>
                    <div className="h-1.5 w-24 bg-accent mx-auto mb-6 rounded-full"></div>
                    <p className="text-textSub text-lg max-w-2xl mx-auto">
                        A curated set of technologies and tools I've mastered to build scalable, high-performance applications.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeTab === category
                                ? "bg-accent text-white border-accent shadow-lg shadow-accent/25 scale-105"
                                : "bg-secondary/50 text-textSub border-slate-700 hover:border-slate-500 hover:text-white"
                                }`}
                        >
                            {category === "Frontend" ? "Frontend (Basic)" : category}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className={`group p-6 bg-secondary border ${skill.border} rounded-xl hover:border-accent hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.3)] transition-all duration-300 flex flex-col items-center gap-4 text-center cursor-default bg-gradient-to-br from-transparent to-slate-800/50`}
                            >
                                <div className={`p-4 rounded-full ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300 shadow-inner ring-1 ring-white/5`}>
                                    {skill.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{skill.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
