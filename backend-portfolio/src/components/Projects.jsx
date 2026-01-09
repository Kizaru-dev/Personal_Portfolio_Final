import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react';
import netflixBlogImage from '../assets/refined-netflix-blog.png';
const Projects = () => {
    const projects = [
        {
            title: "Netflix-Style Blogging Platform",
            category: "Full Stack",
            image: netflixBlogImage,
            description: "A premium, cinematic blogging application built with Spring Boot. Features glassmorphism, cinematic typography, and high-end Netflix-inspired UI.",
            tech: ["Spring Boot", "MySQL", "Thymeleaf", "Java 21"]
        },
        {
            title: "Secure E-Commerce Backend",
            category: "API Development",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
            description: "High-performance transactional backend heavily focused on ACID compliance and security protocols.",
            tech: ["Spring Security", "PostgreSQL", "Kafka", "Docker"]
        },
        {
            title: "Microservices Infrastructure",
            category: "Systems Design",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
            description: "Distributed banking system simulation deployed on Kubernetes with advanced fault tolerance.",
            tech: ["Kubernetes", "AWS", "Circuit Breaker", "gRPC"]
        }
    ];

    return (
        <section id="projects" className="py-24 bg-primary relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-2 text-accent font-semibold tracking-wide uppercase text-sm mb-4">
                        <Code2 size={16} />
                        <span>Portfolio</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-accent">Projects</span></h2>
                    <div className="h-1.5 w-24 bg-accent mx-auto mb-6 rounded-full"></div>
                    <p className="text-textSub text-lg max-w-2xl mx-auto">
                        Showcasing robust backend solutions and scalable architectures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary rounded-xl overflow-hidden border border-slate-800 hover:border-accent group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-56">
                                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <div className="absolute top-4 right-4 z-20 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 flex gap-2">
                                    <button className="p-2 bg-slate-900/80 backdrop-blur-sm text-white rounded-lg hover:bg-accent hover:text-white transition-colors">
                                        <Github size={18} />
                                    </button>
                                    <button className="p-2 bg-slate-900/80 backdrop-blur-sm text-white rounded-lg hover:bg-accent hover:text-white transition-colors">
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-7 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-accent px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium text-slate-400">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-transparent border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300 font-semibold flex items-center gap-2 mx-auto"
                    >
                        View More On GitHub <Github size={18} />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
