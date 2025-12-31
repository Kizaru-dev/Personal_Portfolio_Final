import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "API Dashboard",
            category: "Full Stack",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            description: "A comprehensive dashboard for monitoring API usage and performance metrics.",
            tech: ["React", "Node.js", "Redis"]
        },
        {
            title: "E-Commerce Backend",
            category: "API Development",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
            description: "Robust backend system handling payments, inventory, and user authentication.",
            tech: ["Express", "MongoDB", "Stripe"]
        },
        {
            title: "Microservices Arch",
            category: "Systems Design",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
            description: "Scalable microservices architecture deployed on Kubernetes with event-driven design.",
            tech: ["Docker", "K8s", "RabbitMQ"]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My <span className="text-accent">Projects</span></h2>
                    <div className="h-1 w-20 bg-accent mb-4 rounded-full"></div>
                    <p className="text-textSub">Some of My Recent Work</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all group hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{project.category}</span>
                                    <div className="flex gap-2">
                                        <Github size={16} className="text-slate-400 hover:text-white cursor-pointer" />
                                        <ExternalLink size={16} className="text-slate-400 hover:text-white cursor-pointer" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-textSub text-sm mb-4 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <button className="w-full py-2 border border-slate-600 rounded text-sm text-white hover:bg-slate-700 transition-colors">
                                    View Project
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
