import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Terminal, Cpu, Code2, Globe, Sparkles } from 'lucide-react';
import aboutImage from '../assets/about-fox.png';

const About = () => {
    return (
        <section id="about" className="py-24 bg-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Content - Left Side */}
                    <div className="lg:w-1/2 relative group">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-transparent to-transparent z-10"></div>
                            <img
                                src={aboutImage}
                                alt="3D Cartoon Developer"
                                className="w-full h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Stats Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3 z-20"
                            >
                                <div className="bg-secondary/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                                    <div className="text-accent text-2xl font-bold mb-1">5+</div>
                                    <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-semibold">Years Exp.</div>
                                </div>
                                <div className="bg-secondary/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                                    <div className="text-blue-400 text-2xl font-bold mb-1">50+</div>
                                    <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-semibold">Projects</div>
                                </div>
                                <div className="bg-secondary/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                                    <div className="text-emerald-400 text-2xl font-bold mb-1">100%</div>
                                    <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-semibold">Uptime</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Decorative background box */}
                        <div className="absolute -inset-4 border border-dashed border-slate-700/30 rounded-[2rem] -z-10 bg-slate-800/20 rotate-3"></div>
                    </div>

                    {/* Text Content - Right Side */}
                    <div className="lg:w-1/2 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-3 text-accent font-bold tracking-tight text-3xl md:text-4xl mb-6">
                                <Sparkles size={32} />
                                <span>About Me</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Backend Developer<br /> <span className="text-2xl md:text-3xl text-blue-500 bg-clip-text bg-gradient-to-r from-accent ">Backend Systems</span>
                            </h2>

                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Junior Backend Developer | Java | Spring Boot | Build backend systems using Java and Spring Boot,
                                focusing on REST APIs, clean architecture, and database integration. Currently seeking an entry-level
                                role to learn, grow, and contribute to real-world applications.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: <Code2 size={24} />, title: "Clean Code", desc: "Writing maintainable, efficient, and documented code.", color: "text-orange-500", bg: "bg-orange-500/10" },
                                    { icon: <Database size={24} />, title: "Database Design", desc: "Optimized schemas for performance and integrity.", color: "text-blue-500", bg: "bg-blue-500/10" },
                                    { icon: <Server size={24} />, title: "Server Management", desc: "Robust deployment and scaling strategies.", color: "text-green-500", bg: "bg-green-500/10" },
                                    { icon: <Globe size={24} />, title: "API Development", desc: "RESTful services with secure endpoints.", color: "text-purple-500", bg: "bg-purple-500/10" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center ${item.color} shrink-0`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                            <p className="text-slate-400 text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
