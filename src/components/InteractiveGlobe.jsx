import { motion } from "framer-motion";

const InteractiveGlobe = () => {
    // Geographically pinned markers (relative to the 800px width of the map SVG)
    // Refined coordinates for higher accuracy on the continent paths
    const projectPoints = [
        { x: 140, y: 115, label: "USA - TechLaunch" },
        { x: 385, y: 100, label: "UK - Digital Bridge" },
        { x: 508, y: 148, label: "PK - NexoVate HQ" },
        { x: 475, y: 165, label: "UAE - Vision 2024" },
        { x: 675, y: 305, label: "Australia - Sydney Apps" },
        { x: 220, y: 285, label: "Brazil - Rio Ventures" },
        { x: 440, y: 270, label: "South Africa - Cape Dev" },
        { x: 610, y: 125, label: "Japan - Kyoto Tech" },
    ];

    return (
        <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center py-10">
            {/* 1. BRAND ATMOSPHERE (Outer Glow) */}
            <div className="absolute inset-4 rounded-full bg-[#0ea5e9]/10 blur-3xl -z-10 animate-pulse" />
            <div className="absolute inset-8 rounded-full border border-[#0ea5e9]/20 shadow-[0_0_50px_rgba(14,165,233,0.15)] -z-10" />

            {/* 2. THE FLOATING SPHERE */}
            <div className="relative w-[85%] aspect-square z-10">
                {/* Core Sphere Container */}
                <div className="absolute inset-0 rounded-full bg-[#030712] border border-white/20 shadow-[inset_0_0_100px_rgba(0,0,0,1)] overflow-hidden">
                    {/* Rotating Content (Map + Pinned Markers) */}
                    <motion.div
                        className="absolute inset-0 w-[200%] h-full flex"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="relative w-full h-full">
                                {/* Detailed Realistic Continent SVG - Brand Aligned Colors */}
                                <svg viewBox="0 0 800 400" className="w-full h-full fill-[#0ea5e9]/25 filter drop-shadow-[0_0_12px_rgba(14,165,233,0.4)]">
                                    {/* North America */}
                                    <path d="M100,80 c15,-15 50,-20 70,0 s20,40 10,60 s-30,20 -50,40 s-25,45 -35,10 s5,-80 5,-110 z" />
                                    {/* South America */}
                                    <path d="M150,220 c20,0 40,20 50,55 s10,85 -20,105 s-60,0 -50,-55 s20,-105 20,-105 z" />
                                    {/* Eurasia & Africa */}
                                    <path d="M340,120 c40,-60 180,-60 250,0 s50,110 -20,140 s-80,45 -150,0 s-80,-140 -80,-140 z" />
                                    <path d="M410,185 c30,0 60,35 60,85 s-20,105 -60,105 s-60,-55 -60,-105 s60,-85 60,-85 z" />
                                    {/* Australia */}
                                    <path d="M650,285 c30,-10 65,25 65,55 s-35,55 -65,25 s0,-80 0,-80 z" />
                                </svg>

                                {/* Pinned Project Points */}
                                {projectPoints.map((point, idx) => (
                                    <div
                                        key={idx}
                                        className="absolute group pointer-events-auto"
                                        style={{
                                            left: `${(point.x / 800) * 100}%`,
                                            top: `${(point.y / 400) * 100}%`
                                        }}
                                    >
                                        <div className="relative -translate-x-1/2 -translate-y-1/2">
                                            {/* The Point - Pulsating Brand Cyan */}
                                            <div className="w-4 h-4 rounded-full bg-[#22d3ee] shadow-[0_0_20px_#22d3ee] cursor-pointer group-hover:scale-125 transition-transform z-30">
                                                <span className="absolute inset-0 rounded-full bg-[#22d3ee] animate-ping opacity-60" />
                                            </div>

                                            {/* Professional Tooltip */}
                                            <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-2 rounded-2xl bg-[#0f172a]/95 backdrop-blur-md border border-white/20 text-[12px] text-white font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-2xl pointer-events-none z-50">
                                                <span className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse" />
                                                    {point.label}
                                                </span>
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-[#0f172a]/95" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    {/* Holographic Overlays */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Latitude/Longitude Mesh */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 border-b border-white/10 top-1/2" />
                            <div className="absolute inset-0 border-r border-white/10 left-1/2" />
                            <div className="absolute inset-0 rounded-full border border-white/5 scale-75" />
                            <div className="absolute inset-0 rounded-full border border-white/5 scale-50" />
                        </div>

                        {/* Spherical Lighting (Depth/Shadow) */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_0%,rgba(0,0,0,0.9)_100%)]" />
                    </div>
                </div>

                {/* 3. PREMIUM GLASS SHINE (Reflection) */}
                <div className="absolute inset-0 rounded-full pointer-events-none">
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute top-[8%] left-[25%] w-[35%] h-[25%] bg-white/10 blur-xl rounded-full rotate-[-40deg]" />
                    <div className="absolute bottom-[12%] right-[15%] w-[18%] h-[18%] bg-[#a855f7]/10 blur-xl rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default InteractiveGlobe;
