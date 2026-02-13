import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                    <span className="text-gold font-sporty tracking-widest text-sm mb-2 block uppercase">Connect</span>
                    <h2 className="text-5xl md:text-7xl font-sporty font-black uppercase mb-8">Let's <span className="text-gradient">Talk</span></h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        For professional inquiries, sponsorship opportunities, or media requests, feel free to reach out. Experience the "Messy" effect.
                    </p>

                    <div className="space-y-6">
                        {[
                            { icon: Mail, label: 'Email', value: 'contact@abdullahkhalid.com' },
                            { icon: Phone, label: 'Phone', value: '+20 123 456 7890' },
                            { icon: MapPin, label: 'Location', value: 'Cairo, Egypt / Riyadh, KSA' }
                        ].map((info, idx) => (
                            <div key={idx} className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                    <info.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">{info.label}</p>
                                    <p className="text-white font-medium">{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-6 mt-12">
                        {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                            <a key={idx} href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-morphism p-10 rounded-3xl"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-gold transition-colors" placeholder="Lionel..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-gold transition-colors" placeholder="leo@goal.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-gold transition-colors" placeholder="Partnership Proposal" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                            <textarea rows="5" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:outline-none focus:border-gold transition-colors resize-none" placeholder="I would like to discuss..."></textarea>
                        </div>
                        <button className="w-full py-5 bg-gradient-to-r from-gold to-accent text-black font-bold rounded-lg uppercase tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-1">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
