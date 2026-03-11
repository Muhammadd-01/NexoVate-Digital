import SEO from "../components/SEO";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import { GradientText, FadeInWhenVisible } from "../components/Animations";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Information We Collect",
            content: "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide."
        },
        {
            title: "2. How We Use Your Information",
            content: "We use the information we collect to operate and maintain our services, process your transactions, respond to your comments and questions, and send you technical notices, updates, and security alerts."
        },
        {
            title: "3. Data Security",
            content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free."
        },
        {
            title: "4. Cookies & Tracking",
            content: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier."
        },
        {
            title: "5. Third-Party Services",
            content: "Our service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."
        },
        {
            title: "6. Changes to This Policy",
            content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'effective date' at the top."
        }
    ];

    return (
        <>
            <SEO
                title="Privacy Policy"
                description="Privacy Policy for NexoVate Digital - Understanding how we protect your information."
            />
            <div className="relative min-h-screen py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <ParticleBackground />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
                    <FadeInWhenVisible>
                        <div className="text-center mb-16">
                            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                                <GradientText>Privacy Policy</GradientText>
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
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <a href="mailto:contactnexovate@gmail.com" className="text-nexovate-blue-400 hover:underline">
                                contactnexovate@gmail.com
                            </a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
