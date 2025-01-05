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
      company: "RAGNAROK",
      duration: "Truskawki, Porzeczka, Malina, Jeżyna i Mango,",
      image: "/assets/RAGNAROK.png",
    },
    {
      company: "ONI",
      duration: "Limonka i Orzeźwiające Cytrusy",
      image: "/assets/ONI.png",
    },
    {
      company: "E-commerce Startup",
      duration: "2020 - 2021",
      image: "/assets/RAGNAROK.png",
    },
    {
      company: "Tech Academy",
      duration: "2019 - 2020",
      image: "/assets/RAGNAROK.png",
    },
    {
      company: "Digital Agency",
      duration: "2018 - 2019",
      image: "/assets/RAGNAROK.png",
    },
    {
      company: "Software Development Firm",
      duration: "2017 - 2018",
      image: "/assets/RAGNAROK.png",
    },
  ],
};

// HIDDEN POTION data
const hiddenpotion = {
  title: "HIDDEN POTION",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// LES CRÉATIONS data
const lescreations = {
  title: "LES CRÉATIONS",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// PANDA data
const panda = {
  title: "PANDA",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codeacademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
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
            <TabsTrigger value="panda">PANDA</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="ultimate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{ultimate.title}</h3>
                <ScrollArea className="h-[650px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {ultimate.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-row justify-between items-center"
                      >
                        <div className="flex flex-col gap-4 w-[200px] h-[150]">
                          <div className="flex items-center gap-2">
                            <span className="w-[10px] h-[10px] rounded-full bg-accent"></span>
                            <h3 className="text-xl text-left">
                              {item.company}
                            </h3>
                          </div>
                          <span className="text-accent text-left">
                            {item.duration}
                          </span>
                        </div>
                        <div className="">
                          <Image
                            src={item.image}
                            priority
                            quality={100}
                            width={150}
                            height={150}
                            alt={item.company}
                            className=""
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="hiddenpotion" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{hiddenpotion.title}</h3>
                <ScrollArea className="h-[650px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {hiddenpotion.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] text-center min-h-[60px] lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="lescreations" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{lescreations.title}</h3>
                <ScrollArea className="h-[650px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {lescreations.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] text-center min-h-[60px] lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="panda" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{panda.title}</h3>
                <ScrollArea className="h-[650px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {panda.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] text-center min-h-[60px] lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p>{item.institution}</p>
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
