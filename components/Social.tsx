import Link from "next/link";
import { FaInstagram,  FaTelegramPlane, } from "react-icons/fa";
import { FaXTwitter, FaSignalMessenger } from "react-icons/fa6";

const socials = [
  { icon: <FaInstagram />, path: "" },
  { icon: <FaXTwitter />, path: "" },
  { icon: <FaTelegramPlane />, path: "" },
  { icon: <FaSignalMessenger />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}>
    {socials.map((item, index) =>{
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
    })}
  </div>;
};

export default Social;
