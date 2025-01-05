import Link from "next/link";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaSignalMessenger } from "react-icons/fa6";

type SocialProps = {
  containerStyles?: string; // Optional string for container styles
  iconStyles?: string;      // Optional string for icon styles
};

const socials = [
  { icon: <FaInstagram />, path: "" },
  { icon: <FaXTwitter />, path: "" },
  { icon: <FaTelegramPlane />, path: "" },
  { icon: <FaSignalMessenger />, path: "" },
];

const Social: React.FC<SocialProps> = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
