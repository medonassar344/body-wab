import { motion } from 'framer-motion';
import { Target, Zap, Shield, Repeat } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }) => (
    <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        className="glass-morphism p-8 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group"
    >
        <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-10 rounded-full bg-${color}`} />
        <div className={`p-4 rounded-full bg-${color}/10 text-${color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
            <Icon size={32} />
        </div>
        <h3 className="text-4xl font-sporty font-black text-white mb-2">{value}</h3>
        <p className="text-gray-400 font-medium tracking-widest text-xs uppercase">{label}</p>
    </motion.div>
);

const Stats = () => {
    const stats = [
        { icon: Target, label: 'GOALS', value: '42', color: 'gold' },
        { icon: Repeat, label: 'ASSISTS', value: '28', color: 'electric-blue' },
        { icon: Zap, label: 'PACE', value: '98', color: 'accent' },
        { icon: Shield, label: 'DEFENSE', value: '74', color: 'white' },
    ];

    return (
        <section id="stats" className="py-24 px-6 relative bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center mb-16"
                >
                    <span className="text-gold font-sporty tracking-widest text-sm mb-2">SEASON DOMINANCE</span>
                    <h2 className="text-5xl md:text-7xl font-sporty font-black text-center">CAREER <span className="text-gradient">STATS</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <StatCard {...stat} />
                        </motion.div>
                    ))}
                </div>

                {/* Additional Player Info */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 glass-morphism p-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 border-l-4 border-l-gold"
                >
                    <div className="space-y-8">
                        <div>
                            <p className="text-gold text-xs font-bold tracking-widest mb-2 uppercase italic">Current Club</p>
                            <p className="text-3xl font-sporty">AL-MOKAWLOON AL-ARAB</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gold text-xs font-bold tracking-widest mb-2 uppercase italic">Position</p>
                                <p className="text-xl font-sporty text-white/80">FORWARD / WINGER</p>
                            </div>
                            <div>
                                <p className="text-gold text-xs font-bold tracking-widest mb-2 uppercase italic">Preferred Foot</p>
                                <p className="text-xl font-sporty text-white/80">RIGHT (STRONG)</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-gold text-xs font-bold tracking-widest mb-6 uppercase italic">Career Path</p>
                        <div className="space-y-4">
                            {[
                                { name: 'Al-Nassr Club', status: 'Former' },
                                { name: 'Genius Club', status: 'Former' },
                                { name: 'Al-Mokawloon Al-Arab', status: 'Current' }
                            ].map((club, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 hover:translate-x-2 transition-transform duration-300">
                                    <span className={`text-lg ${club.status === 'Current' ? 'text-white font-bold' : 'text-white/60'}`}>{club.name}</span>
                                    <span className={`text-[10px] px-2 py-1 rounded bg-${club.status === 'Current' ? 'gold text-black' : 'white/10 text-white/40'} font-bold`}>{club.status.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
