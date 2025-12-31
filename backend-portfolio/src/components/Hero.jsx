import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Code } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-primary z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-primary"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            Priyanshu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Backend Developer
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-textSub max-w-xl leading-relaxed"
                    >
                        Building Scalable & Efficient Server-Side Solutions. Specialized in high-performance APIs, database optimization, and cloud architecture.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <a href="#contact" className="px-8 py-3 bg-btnBlue hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
                            Get In Touch
                            <ArrowRight size={18} />
                        </a>
                        <a href="#projects" className="px-8 py-3 border border-slate-600 hover:border-accent text-white rounded-lg font-medium transition-all hover:bg-slate-800">
                            View Projects
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-6 pt-8 text-textSub"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-primary bg-slate-700 flex items-center justify-center text-xs overflow-hidden`}>
                                    <img src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm">Trusted by awesome clients</p>
                    </motion.div>
                </div>

                {/* Right side illustration or code snippet placeholder */}
                <div className="md:w-2/5 mt-12 md:mt-0 relative hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30"></div>
                        <div className="relative bg-secondary p-6 rounded-2xl border border-slate-700 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-xs text-slate-400 ml-2">server.js</span>
                            </div>
                            <pre className="text-xs sm:text-sm font-mono text-blue-300 overflow-x-auto">
                                {`const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize Database connection
await db.connect();

app.get('/api/v1/status', (req, res) => {
  res.status(200).json({
    status: 'active',
    uptime: process.uptime(),
    db: 'connected'
  });
});

app.listen(port, () => {
  console.log(\`Server running on \${port}\`);
});`}
                            </pre>
                        </div>

                        {/* Floating cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-6 -right-6 bg-secondary/90 backdrop-blur p-4 rounded-xl border border-slate-700 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                    <Code size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Code Quality</p>
                                    <p className="text-sm font-bold text-white">Clean & Efficient</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
