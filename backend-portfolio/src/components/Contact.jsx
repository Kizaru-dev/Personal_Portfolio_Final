import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact <span className="text-accent">Me</span></h2>
                    <div className="h-1 w-20 bg-accent mb-4 rounded-full"></div>
                    <p className="text-textSub">Get In Touch</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-2/3"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placholder-slate-600"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placholder-slate-600"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-secondary border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placholder-slate-600"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="px-8 py-3 bg-btnBlue hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 w-full md:w-auto transform hover:-translate-y-1"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/3 space-y-6"
                    >
                        <div className="p-6 bg-secondary/50 rounded-xl border border-slate-800 hover:border-accent/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Email</p>
                                    <a href="mailto:contact@backendportfolio.com" className="text-white hover:text-accent transition-colors">contact@backendportfolio.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                                    <Linkedin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                                    <a href="https://linkedin.com/in/backendfolio" className="text-white hover:text-accent transition-colors">linkedin.com/in/backendfolio</a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-blue-900/20 to-secondary/50 rounded-xl border border-blue-900/30">
                            <p className="text-slate-300 text-sm leading-relaxed italic">
                                "Code is like humor. When you have to explain it, it’s bad."
                            </p>
                            <p className="text-slate-500 text-xs mt-4 font-semibold">— Cory House</p>
                        </div>
                    </motion.div>
                </div>

                {/* Footer in Contact Section */}
                <div className="border-t border-slate-800 mt-20 pt-8 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Backend-Portfolio. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
