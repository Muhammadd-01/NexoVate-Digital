import React from "react";
import AnimatedBackground from "../components/ParticleBackground";
import SEO from "../components/SEO";

export default function Profile() {
  return (
    <>
      <SEO title="Profile" description="User Profile" />
      <AnimatedBackground>
        <div className="min-h-screen flex items-center justify-center p-6 relative z-10 text-white">
          <div className="w-full max-w-lg rounded-2xl p-10 shadow-lg backdrop-blur-md bg-white/20 flex flex-col gap-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Welcome, User!</h2>
            <p className="text-center text-white/80">
              This is your profile page. All your details and activities can be managed here.
            </p>
          </div>
        </div>
      </AnimatedBackground>
    </>
  );
}
