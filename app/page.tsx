"use client";

import { FaAngleDown } from "react-icons/fa6";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Smaki() {
  const [tabValue, setTabValue] = useState("ultimate");

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
        taste: "Koktajl Mleczny z Wanilii, Karmelu i Herbatników",
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

  function renderItems(
    category: typeof ultimate | typeof hiddenpotion | typeof lescreations
  ) {
    return (
      <ScrollArea className="h-[calc(100vh-280px)] xl:h-[600px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          {category.items.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 px-4 rounded-xl flex flex-row justify-between items-center"
            >
              <div className="flex flex-col gap-4 w-[250px] h-[150px]">
                <div className="flex items-center gap-2">
                  <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                  <h3 className="text-2xl text-left">{item.name}</h3>
                </div>
                <span className="text-accent text-left">{item.taste}</span>
              </div>
              <div>
                <Image
                  src={item.image}
                  priority
                  quality={100}
                  width={145}
                  height={145}
                  alt={item.name}
                />
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:mt-[-50px]"
    >
      <div className="container mx-auto">
        <Tabs
          value={tabValue}
          onValueChange={setTabValue}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Desktop Tabs */}
          <TabsList className="hidden xl:flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="ultimate"
              className="relative overflow-hidden px-4 py-2 rounded transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-20"
            >
              <span className="relative z-10 opacity-0 animate-fade-in">
                ULTIMATE
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="hiddenpotion"
              className="relative overflow-hidden px-4 py-2 rounded transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-20"
            >
              <span className="relative z-10 opacity-0 animate-fade-in ">
                HIDDEN POTION
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="lescreations"
              className="relative overflow-hidden px-4 py-2 rounded transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-20"
            >
              <span className="relative z-10 opacity-0 animate-fade-in">
                LES CRÉATIONS
              </span>
            </TabsTrigger>
          </TabsList>

          {/* Mobile Dropdown */}
          <div className="block xl:hidden w-full max-w-[380px] mx-auto mt-[-70px]">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger
                className="relative overflow-hidden z-0 bg-[#383944] text-white py-3 px-6 font-bold rounded-xl w-full text-center flex items-center justify-center gap-2 transition-colors duration-300
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-20"
              >
                SMAKI
                <FaAngleDown className="text-lg" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  side="bottom"
                  align="center"
                  className="bg-[#383944] rounded-lg p-2 shadow-lg mt-[8px] w-[var(--radix-dropdown-menu-trigger-width)]"
                >
                  <DropdownMenu.Item
                    className={`relative overflow-hidden px-4 py-2 rounded cursor-pointer transition-colors duration-300
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-10
            ${tabValue === "ultimate" ? "bg-accent text-black" : "text-white"}`}
                    onSelect={() => setTabValue("ultimate")}
                  >
                    ULTIMATE
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className={`relative overflow-hidden px-4 py-2 rounded cursor-pointer transition-colors duration-300
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-10
            ${
              tabValue === "hiddenpotion"
                ? "bg-accent text-black"
                : "text-white"
            }`}
                    onSelect={() => setTabValue("hiddenpotion")}
                  >
                    HIDDEN POTION
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className={`relative overflow-hidden px-4 py-2 rounded cursor-pointer transition-colors duration-300
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-10
            ${
              tabValue === "lescreations"
                ? "bg-accent text-black"
                : "text-white"
            }`}
                    onSelect={() => setTabValue("lescreations")}
                  >
                    LES CRÉATIONS
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>

          {/* Content */}
          <div className="min-h-[70vh] max-h-[3] mt-[-40px]">
            <TabsContent value="ultimate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{ultimate.title}</h3>
                {renderItems(ultimate)}
              </div>
            </TabsContent>

            <TabsContent value="hiddenpotion" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{hiddenpotion.title}</h3>
                {renderItems(hiddenpotion)}
              </div>
            </TabsContent>

            <TabsContent value="lescreations" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{lescreations.title}</h3>
                {renderItems(lescreations)}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
