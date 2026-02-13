import { motion } from 'framer-motion';

const Media = () => {
    const images = [
        'images/WhatsApp%20Image%202026-02-13%20at%2017.44.23.jpeg',
        'images/WhatsApp%20Image%202026-02-13%20at%2017.44.24.jpeg',
        'images/WhatsApp%20Image%202026-02-13%20at%2017.44.25.jpeg',
        'images/WhatsApp%20Image%202026-02-13%20at%2017.44.26.jpeg',
        'images/WhatsApp%20Image%202026-02-13%20at%2017.46.25.jpeg',
        'images/WhatsApp%20Image%202026-02-13%20at%2017.46.52.jpeg'
    ];

    return (
        <section id="media" className="py-24 bg-[#0a0a0a] overflow-hidden">
            <div className="px-6 mb-12 flex items-end justify-between max-w-7xl mx-auto">
                <div>
                    <span className="text-electric-blue font-sporty tracking-widest text-sm mb-2 block uppercase">Visual Journey</span>
                    <h2 className="text-5xl md:text-7xl font-sporty font-black uppercase">Field <span className="text-gradient">Moments</span></h2>
                </div>
                <p className="text-gray-500 max-w-xs text-sm hidden md:block">
                    Capturing the spirit of competition and the elegance of the beautiful game.
                </p>
            </div>

            <div className="flex gap-4 px-4 overflow-x-auto pb-10 scrollbar-hide no-scrollbar">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex-none w-[300px] md:w-[500px] h-[400px] md:h-[600px] relative group overflow-hidden rounded-sm"
                    >
                        <img
                            src={img}
                            alt={`Match day ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                            <div>
                                <p className="text-gold font-bold mb-1">STADIUM LIGHTS</p>
                                <p className="text-white text-sm font-light uppercase tracking-[0.2em]">Championship Final 2025</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Media;
