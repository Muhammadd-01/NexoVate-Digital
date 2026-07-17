import React from "react";
import { motion } from "framer-motion";
import { FadeInWhenVisible, GradientText } from "./Animations";

export default function PageHero({ title, description, bgImage }) {
  const defaultBg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop";
  const bgToUse = bgImage || defaultBg;

  return (
    <div className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgToUse})` }}
        />
        {/* Deep dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInWhenVisible>
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GradientText>{title}</GradientText>
            </motion.h1>
            {description && (
              <motion.p 
                className="text-lg leading-8 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
