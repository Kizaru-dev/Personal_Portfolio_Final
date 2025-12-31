import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Terminal, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-2"
                        >
                            About <span className="text-accent">Me</span>
                        </motion.h2>
                        <div className="h-1 w-20 bg-accent mb-8 rounded-full"></div>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-semibold text-white mb-4"
                        >
                            I'm a Backend Developer
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-textSub leading-relaxed mb-8"
                        >
                            Specialized in server-side applications and database management.
                            Passionate about optimizing backend systems and ensuring high performance.
                            I build robust APIs and microservices that power complex web applications.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="p-4 bg-secondary rounded-lg border border-slate-700/50 hover:border-accent/50 transition-colors"
                            >
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-3">
                                    <Server size={24} />
                                </div>
                                <h4 className="text-white font-medium">Backend Expert</h4>
                                <p className="text-sm text-textSub">SpringBoot & Java</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="p-4 bg-secondary rounded-lg border border-slate-700/50 hover:border-accent/50 transition-colors"
                            >
                                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-3">
                                    <Database size={24} />
                                </div>
                                <h4 className="text-white font-medium">Database Pro</h4>
                                <p className="text-sm text-textSub">MySQL & MongoDB</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="md:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop"
                                alt="Coding"
                                className="w-full h-auto object-cover"
                            />

                            {/* Stats overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20 flex justify-around">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">5+</p>
                                    <p className="text-xs text-textSub">Years Experience</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">50+</p>
                                    <p className="text-xs text-textSub">Projects Completed</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-white">100%</p>
                                    <p className="text-xs text-textSub">Client Satisfaction</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
