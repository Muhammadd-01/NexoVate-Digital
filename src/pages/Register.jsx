import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import AnimatedBackground from "../components/ParticleBackground";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      navigate("/profile");
    }
  };

  return (
    <>
      <SEO title="Register" description="Register at Nexovate portal" />
      <AnimatedBackground>
        <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md rounded-2xl p-10 shadow-lg flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Create an Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-nexovate-blue-400"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-nexovate-blue-400"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-nexovate-blue-400"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold hover:bg-nexovate-blue-500 transition-colors duration-200 shadow-md bg-nexovate-blue-600/70 backdrop-blur-md"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-center text-white/80">
              Already have an account?{" "}
              <Link to="/login" className="text-nexovate-blue-400 hover:underline">
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </AnimatedBackground>
    </>
  );
}
