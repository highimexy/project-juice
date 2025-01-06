"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

// ULTIMATE data
const ultimate = {
  title: "ULTIMATE",
  items: [
    {
      name: "RAGNAROK",
      taste: "Truskawki, Porzeczka, Malina, Jeżyna i Mango + Chłodzik",
      image: "/assets/RAGNAROK.png",
    },
    {
      name: "ONI",
      taste: "Limonka i Orzeźwiające Cytrusy",
      image: "/assets/ONI.png",
    },
    {
      name: "SHINIGAMI",
      taste: "Kwaśne Jabłko + Chłodzik",
      image: "/assets/SHINIGAMI.png",
    },
    {
      name: "VALKYRIE",
      taste: "Czerwona Porzeczka, Jeżyna, Jagoda i Malina + Chłodzik",
      image: "/assets/VALKYRIE.png",
    },
    {
      name: "KAMI",
      taste: "Truskawka i Smoczy Owoc",
      image: "/assets/KAMI.png",
    },
    {
      name: "ALUCARD",
      taste: "Kawowy Koktajl Mleczny z Nutą Wanilii, Karmelu i Herbatników",
      image: "/assets/ALUCARD.png",
    },
    {
      name: "LUNA",
      taste: "Truskawka i Wiśnia + Chłodzik",
      image: "/assets/LUNA.png",
    },
    {
      name: "YAKUZA",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/YAKUZA.png",
    },
  ],
};
{
  /* Hidden Potion */
}
const hiddenpotion = {
  title: "HIDDEN POTION",
  items: [
    {
      name: "SECRET MANGO",
      taste: "Mango, Ananas, Marakuja + Chłodzik",
      image: "/assets/RAGNAROK.png",
    },
    {
      name: "GREEN OASIS",
      taste: "Kaktus, Czerwone Owoce, Cytryna + Chłodzik",
      image: "/assets/ONI.png",
    },
    {
      name: "SEVEN SINS",
      taste: "Nektarynka i Morela + Chłodzik",
      image: "/assets/SHINIGAMI.png",
    },
    {
      name: "EXPLOSIVE MELON",
      taste: "Melon",
      image: "/assets/VALKYRIE.png",
    },
    {
      name: "GREEN BANANA",
      taste: "Banan i Kiwi + Chłodzik",
      image: "/assets/KAMI.png",
    },
    {
      name: "RED PINEAPLE",
      taste: "Ananas i Truskawka + Chłodzik",
      image: "/assets/ALUCARD.png",
    },
    {
      name: "MYSTIC RED",
      taste: "Czerwone Owoce i Tajemniczy Składnik + Chłodzik",
      image: "/assets/LUNA.png",
    },
    {
      name: "GREEDY LEMON",
      taste: "Tarta z Żółtą i Zieloną Cytryną",
      image: "/assets/YAKUZA.png",
    },
  ],
};
{
  /* lescreations */
}
const lescreations = {
  title: "LES CRÉATIONS",
  items: [
    {
      name: "DIABOLIK",
      taste: "Truskawki, Porzeczka, Malina, Jeżyna i Mango + Chłodzik",
      image: "/assets/RAGNAROK.png",
    },
    {
      name: "CINEMATIK",
      taste: "Limonka i Orzeźwiające Cytrusy",
      image: "/assets/ONI.png",
    },
    {
      name: "BIIIIIATCH",
      taste: "Kwaśne Jabłko + Chłodzik",
      image: "/assets/SHINIGAMI.png",
    },
    {
      name: "PARADISE ISLAND",
      taste: "Czerwona Porzeczka, Jeżyna, Jagoda i Malina + Chłodzik",
      image: "/assets/VALKYRIE.png",
    },
    {
      name: "QUEEN PEACH",
      taste: "Truskawka i Smoczy Owoc",
      image: "/assets/KAMI.png",
    },
    {
      name: "KAWAII",
      taste: "Kawowy Koktajl Mleczny z Nutą Wanilii, Karmelu i Herbatników",
      image: "/assets/ALUCARD.png",
    },
    {
      name: "HYSTERIK",
      taste: "Truskawka i Wiśnia + Chłodzik",
      image: "/assets/LUNA.png",
    },
    {
      name: "FREEZY COLA",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/YAKUZA.png",
    },
    {
      name: "FREEZY COLA",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/YAKUZA.png",
    },
    {
      name: "TROPIK THUNDER",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/YAKUZA.png",
    },
    {
      name: "SWEETY MONKEY",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/YAKUZA.png",
    },
    {
      name: "KRO-MIGNON",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/YAKUZA.png",
    },
    {
      name: "FROSTED BOY",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/YAKUZA.png",
    },
    {
      name: "HUNGRY BEAR",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/YAKUZA.png",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="ultimate"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="ultimate">ULTIMATE</TabsTrigger>
            <TabsTrigger value="hiddenpotion">HIDDEN POTION</TabsTrigger>
            <TabsTrigger value="lescreations">LES CRÉATIONS</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="ultimate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{ultimate.title}</h3>
                <ScrollArea className="h-[620px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {ultimate.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-row justify-between items-center"
                      >
                        <div className="flex flex-col gap-4 w-[250px] h-[150]">
                          <div className="flex items-center gap-2">
                            <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                            <h3 className="text-xl text-left">{item.name}</h3>
                          </div>
                          <span className="text-accent text-left">
                            {item.taste}
                          </span>
                        </div>
                        <div className="">
                          <Image
                            src={item.image}
                            priority
                            quality={100}
                            width={150}
                            height={150}
                            alt={item.name}
                            className=""
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Hidden Potion */}
            <TabsContent value="hiddenpotion" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{hiddenpotion.title}</h3>
                <ScrollArea className="h-[620px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {hiddenpotion.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-row justify-between items-center"
                      >
                        <div className="flex flex-col gap-4 w-[250px] h-[150]">
                          <div className="flex items-center gap-2">
                            <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                            <h3 className="text-xl text-left">{item.name}</h3>
                          </div>
                          <span className="text-accent text-left">
                            {item.taste}
                          </span>
                        </div>
                        <div className="">
                          <Image
                            src={item.image}
                            priority
                            quality={100}
                            width={150}
                            height={150}
                            alt={item.name}
                            className=""
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* LES CREATIONS */}
            <TabsContent value="lescreations" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{lescreations.title}</h3>
                <ScrollArea className="h-[620px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {lescreations.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-row justify-between items-center"
                      >
                        <div className="flex flex-col gap-4 w-[250px] h-[150]">
                          <div className="flex items-center gap-2">
                            <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                            <h3 className="text-xl text-left">{item.name}</h3>
                          </div>
                          <span className="text-accent text-left">
                            {item.taste}
                          </span>
                        </div>
                        <div className="">
                          <Image
                            src={item.image}
                            priority
                            quality={100}
                            width={150}
                            height={150}
                            alt={item.name}
                            className=""
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
