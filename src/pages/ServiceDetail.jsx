import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PaperAirplaneIcon, ArrowLeftIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon, ShieldCheckIcon, HandThumbUpIcon, ClockIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import TiltCard from "../components/TiltCard";
import { servicesData } from "../data/servicesData";
import { portfolioData } from "../data/portfolioData";
import { FadeInWhenVisible, StaggerContainer, StaggerItem } from "../components/Animations";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    contactMethod: "Email",
    websiteUrl: "",
    targetAudience: "",
    competitors: "",
    budget: "",
    timeline: "",
    details: "",
    customFieldsData: {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.id === id);
    if (foundService) {
      setService(foundService);
      // Initialize custom fields if they exist
      if (foundService.customFields) {
        const initialCustomData = {};
        foundService.customFields.forEach(field => {
          initialCustomData[field.id] = "";
        });
        setFormData(prev => ({ ...prev, customFieldsData: initialCustomData }));
      }
    } else {
      // If service not found, redirect to services page
      navigate("/services");
    }
  }, [id, navigate]);

  // Get related projects
  const relatedProjects = service?.portfolioCategories 
    ? portfolioData
        .filter(cat => service.portfolioCategories.includes(cat.category))
        .flatMap(cat => cat.projects)
        .slice(0, 4) // Show up to 4 projects
    : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Check if the input is a custom field
    if (service?.customFields?.some(field => field.id === name)) {
      setFormData(prev => ({
        ...prev,
        customFieldsData: {
          ...prev.customFieldsData,
          [name]: value
        }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address!", {
        style: { background: "#1a1a2e", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwplpald", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `Detailed Service Inquiry: ${service.name}`,
          ...formData
        }),
      });

      if (response.ok) {
        toast.success("Request sent successfully! We'll get back to you soon.", {
          style: { background: "#1a1a2e", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" },
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          contactMethod: "Email",
          websiteUrl: "",
          targetAudience: "",
          competitors: "",
          budget: "",
          timeline: "",
          details: "",
        });
      } else {
        toast.error("Failed to send request. Please try again.", {
          style: { background: "#1a1a2e", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" },
        });
      }
    } catch (error) {
      toast.error("Network error. Please try again.", {
        style: { background: "#1a1a2e", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!service) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="relative min-h-screen pb-24">
      <SEO
        title={`${service.name} | NexoVate Digital`}
        description={service.description}
      />

      <PageHero 
        title={service.name}
        description={service.description}
        bgImage={service.bgImage}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 -mt-8">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-nexovate-blue-400 transition-colors mb-12"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Details & Value Proposition */}
          <FadeInWhenVisible>
            <div>
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 icon-glow">
                <service.icon className="w-12 h-12 text-nexovate-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us for {service.name}?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                At NexoVate Digital, we don't just deliver services; we engineer solutions that propel your business forward. Our approach to {service.name} combines industry best practices, cutting-edge technology, and a deep understanding of your unique challenges to guarantee a product that stands out in the global market.
              </p>
              
              <ul className="space-y-4 mb-12">
                {[
                  "Global Quality Standards at Local Prices",
                  "Dedicated Project Managers & Transparent Communication",
                  "Agile Methodology for Faster Time-to-Market",
                  "Post-Launch Support & Maintenance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-nexovate-blue-500/20 flex items-center justify-center border border-nexovate-blue-500/30 text-nexovate-blue-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Inline Portfolio Showcase */}
              {relatedProjects.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-white mb-2">Our Recent {service.name} Projects</h3>
                  <p className="text-gray-400 mb-8">Take a look at some of the recent work we've done in this space.</p>
                  
                  <StaggerContainer staggerDelay={0.1}>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {relatedProjects.map((project, projectIndex) => (
                        <StaggerItem key={project.title}>
                          <TiltCard
                            tiltAmount={10}
                            scaleOnHover={1.03}
                            className="rounded-2xl overflow-hidden glass border border-white/10 group cursor-pointer"
                            onMouseEnter={() => setHoveredProject(projectIndex)}
                            onMouseLeave={() => setHoveredProject(null)}
                          >
                            <a href={project.link !== "#" ? project.link : undefined} target="_blank" rel="noopener noreferrer" className="block">
                              <div className="relative h-48 overflow-hidden">
                                <motion.img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                
                                {/* Hover overlay */}
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: hoveredProject === projectIndex ? 1 : 0
                                  }}
                                  className="absolute inset-0 bg-nexovate-blue-600/20 backdrop-blur-sm flex items-center justify-center"
                                >
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{
                                      scale: hoveredProject === projectIndex ? 1 : 0
                                    }}
                                    className="p-3 rounded-full bg-white/20 backdrop-blur-md"
                                  >
                                    <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white" />
                                  </motion.div>
                                </motion.div>
                              </div>
                              <div className="p-4">
                                <h4 className="text-lg font-semibold text-white group-hover:text-nexovate-blue-400 transition-colors">
                                  {project.title}
                                </h4>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {project.tags?.slice(0, 2).map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-[10px] font-medium rounded-full bg-white/5 text-gray-300 border border-white/10">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </a>
                          </TiltCard>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>
                  
                  <div className="mt-10 flex justify-center">
                    <Link 
                      to="/portfolios"
                      className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-nexovate-blue-600 to-accent-purple px-8 py-4 text-sm font-bold text-white shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <span className="relative z-10 flex items-center gap-2">
                        View All Projects
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </FadeInWhenVisible>

          {/* Right Column: Detailed Contact Form */}
          <FadeInWhenVisible delay={0.2}>
            <div className="liquid-glass-strong rounded-3xl p-8 lg:p-10 spatial-layer-1 border border-white/10 relative overflow-hidden">
              {/* Decorative gradient orb behind form */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full filter blur-3xl opacity-30 -mr-20 -mt-20`} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                <p className="text-gray-400 mb-8 text-sm">Fill out the details below so we can accurately assess your needs and provide a tailored proposal.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-300 mb-1">Preferred Contact Method</label>
                      <select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none appearance-none">
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="WhatsApp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none" placeholder="Your Company Ltd." />
                    </div>
                    <div>
                      <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-300 mb-1">Existing Website URL</label>
                      <input type="url" id="websiteUrl" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none" placeholder="https://example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-300 mb-1">Target Audience</label>
                      <input type="text" id="targetAudience" name="targetAudience" value={formData.targetAudience} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none" placeholder="Who are your customers?" />
                    </div>
                    <div>
                      <label htmlFor="competitors" className="block text-sm font-medium text-gray-300 mb-1">Competitors</label>
                      <input type="text" id="competitors" name="competitors" value={formData.competitors} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none" placeholder="Any main competitors?" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">Estimated Budget</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none appearance-none">
                        <option value="" disabled>Select Budget</option>
                        <option value="< $1,000">Less than $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">Project Timeline</label>
                      <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none appearance-none">
                        <option value="" disabled>Select Timeline</option>
                        <option value="ASAP">As soon as possible</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Custom Fields */}
                  {service?.customFields && service.customFields.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-2xl bg-nexovate-blue-900/10 border border-nexovate-blue-500/20">
                      {service.customFields.map((field) => (
                        <div key={field.id} className={service.customFields.length === 1 ? "sm:col-span-2" : ""}>
                          <label htmlFor={field.id} className="block text-sm font-medium text-nexovate-blue-300 mb-1">{field.label}</label>
                          {field.type === "select" && (
                            <select 
                              id={field.id} 
                              name={field.id} 
                              value={formData.customFieldsData[field.id] || ""} 
                              onChange={handleChange} 
                              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none appearance-none"
                            >
                              <option value="" disabled>Select {field.label}</option>
                              {field.options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-1">Project Details *</label>
                    <textarea id="details" name="details" required rows={5} value={formData.details} onChange={handleChange} className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none resize-none" placeholder="Describe your project goals, features needed, and any other relevant information..." />
                  </div>

                  <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 ${isSubmitting ? "bg-white/10 cursor-not-allowed" : "bg-gradient-to-r from-nexovate-blue-600 to-accent-purple hover:shadow-glow hover:-translate-y-0.5"}`}>
                    {isSubmitting ? "Sending..." : "Request a Free Proposal"}
                    {!isSubmitting && <PaperAirplaneIcon className="w-5 h-5 -mt-1" />}
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">We respect your privacy. No spam, ever. Guaranteed response within 24 hours.</p>
                </form>

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <ShieldCheckIcon className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-medium">100% Secure & Confidential</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <HandThumbUpIcon className="w-5 h-5 text-nexovate-blue-400" />
                      <span className="text-sm font-medium">Satisfaction Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <ClockIcon className="w-5 h-5 text-accent-purple" />
                      <span className="text-sm font-medium">Fast Turnaround Time</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
}
