import { motion } from 'framer-motion';
import { Trophy, Activity, Image as ImageIcon, Video, Mail } from 'lucide-react';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between glass-morphism rounded-full px-8 py-3 translate-y-2">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold to-accent rounded-full flex items-center justify-center font-bold text-black border-2 border-white/20">
                        AK
                    </div>
                    <span className="font-sporty font-bold tracking-widest text-xl hidden sm:block">
                        messi<span className="text-gold">.</span>
                    </span>
                </div>

                <div className="flex items-center gap-8 text-sm font-medium tracking-wider">
                    {[
                        { name: 'HOME', icon: <Activity size={18} /> },
                        { name: 'STATS', icon: <Trophy size={18} /> },
                        { name: 'MEDIA', icon: <ImageIcon size={18} /> },
                        { name: 'VIDEOS', icon: <Video size={18} /> },
                        { name: 'CONTACT', icon: <Mail size={18} /> }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.name.toLowerCase()}`}
                            className="group flex items-center gap-2 hover:text-gold transition-colors duration-300"
                        >
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                                {item.icon}
                            </span>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
