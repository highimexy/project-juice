"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Dodany import
import { useState } from "react"; // przykładowe użycie do obsługi sessionId

const Header = () => {
  const [sessionId, setSessionId] = useState("dummy-session"); // ✅ lub przekazuj jako props

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
    // tu dodaj logikę checkoutu
  };

  return (
    <header className="xl:py-12 text-white mb-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <h1>
            <Image
              src="/assets/photo.png"
              priority
              quality={100}
              width={220}
              height={220}
              alt="Logo"
              className="object-contain"
            />
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="flex items-center gap-8">
          <Link href="/kontakt">
            {/* motion button */}
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
