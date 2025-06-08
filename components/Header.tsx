import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="xl:py-12 text-white mb-8">
      <div className="container mx-auto flex justify-between items-center">
        {/*LOGO*/}

        <Link href={"/"}>
          {/* <h1 className="text-4xl font-semibold">
        PROJECT-JUICE<span className="text-accent">.</span></h1>*/}
          <h1>
            <Image
              src="/assets/photo.png"
              priority
              quality={100}
              width={220}
              height={220}
              alt=""
              className="object-contain"
            />
          </h1>
        </Link>

        {/*desktop nav*/}

        <div className="flex items-center gap-8">
          <Link href="/kontakt">
            <button className="relative overflow-hidden px-6 py-2 rounded-xl bg-accent transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500">
              <span className=" text-black font-bold relative z-10 inline-block opacity-0 animate-fade-in">
                Kontakt
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
