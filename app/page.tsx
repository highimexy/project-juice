"use client";

import { FaAngleDown } from "react-icons/fa6";
import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { GlitchText } from "@/components/GlitchText";

interface FlavorTileProps {
  name: string;
  taste: string;
  image: string;
  activeTile: string | null;
  setActiveTile: (name: string | null) => void;
}

function FlavorTile({
  name,
  taste,
  image,
  activeTile,
  setActiveTile,
}: FlavorTileProps) {
  const isActive = activeTile === name;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActiveTile(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setActiveTile]);

  return (
    <div
      ref={ref}
      onClick={() => setActiveTile(isActive ? null : name)}
      className="group relative bg-[#232329] h-[184px] py-4 rounded-xl flex justify-between items-center cursor-pointer transition-all duration-300"
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl" />

      {isActive && (
        <div className="absolute inset-0 bg-[#0f0f11] bg-opacity-90 z-10 rounded-xl flex items-center justify-center text-center p-4">
          <p className="text-white text-lg font-semibold">{taste}</p>
        </div>
      )}

      <div className="flex flex-col gap-4 w-[190px] h-[150px] sm:w-[300px] z-0 items-left justify-center ml-[15px] sm:ml-[30px]">
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
          <h3 className="text-2xl sm:text-4xl text-white whitespace-nowrap">
            {name}
          </h3>
        </div>
      </div>

      <div className="z-0">
        <Image
          src={image}
          priority
          quality={100}
          width={160}
          height={160}
          alt={name}
          className="sm:w-[180px] sm:h-[180px] w-[200px] h-[200px]"
        />
      </div>
    </div>
  );
}

