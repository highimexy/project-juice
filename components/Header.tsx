"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlitchLogo from "./GlitchLogo";
import { useState } from "react";

const Header = () => {
  const [sessionId, setSessionId] = useState("dummy-session");

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <header className="xl:py-12 text-white mb-8">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* LOGO z efektem glitch */}
        <Link href="/">
          <GlitchLogo src="/assets/photo.png" size={175} />
        </Link>

        {/* Nawigacja / przycisk */}
        <div className="flex items-center gap-8">
          <Link href="/kontakt">
            <motion.button
              onClick={handleCheckout}
              disabled={sessionId === ""}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 2.2,
                  delay: 1,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="bg-accent text-black font-bold px-4 py-2 rounded-xl shadow-md focus:outline-none disabled:opacity-50"
            >
              Kontakt
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
