import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaShoppingBasket } from "react-icons/fa";
// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">E-cig liquids</span>
            <h1 className="h1 mb-6">
              Hello, we&#39;re <br />{" "}
              <span className="text-accent">Project-Juice</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              We craft exceptional e-liquid experiences, blending bold
              creativity with premium ingredients to deliver unparalleled flavor
              and satisfaction
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="products">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>See products</span>
                  <FaShoppingBasket className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center
                 text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* STATS */}
      <Stats />
    </section>
  );
};

export default Home;
