"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";

import TabButton from "./TabButton";

import { TAB_DATA } from "../userData";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center ">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-center lg:text-left">
            I am a self taught software engineer. Highly passionate about
            designing systems for large scale applications. Currently working as
            an Associate software at Xylexa Inc. Contributing in an Open source
            OHIF Monorepo for developing highly optimized front-end application
            to deal with large size, hundreds of DICOM images. Throughout my
            career, I have worked across variety of technologies developing
            highly optimized front-end and back-end services following best
            coding practices. I am also the author and maintainer of some
            opensource projects such as secure-local-storage-hook(an npm package
            that securely manages local storage while ensuring data type
            integrity) and Quick Word Definition Tool (Helping online readers to
            get word definition instantly without getting distracted). Holds
            bachelors in engineering from NUST. I am also a part of GSoC famous
            Open source project organizations such as Plone and Joomla as an
            open source contributor. I really love to write, teach and talk
            about tech. In addition, I love teaching and sharing knowledge,
            helping foster the next generation of tech enthusiasts.
          </p>
          <div className="flex flex-row justify-center mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              <span className="text-2xl">Skills </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              <span className="text-2xl">Experience </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              <span className="text-2xl">Education </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              <span className="text-2xl">Certifications </span>
            </TabButton>
          </div>
          {tab === "skills" && (
            <motion.div
              className="mt-8"
              variants={cardVariants}
              initial="initial"
              animate={tab === "skills" ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {TAB_DATA[0].content}
            </motion.div>
          )}
          {tab === "experience" && (
            <motion.div
              className="mt-8"
              variants={cardVariants}
              initial="initial"
              animate={tab === "experience" ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {TAB_DATA[1].content}
            </motion.div>
          )}
          {tab === "education" && (
            <motion.div
              className="mt-8"
              variants={cardVariants}
              initial="initial"
              animate={tab === "education" ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {TAB_DATA[2].content}
            </motion.div>
          )}
          {tab === "certifications" && (
            <motion.div
              className="mt-8"
              variants={cardVariants}
              initial="initial"
              animate={tab === "certifications" ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {TAB_DATA[3].content}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
