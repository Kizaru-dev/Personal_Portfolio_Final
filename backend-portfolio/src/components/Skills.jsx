import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Container, Cloud, Layers, Box, Cpu, Globe, Code2 } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: "SpringBoot", icon: <Server size={24} />, color: "text-green-500", bg: "bg-green-500/10" },
        { name: "Java", icon: <Code2 size={24} />, color: "text-yellow-500", bg: "bg-yellow-500/10" },
        { name: "SQL", icon: <Database size={24} />, color: "text-blue-400", bg: "bg-blue-400/10" },
        { name: "MySQL", icon: <Database size={24} />, color: "text-green-600", bg: "bg-green-600/10" },
        { name: "Docker", icon: <Container size={24} />, color: "text-blue-500", bg: "bg-blue-500/10" },
        { name: "Servlet/JSP", icon: <Globe size={24} />, color: "text-pink-500", bg: "bg-pink-500/10" },
        { name: "Redis", icon: <Layers size={24} />, color: "text-red-500", bg: "bg-red-500/10" },
        { name: "Kubernetes", icon: <Box size={24} />, color: "text-blue-600", bg: "bg-blue-600/10" },
        { name: "AWS", icon: <Cloud size={24} />, color: "text-orange-500", bg: "bg-orange-500/10" },
    ];

    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My <span className="text-accent">Skills</span></h2>
                    <div className="h-1 w-20 bg-accent mb-4 rounded-full"></div>
                    <p className="text-textSub">Tools & Technologies I Use</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-4 bg-secondary border border-slate-800 rounded-lg hover:border-slate-600 hover:bg-slate-800 transition-all flex items-center gap-4 group"
                        >
                            <div className={`p-3 rounded-lg ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}>
                                {skill.icon}
                            </div>
                            <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
