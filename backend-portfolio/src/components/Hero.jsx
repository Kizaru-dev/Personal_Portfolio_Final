import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Code } from 'lucide-react';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update(mouse) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (100 - distance) / 100;
                        const directionX = forceDirectionX * force * 0.05;
                        const directionY = forceDirectionY * force * 0.05;
                        this.vx += directionX;
                        this.vy += directionY;
                    }
                }
            }

            draw() {
                ctx.fillStyle = 'rgba(56, 189, 248, 0.5)'; // accent color with opacity
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            // Reduced density (increased divisor from 15000 to 25000) for better performance
            const numberOfParticles = (canvas.width * canvas.height) / 25000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const mouse = { x: null, y: null };
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        canvas.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(mouse);
                particles[i].draw();

                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 - distance / 1000})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-primary z-0">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-primary pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 space-y-6 relative z-50">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            Priyanshu <br />
                            <span className="text-blue-500 bg-clip-text bg-gradient-to-r from-accent ">Backend Developer</span>
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
                                <span className="text-xs text-slate-400 ml-2">PortfolioApplication.java</span>
                            </div>
                            <div className="font-mono text-xs sm:text-sm text-blue-300 overflow-x-auto min-h-[300px]">
                                <TypewriterCode />
                            </div>
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
                                    <p className="text-xs text-slate-400">Spring Boot</p>
                                    <p className="text-sm font-bold text-white">Auto-Configured</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TypewriterCode = () => {
    const [code, setCode] = React.useState('');
    const fullCode = `@SpringBootApplication
@RestController
public class PortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "online");
        status.put("uptime", System.currentTimeMillis());
        return ResponseEntity.ok(status);
    }
}`;

    React.useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            setCode(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) {
                clearInterval(intervalId);
            }
        }, 30); // Typing speed

        return () => clearInterval(intervalId);
    }, [fullCode]);

    return (
        <pre className="text-blue-300">
            <code dangerouslySetInnerHTML={{
                __html: code.replace(/\n/g, '<br/>')
                    .replace(/\s/g, '&nbsp;')
                    .replace(/public/g, '<span class="text-orange-400">public</span>')
                    .replace(/class/g, '<span class="text-orange-400">class</span>')
                    .replace(/void/g, '<span class="text-orange-400">void</span>')
                    .replace(/static/g, '<span class="text-orange-400">static</span>')
                    .replace(/return/g, '<span class="text-orange-400">return</span>')
                    .replace(/new/g, '<span class="text-orange-400">new</span>')
                    .replace(/@SpringBootApplication/g, '<span class="text-yellow-400">@SpringBootApplication</span>')
                    .replace(/@RestController/g, '<span class="text-yellow-400">@RestController</span>')
                    .replace(/@GetMapping/g, '<span class="text-yellow-400">@GetMapping</span>')
                    .replace(/"([^"]*)"/g, '<span class="text-green-400">"$1"</span>')
            }} />
            <span className="animate-pulse">|</span>
        </pre>
    );
};


export default Hero;
