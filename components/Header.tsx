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
          
          <Link href={"/kontakt"}>
            <Button>Kontakt</Button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
