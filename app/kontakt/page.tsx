"use client";

import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaSignalMessenger } from "react-icons/fa6";

const info = [
  {
    icon: <FaSignalMessenger />,
    title: "Signal",
    description: "projectjuice.21",
    image: "/assets/QR.png",
  },
];

import { motion } from "framer-motion";

const Kontakt = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 min-h-[80vh] flex items-center justify-center mt-[-48px]"
    >
      <div className="container mx-auto">
        {/* info */}
        <div className="flex flex-col items-center gap-10">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                  <div className="text-[50px]">{item.icon}</div>
                </div>
                <div>
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>

          {/* QR Image below the entire component */}
          <img
            src="/assets/QR.png"
            alt="QR Code"
            style={{ width: "460px", height: "460px" }}
            className="object-contain mt-[-84px]"
          />

        </div>
      </div>
    </motion.section>


  );
};

export default Kontakt;