export default function Smaki() {
  const [tabValue, setTabValue] = useState("ultimate");
  const [activeTile, setActiveTile] = useState<string | null>(null);

  const ultimate = {
    title: "ULTIMATE",
    items: [
      {
        name: "RAGNAROK",
        taste: "Truskawka, Porzeczka, Malina, Jeżyna i Mango + Chłodzik",
        image: "/assets/ULTIMATE/RAGNAROK.png",
      },
      {
        name: "ONI ZERO",
        taste: "Limonka i Orzeźwiające Cytrusy",
        image: "/assets/ULTIMATE/ONI.png",
      },
      {
        name: "VALKYRIE ZERO",
        taste: "Mix czerwonych owoców",
        image: "/assets/ULTIMATE/VALKYRIE.png",
      },
      {
        name: "KAMI ZERO",
        taste: "Truskawka i Smoczy Owoc",
        image: "/assets/ULTIMATE/KAMI.png",
      },
      {
        name: "KAMI",
        taste: "Truskawka i Smoczy Owoc + Chłodzik",
        image: "/assets/ULTIMATE/KAMI.png",
      },
      {
        name: "ALUCARD",
        taste: "Waniliowo-Karmelowy Koktajl Mleczny z Nutą Herbatników",
        image: "/assets/ULTIMATE/ALUCARD.png",
      },
      {
        name: "JIRAYA",
        taste: "Puszysta flotanta i słodki karmel",
        image: "/assets/ULTIMATE/JIRAYA.png",
      },
      {
        name: "FURY ZERO",
        taste: "Soczysty smak mango",
        image: "/assets/ULTIMATE/FURY ZERO.png",
      },
      {
        name: "LEVIATHAN-V2",
        taste: "Truskawki z delikatnym chłodzeniem i słodzikiem",
        image: "/assets/ULTIMATE/LEVIATHAN V2.png",
      },
      {
        name: "SHINIGAMI",
        taste: "Kwaśne Jabłko z Zielonymi Żelkami ",
        image: "/assets/ULTIMATE/SHINIGAMI.png",
      },
    ],
  };

  const hiddenpotion = {
    title: "HIDDEN POTION",
    items: [
      {
        name: "SECRET MANGO",
        taste: "Mango, Ananas, Marakuja + Chłodzik",
        image: "/assets/HIDDENPOTION/SECRET MANGO.png",
      },
      {
        name: "MYSTIC RED",
        taste: "Czerwone Owoce i Tajemniczy Składnik + Chłodzik",
        image: "/assets/HIDDENPOTION/MYSTIC RED.png",
      },
      {
        name: "GREEDY LEMON",
        taste: "Beza z cytrynową nutą",
        image: "/assets/HIDDENPOTION/GREEDY LEMON.png",
      },
      {
        name: "RED PINEAPPLE",
        taste: "Ananas z Soczystą Truskawką",
        image: "/assets/HIDDENPOTION/RED PINEAPLE.png",
      },
      {
        name: "PŁATKI Z MLEKIEM",
        taste: "",
        image: "/assets/HIDDENPOTION/PLATKI.png",
      },
    ],
  };

  const lescreations = {
    title: "LES CRÉATIONS",
    items: [
      {
        name: "DIABOLIK",
        taste: "Cytrusy, Leśne Owoce, Mięta + Chłodzik",
        image: "/assets/LESCREATIONS/DIABOLIK.png",
      },
      {
        name: "KAWAII",
        taste: "Smoczy Owoc, Guawa, Truskawka i Kiwi",
        image: "/assets/LESCREATIONS/KAWAII.png",
      },
      {
        name: "HUNGRY BEAR",
        taste: "Leśne Owoce z Lukrecją + Chłodzik",
        image: "/assets/LESCREATIONS/HUNGRY BEAR.png",
      },
    ],
  };

  const tabs = [
    { value: "ultimate", label: "ULTIMATE" },
    { value: "hiddenpotion", label: "HIDDEN POTION" },
    { value: "lescreations", label: "LES CRÉATIONS" },
  ];

  function renderItems(
    category: typeof ultimate | typeof hiddenpotion | typeof lescreations
  ) {
    return (
      <ScrollArea className="h-[calc(100dvh-320px)] xl:h-[600px] pb-[env(safe-area-inset-bottom)] overflow-visible">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
          {category.items.map((item, index) => (
            <FlavorTile
              key={index}
              {...item}
              activeTile={activeTile}
              setActiveTile={setActiveTile}
            />
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
        {/* Mobile Dropdown Menu */}
        <div className="xl:hidden mb-[128px] mt-[-48px] flex justify-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="inline-flex items-center justify-between gap-2 w-[347px] px-6 py-3 bg-[#232329] rounded-xl cursor-pointer text-white font-semibold text-lg select-none">
              {tabs.find((t) => t.value === tabValue)?.label}
              <FaAngleDown className="text-xl" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="z-[60] bg-[#232329] rounded-xl p-2 shadow-lg min-w-[347px] mt-[2px]">
                {tabs.map((tab) => (
                  <DropdownMenu.Item
                    key={tab.value}
                    onSelect={() => setTabValue(tab.value)}
                    className={`relative overflow-hidden px-4 py-2 rounded-xl transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-20 ${
                      tab.value === tabValue ? "before:opacity-20" : ""
                    }`}
                  >
                    {tab.label}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        <Tabs
          value={tabValue}
          onValueChange={setTabValue}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Desktop Tabs List */}
          <TabsList className="hidden xl:flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative overflow-hidden px-4 py-2 rounded transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-700 before:to-purple-500 before:opacity-0 hover:before:opacity-20"
              >
                <span className="relative z-10 opacity-0 animate-fade-in">
                  {tab.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] mt-[-100px] xl:mt-[-150px] w-full">
            <TabsContent value="ultimate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center items-center">
                <GlitchText
                  text={ultimate.title}
                  className="text-4xl xl:text-5xl font-bold"
                />
                {renderItems(ultimate)}
              </div>
            </TabsContent>

            <TabsContent value="hiddenpotion" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center items-center">
                <GlitchText
                  className="text-4xl xl:text-5xl font-bold"
                  text={hiddenpotion.title}
                />
                {renderItems(hiddenpotion)}
              </div>
            </TabsContent>
            <TabsContent value="lescreations" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center items-center">
                <GlitchText
                  className="text-4xl xl:text-5xl font-bold"
                  text={lescreations.title}
                />
                {renderItems(lescreations)}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
