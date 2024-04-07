"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Homepage = () => {
  return (
  <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 xl:gap-10 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold">Créons <span className="text-transparent font-permanentMarker bg-clip-text bg-gradient-to-br from-pink-700 to-purple-300">{`aujourd'hui`}</span> les expériences digitales de <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600">demain</span>.</h1>
        {/* DESCRIPTION */}
        <p className="md:text-lg xl:text-xl">
          Bienvenue sur mon site web. Je souhaite {`qu'il`} laisse entrevoir mon désir {`d'audace`} et de créativité à travers les différents projets mis en avant dans mon portfolio. Ils traduisent ma passion pour le code, mon oeil pour {`l'esthétisme`} tout autant que mon implication et mon aspiration à {`l'excellence`}.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-6 justify-center sm:justify-start">
          <MotionLink
            href="/portfolio"
            className="p-2 rounded ring-1 ring-black bg-black text-white"
            whileHover={{ scale: 1.05, rotate: "2.95deg", backgroundColor: "purple" }}
            whileTap={{ scale: 0.95 }}
          >
            Mes projets
          </MotionLink>
          <MotionLink
            href="/CV-Gilbert-Mougamadou.pdf"
            target={"_blank"}
            whileHover={{ scale: 1.10, rotate: "-5.95deg", backgroundColor: "purple", color: "white" }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded ring-1 ring-black"
          >
            Mon CV
          </MotionLink>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default Homepage;
