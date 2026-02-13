import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const Videos = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    // These could be local paths or YouTube URLs
    // For now using high-quality football vibe placeholders
    const videoHighlights = [
        {
            id: 1,
            title: "OFFICIAL MATCH REEL",
            thumb: "/images/WhatsApp Image 2026-02-13 at 17.44.23.jpeg",
            url: "/images/WhatsApp Video 2026-02-13 at 17.49.13.mp4"
        },
        {
            id: 2,
            title: "TRAINING SESSIONS",
            thumb: "/images/WhatsApp Image 2026-02-13 at 17.44.24.jpeg",
            url: null
        },
        {
            id: 3,
            title: "SKILL SHOWCASE",
            thumb: "/images/WhatsApp Image 2026-02-13 at 17.44.25.jpeg",
            url: null
        }
    ];

    return (
        <section id="videos" className="py-24 px-6 bg-[#0a0a0a] relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center mb-16"
                >
                    <span className="text-electric-blue font-sporty tracking-widest text-sm mb-2 uppercase">On the Screen</span>
                    <h2 className="text-5xl md:text-7xl font-sporty font-black text-center uppercase">Match <span className="text-gradient">Highlights</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videoHighlights.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            onClick={() => video.url && setActiveVideo(video.url)}
                            className={`group relative cursor-pointer overflow-hidden rounded-xl glass-morphism border-white/5 ${!video.url && 'opacity-70 grayscale'}`}
                        >
                            <img
                                src={video.thumb}
                                alt={video.title}
                                className="w-full h-64 object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                {video.url ? (
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(212,175,55,0.5)] mb-4"
                                    >
                                        <Play fill="currentColor" size={24} />
                                    </motion.div>
                                ) : (
                                    <span className="text-white/50 font-sporty text-xs tracking-widest">COMING SOON</span>
                                )}
                                <h3 className="text-white font-sporty font-bold tracking-wider text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {video.title}
                                </h3>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {activeVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
                        >
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
                            >
                                <X size={40} />
                            </button>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            >
                                <video
                                    src={activeVideo}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                ></video>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="mt-16 p-1 bg-gradient-to-r from-gold/20 via-white/10 to-electric-blue/20 rounded-2xl"
                >
                    <div className="bg-[#0a0a0a] rounded-2xl p-12 text-center">
                        <p className="text-gray-400 mb-6 font-medium italic">
                            "Watch my latest match performance and technical skills in action."
                        </p>
                        <button className="px-8 py-3 border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all rounded-full font-bold uppercase tracking-widest text-sm">
                            SUBSCRIBE TO CHANNEL
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Videos;
