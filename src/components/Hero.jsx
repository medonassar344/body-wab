import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('images/WhatsApp%20Image%202026-02-13%20at%2017.44.23.jpeg')] bg-cover bg-center opacity-30 scale-105"></div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]"></div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="text-gold font-sporty tracking-[0.3em] text-sm md:text-base mb-4 block">
                        PROFESSIONAL FOOTBALLER
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-6xl md:text-9xl font-sporty font-black mb-6 leading-tight"
                >
                    ABDULLAH <br />
                    <span className="text-gradient">KHALED</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-10"
                >
                    Excellence on the pitch, precision in every move.
                    Known as <span className="text-gold font-bold">"Messi"</span> for extraordinary ball control and tactical brilliance.
                </motion.p>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="#videos"
                        className="px-10 py-4 bg-gold hover:bg-accent text-black font-bold rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.4)] text-center no-underline"
                    >
                        WATCH HIGHLIGHTS
                    </a>
                    <a
                        href="#stats"
                        className="px-10 py-4 border border-white/20 hover:border-gold/50 glass-morphism rounded-sm transition-all duration-300 text-center no-underline"
                    >
                        VIEW STATISTICS
                    </a>
                </motion.div>
            </div>

            {/* Animated scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2"
            >
                <div className="w-1 h-2 bg-gold rounded-full"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
