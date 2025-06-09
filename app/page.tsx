"use client";

import { FaAngleDown } from "react-icons/fa6";
import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface FlavorTileProps {
  name: string;
  taste: string;
  image: string;
  activeTile: string | null;
  setActiveTile: (name: string | null) => void;
}

function FlavorTile({ name, taste, image, activeTile, setActiveTile }: FlavorTileProps) {
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
      className="group relative bg-[#232329] h-[184px] py-6 px-4 rounded-xl flex justify-between items-center cursor-pointer transition-all duration-300"
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl before:transition-all before:duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 group-hover:before:opacity-10 touch:before:opacity-0" />

      {isActive && (
        <div className="absolute inset-0 bg-[#0f0f11] bg-opacity-90 z-10 rounded-xl flex items-center justify-center text-center p-4">
          <p className="text-white text-lg font-semibold">{taste}</p>
        </div>
      )}

      <div className="flex flex-col gap-4 w-[130px] h-[150px] sm:w-[250px] z-0 items-center justify-center">
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
          <h3 className="text-2xl sm:text-4xl text-white">{name}</h3>
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
          className="sm:w-[160px] sm:h-[160px] w-[200px] h-[200px]"
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
      { name: "RAGNAROK", taste: "Truskawki, Porzeczka, Malina, Jeżyna i Mango + Chłodzik", image: "/assets/ULTIMATE/RAGNAROK.png" },
      { name: "ONI", taste: "Limonka i Orzeźwiające Cytrusy", image: "/assets/ULTIMATE/ONI.png" },
      { name: "SHINIGAMI", taste: "Kwaśne Jabłko + Chłodzik", image: "/assets/ULTIMATE/SHINIGAMI.png" },
      { name: "VALKYRIE", taste: "Czerwona Porzeczka, Jeżyna, Jagoda i Malina + Chłodzik", image: "/assets/ULTIMATE/VALKYRIE.png" },
      { name: "KAMI", taste: "Truskawka i Smoczy Owoc", image: "/assets/ULTIMATE/KAMI.png" },
      { name: "ALUCARD", taste: "Koktajl Mleczny z Wanilii, Karmelu i Herbatników", image: "/assets/ULTIMATE/ALUCARD.png" },
    ],
  };

  const hiddenpotion = {
    title: "HIDDEN POTION",
    items: [
      { name: "SECRET MANGO", taste: "Mango, Ananas, Marakuja + Chłodzik", image: "/assets/HIDDENPOTION/SECRET MANGO.png" },
      { name: "MYSTIC RED", taste: "Czerwone Owoce i Tajemniczy Składnik + Chłodzik", image: "/assets/HIDDENPOTION/MYSTIC RED.png" },
    ],
  };

  const lescreations = {
    title: "LES CRÉATIONS",
    items: [
      { name: "DIABOLIK", taste: "Owoce Cytrusowe, Czerwone Owoce, Mięta + Chłodzik", image: "/assets/LESCREATIONS/DIABOLIK.png" },
      { name: "QUEEN PEACH", taste: "Brzoskwinia, Malina i Kiwi", image: "/assets/LESCREATIONS/QUEEN PEACH.png" },
      { name: "KAWAII", taste: "Owoc Smoka, Guawa, Truskawka i Kiwi", image: "/assets/LESCREATIONS/KAWAII.png" },
      { name: "FREEZY COLA", taste: "Coca-Cola", image: "/assets/LESCREATIONS/FREEZY COLA.png" },
      { name: "HUNGRY BEAR", taste: "Czerwone Owoce i Cukierki Lukrecji + Chłodzik", image: "/assets/LESCREATIONS/HUNGRY BEAR.png" },
    ],
  };

  const tabs = [
    { value: "ultimate", label: "ULTIMATE" },
    { value: "hiddenpotion", label: "HIDDEN POTION" },
    { value: "lescreations", label: "LES CRÉATIONS" },
  ];

  function renderItems(category: typeof ultimate | typeof hiddenpotion | typeof lescreations) {
    return (
      <ScrollArea className="h-[calc(100dvh-320px)] xl:h-[600px] pb-[env(safe-area-inset-bottom)]">
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
        <div className="xl:hidden mb-[128px] mt-[-48px] flex justify-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="inline-flex items-center justify-between gap-2 w-[347px] px-6 py-3 bg-[#232329] rounded-xl cursor-pointer text-white font-semibold text-lg select-none">
              {tabs.find((t) => t.value === tabValue)?.label}
              <FaAngleDown className="text-xl" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="bg-[#232329] rounded-xl p-2 shadow-lg min-w-[347px] mt-[2px]">
                {tabs.map((tab) => (
                  <DropdownMenu.Item
                    key={tab.value}
                    onSelect={() => setTabValue(tab.value)}
                    className={`relative overflow-hidden px-4 py-2 rounded-xl transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-20 ${tab.value === tabValue ? "before:opacity-20" : ""}`}
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
          <TabsList className="hidden xl:flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative overflow-hidden px-4 py-2 rounded transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 before:opacity-0 hover:before:opacity-20"
              >
                <span className="relative z-10 opacity-0 animate-fade-in">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] max-h-[3] mt-[-100px] w-full">
            <TabsContent value="ultimate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center">
                <h3 className="text-5xl font-bold">{ultimate.title}</h3>
                {renderItems(ultimate)}
              </div>
            </TabsContent>
            <TabsContent value="hiddenpotion" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center">
                <h3 className="text-5xl font-bold">{hiddenpotion.title}</h3>
                {renderItems(hiddenpotion)}
              </div>
            </TabsContent>
            <TabsContent value="lescreations" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-center">
                <h3 className="text-5xl font-bold">{lescreations.title}</h3>
                {renderItems(lescreations)}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
