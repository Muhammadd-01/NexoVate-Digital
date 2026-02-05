import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import TiltCard from "../components/TiltCard";
import {
  FadeInWhenVisible,
  StaggerContainer,
  StaggerItem,
  GradientText,
  FloatingElement,
} from "../components/Animations";
import {
  ArrowTopRightOnSquareIcon,
  UsersIcon,
  SparklesIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  ServerIcon,
  MegaphoneIcon,
  CameraIcon
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const roleIcons = {
  "CEO": SparklesIcon,
  "Frontend": CodeBracketIcon,
  "Backend": ServerIcon,
  "UI/UX": PaintBrushIcon,
  "SEO": MegaphoneIcon,
  "Vector": PaintBrushIcon,
  "Graphic": PaintBrushIcon,
  "Video": CameraIcon,
};

const getRoleIcon = (role) => {
  for (const [key, Icon] of Object.entries(roleIcons)) {
    if (role.includes(key)) return Icon;
  }
  return SparklesIcon;
};

const teamMembers = [
  {
    name: "Muhammad Affan",
    role: "CEO & Founder | Full-Stack Developer",
    image: "/assets/Team-Member-images/AffanPic.jpeg",
    description:
      "Affan leads NexoVate.Co with technical mastery and vision. As a full-stack developer and creative strategist, he oversees all services — from web & app development to automation, AI, and business innovation.",
    portfolio: "https://affann-portfolio.vercel.app/",
    color: "from-nexovate-blue-500 to-accent-purple",
  },
  {
    name: "Hafiz Mohsin Ali",
    role: "Frontend Developer | Web Development Specialist",
    image: "/assets/Team-Member-images/MohsinPic.png",
    description:
      "Mohsin brings designs to life with React, Angular, and TailwindCSS. He ensures smooth, fast, and responsive UI across all devices and manages frontend architecture for client projects.",
    portfolio: "https://portfolio-pi-seven-52.vercel.app/",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Himesh Dua",
    role: "Backend Developer | Database & API Engineer",
    image: "/assets/Team-Member-images/HimeshPic.jpg",
    description:
      "Himesh builds reliable, secure, and scalable backend systems using Node.js, Laravel, and .NET Core. He manages APIs, databases, and integrations that power every digital solution.",
    portfolio: "https://himeshdua.vercel.app/",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Hashir",
    role: "UI/UX Designer | Product Experience Developer",
    image: "/assets/Team-Member-images/HashirPic.png",
    description:
      "Hashir designs user-focused experiences and clean visual systems. From wireframes to final product design, he ensures every app and website is intuitive, aesthetic, and engaging.",
    portfolio: "https://hashir03042122258.github.io/newportfolio/",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Muhammad Umer",
    role: "SEO & Digital Marketing Strategist",
    image: "/assets/Team-Member-images/UmerPic.png",
    description:
      "Umer handles SEO, digital marketing, and social campaigns for all NexoVate.Co clients. His strategies boost brand visibility, website performance, and global online reach.",
    portfolio: "https://example.com/umer-portfolio",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Bilal Khan",
    role: "Vector Designer | Creative Visual Artist",
    image: "/assets/Team-Member-images/BilalPic.png",
    description:
      "Bilal specializes in vector graphics and creative design. He transforms concepts into powerful visuals that define NexoVate's unique digital identity across projects.",
    portfolio: "https://bilal-portfolio-gules.vercel.app/",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Shehzad bin Rehman",
    role: "Graphic Designer & Social Media Marketer",
    image: "/assets/Team-Member-images/ShehzadPic.jpeg",
    description:
      "Shehzad brings brands to life through impactful graphic design and engaging social media content. His marketing insights help businesses grow their online presence effectively.",
    portfolio: "https://shehzad-portfolio-tau.vercel.app/",
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Muhammad Yasir",
    role: "Photo & Video Editor | Visual Storyteller",
    image: "/assets/Team-Member-images/YasirPic.png",
    description:
      "Yasir transforms raw visuals into cinematic art. From promotional videos to creative edits, he enhances every NexoVate.Co project with professional-grade photo and video editing.",
    portfolio: "https://example.com/yasir-portfolio",
    color: "from-red-500 to-orange-500",
  },
];

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the 8 core members behind NexoVate.Co — experts managing all our services from design to development, AI, and marketing."
        keywords="team, developers, designers, backend, frontend, marketing, SEO, NexoVate"
      />

      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement duration={8} distance={30} className="absolute top-32 left-[10%]">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-nexovate-blue-500/20 to-accent-purple/20 blur-3xl" />
          </FloatingElement>
          <FloatingElement duration={10} distance={40} className="absolute top-60 right-[15%]">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-accent-cyan/20 to-nexovate-blue-500/20 blur-3xl" />
          </FloatingElement>
        </div>

        <div className="relative z-10">
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* Header */}
              <FadeInWhenVisible>
                <div className="mx-auto max-w-2xl text-center mb-16">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nexovate-blue-500/10 border border-nexovate-blue-500/20 mb-6"
                  >
                    <UsersIcon className="w-4 h-4 text-nexovate-blue-400" />
                    <span className="text-sm text-nexovate-blue-400 font-medium">Our Team</span>
                  </motion.div>

                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                    <GradientText>Meet Our Core Team</GradientText>
                  </h1>
                  <p className="text-lg leading-8 text-gray-400">
                    The powerhouse behind every NexoVate.Co project — a compact, all-rounder team handling every service from concept to deployment.
                  </p>
                </div>
              </FadeInWhenVisible>

              {/* Team Grid */}
              <StaggerContainer staggerDelay={0.1}>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {teamMembers.map((member, index) => {
                    const RoleIcon = getRoleIcon(member.role);
                    const isHovered = hoveredMember === index;

                    return (
                      <StaggerItem key={member.name}>
                        <TiltCard
                          tiltAmount={8}
                          scaleOnHover={1.02}
                          className="glass rounded-2xl overflow-hidden border border-white/10 group"
                          onMouseEnter={() => setHoveredMember(index)}
                          onMouseLeave={() => setHoveredMember(null)}
                        >
                          {/* Image Section */}
                          <div className="relative h-64 overflow-hidden">
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${member.color} opacity-20 z-10`} />

                            <motion.img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                              style={{ objectPosition: "center 20%" }}
                            />

                            {/* Bottom gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent z-10" />

                            {/* Animated ring on hover */}
                            <motion.div
                              className={`absolute inset-0 border-2 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}
                              style={{
                                borderImage: `linear-gradient(135deg, ${member.color.split(' ')[0].replace('from-', '')} 0%, ${member.color.split(' ')[1].replace('to-', '')} 100%) 1`,
                              }}
                            />

                            {/* Role badge */}
                            <div className="absolute top-4 right-4 z-20">
                              <motion.div
                                className={`p-2 rounded-xl bg-gradient-to-br ${member.color} shadow-lg`}
                                whileHover={{ rotate: 10, scale: 1.1 }}
                              >
                                <RoleIcon className="w-5 h-5 text-white" />
                              </motion.div>
                            </div>

                            {/* Name overlay at bottom */}
                            <div className="absolute bottom-4 left-4 z-20">
                              <h3 className="text-xl font-bold text-white text-glow">
                                {member.name}
                              </h3>
                              <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                                {member.role.split('|')[0].trim()}
                              </p>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-5">
                            <p className="text-sm text-gray-400 mb-5 line-clamp-3">
                              {member.description}
                            </p>

                            {/* Action buttons */}
                            <div className="flex items-center gap-3">
                              <motion.a
                                href={member.portfolio}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`
                                  flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
                                  bg-gradient-to-r ${member.color} text-sm font-medium text-white 
                                  hover:shadow-glow transition-all duration-300
                                `}
                              >
                                <FaGlobe className="w-4 h-4" />
                                Portfolio
                              </motion.a>

                              {/* Social icons */}
                              <motion.a
                                href="#"
                                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FaLinkedin className="w-4 h-4" />
                              </motion.a>
                              <motion.a
                                href="#"
                                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FaGithub className="w-4 h-4" />
                              </motion.a>
                            </div>
                          </div>

                          {/* Hover glow effect */}
                          <motion.div
                            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
                            style={{
                              background: `linear-gradient(135deg, ${member.color.split(' ')[0].replace('from-', 'var(--tw-gradient-from, ') + ')'} 0%, ${member.color.split(' ')[1].replace('to-', 'var(--tw-gradient-to, ') + ')'} 100%)`,
                            }}
                          />
                        </TiltCard>
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>

              {/* Stats Section */}
              <FadeInWhenVisible delay={0.2}>
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {[
                    { label: "Team Members", value: "7+", icon: UsersIcon },
                    { label: "Years Combined Exp", value: "15+", icon: SparklesIcon },
                    { label: "Projects Delivered", value: "50+", icon: CodeBracketIcon },
                    { label: "Happy Clients", value: "30+", icon: MegaphoneIcon },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all group"
                    >
                      <motion.div
                        className="inline-flex p-3 rounded-xl bg-nexovate-blue-500/20 mb-3"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <stat.icon className="w-6 h-6 text-nexovate-blue-400" />
                      </motion.div>
                      <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </FadeInWhenVisible>

              {/* Join CTA */}
              <FadeInWhenVisible delay={0.3}>
                <div className="mt-20 text-center">
                  <div className="inline-block glass rounded-3xl p-10 border border-white/10 max-w-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Want to join our team?
                    </h3>
                    <p className="text-gray-400 mb-6">
                      We're always looking for talented individuals to join our growing team.
                    </p>
                    <motion.a
                      href="mailto:contactnexovate@gmail.com"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-nexovate-blue-600 to-accent-purple px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-300"
                    >
                      Send Your Resume
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
