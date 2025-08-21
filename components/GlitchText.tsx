import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <motion.div className={`relative inline-block whitespace-nowrap ${className}`}>
      <span className="absolute left-1 top-1 opacity-70" style={{ color: "#523485" }}>{text}</span>
      <span className="relative">{text}</span>
    </motion.div>
  );
};
