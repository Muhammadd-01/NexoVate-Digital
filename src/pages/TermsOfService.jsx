import SEO from "../components/SEO";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import { GradientText, FadeInWhenVisible } from "../components/Animations";

const TermsOfService = () => {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using the NexoVate Digital website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please refrain from using our services."
        },
        {
            title: "2. Description of Service",
            content: "NexoVate Digital provides software development, digital marketing, and creative services. We reserve the right to modify or discontinue any part of the service with or without notice."
        },
        {
            title: "3. User Responsibilities",
            content: "You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account. You agree to use our services only for lawful purposes."
        },
        {
            title: "4. Intellectual Property",
            content: "The content, organization, graphics, design, and other matters related to our services are protected under applicable copyrights and trademarks. The copying or redistribution of any part of this site is strictly prohibited without our prior written consent."
        },
        {
            title: "5. Limitation of Liability",
            content: "NexoVate Digital shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or for the cost of procurement of substitute goods and services."
        },
        {
            title: "6. Governing Law",
            content: "These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions."
        }
    ];

    return (
        <>
            <SEO
                title="Terms of Service"
                description="Terms of Service for NexoVate Digital - Understanding our service conditions."
            />
            <div className="relative min-h-screen py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <ParticleBackground />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
                    <FadeInWhenVisible>
                        <div className="text-center mb-16">
                            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                                <GradientText>Terms of Service</GradientText>
                            </h1>
                            <p className="text-gray-400">Last Updated: March 2026</p>
                        </div>
                    </FadeInWhenVisible>

                    <div className="glass rounded-3xl p-8 sm:p-12 border border-white/10 space-y-10">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">{section.title}</h2>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="text-gray-400 text-sm">
                            Agreement to these terms is required for all projects handled by NexoVate Digital.
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default TermsOfService;
