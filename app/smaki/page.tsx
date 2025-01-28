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
      image: "/assets/ULTIMATE/RAGNAROK.png",
    },
    {
      name: "ONI",
      taste: "Limonka i Orzeźwiające Cytrusy",
      image: "/assets/ULTIMATE/ONI.png",
    },
    {
      name: "SHINIGAMI",
      taste: "Kwaśne Jabłko + Chłodzik",
      image: "/assets/ULTIMATE/SHINIGAMI.png",
    },
    {
      name: "VALKYRIE",
      taste: "Czerwona Porzeczka, Jeżyna, Jagoda i Malina + Chłodzik",
      image: "/assets/ULTIMATE/VALKYRIE.png",
    },
    {
      name: "KAMI",
      taste: "Truskawka i Smoczy Owoc",
      image: "/assets/ULTIMATE/KAMI.png",
    },
    {
      name: "ALUCARD",
      taste: "Kawowy Koktajl Mleczny z Nutą Wanilii, Karmelu i Herbatników",
      image: "/assets/ULTIMATE/ALUCARD.png",
    },
    /*{
      name: "LUNA",
      taste: "Truskawka i Wiśnia + Chłodzik",
      image: "/assets/ULTIMATE/LUNA.png",
    },
    {
      name: "YAKUZA",
      taste: "Liczi, Ananas + Chłodzik",
      image: "/assets/ULTIMATE/YAKUZA.png",
    },*/
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
      image: "/assets/HIDDENPOTION/SECRET MANGO.png",
    },
    /*{
      name: "GREEN OASIS",
      taste: "Kaktus, Czerwone Owoce, Cytryna + Chłodzik",
      image: "/assets/HIDDENPOTION/GREEN OASIS.png",
    },
    {
      name: "SEVEN SINS",
      taste: "Nektarynka i Morela + Chłodzik",
      image: "/assets/HIDDENPOTION/SEVEN SINS.png",
    },
    {
      name: "EXPLOSIVE MELON",
      taste: "Melon",
      image: "/assets/HIDDENPOTION/EXPLOSIVE MELON.png",
    },
    {
      name: "GREEN BANANA",
      taste: "Banan i Kiwi + Chłodzik",
      image: "/assets/HIDDENPOTION/GREEN BANANA.png",
    },
    {
      name: "RED PINEAPLE",
      taste: "Ananas i Truskawka + Chłodzik",
      image: "/assets/HIDDENPOTION/RED PINEAPLE.png",
    },*/
    {
      name: "MYSTIC RED",
      taste: "Czerwone Owoce i Tajemniczy Składnik + Chłodzik",
      image: "/assets/HIDDENPOTION/MYSTIC RED.png",
    },
    /*{
      name: "GREEDY LEMON",
      taste: "Tarta z Żółtą i Zieloną Cytryną",
      image: "/assets/HIDDENPOTION/GREEDY LEMON.png",
    },*/
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
      taste: "Owoce Cytrusowe, Czerwone Owoce, Mięta + Chłodzik",
      image: "/assets/LESCREATIONS/DIABOLIK.png",
    },
    /*{
      name: "CINEMATIK",
      taste: "Karmelizowany Popcorn",
      image: "/assets/LESCREATIONS/CINEMATIK.png",
    },
    {
      name: "BIIIIIATCH",
      taste: "Truskawka i Grejfrut",
      image: "/assets/LESCREATIONS/BIATCH.png",
    },*/
    {
      name: "QUEEN PEACH",
      taste: "Brzoskwinia, Malina i Kiwi",
      image: "/assets/LESCREATIONS/QUEEN PEACH.png",
    },
    {
      name: "KAWAII",
      taste: "Owoc Smoka, Guawa, Truskawka i Kiwi",
      image: "/assets/LESCREATIONS/KAWAII.png",
    },
    {
      name: "FREEZY COLA",
      taste: "Coca-Cola",
      image: "/assets/LESCREATIONS/FREEZY COLA.png",
    },
    /*{
      name: "SWEETY MONKEY",
      taste: "Banan i Truskawka",
      image: "/assets/LESCREATIONS/SWEET MONKEY.png",
    }, */
   /* {
      name: "KRO-MIGNON",
      taste: "Malina i Jeżyna",
      image: "/assets/LESCREATIONS/KRO-MIGNON.png",
    },
    {
      name: "FROSTED BOY",
      taste: "Cytryna i Malina + Chłodzik",
      image: "/assets/LESCREATIONS/FROSTED BOY.png",
    },*/
    {
      name: "HUNGRY BEAR",
      taste: "Czerwone Owoce i Cukierki Lukrecji + Chłodzik",
      image: "/assets/LESCREATIONS/HUNGRY BEAR.png",
    },
  ],
};

const Smaki = () => {
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
                            width={175}
                            height={175}
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
                            width={175}
                            height={175}
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
                            width={175}
                            height={175}
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

export default Smaki;
