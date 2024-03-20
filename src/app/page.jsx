"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">Créons aujourd'hui les expériences de demain.</h1>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          Bienvenue dans mon univers digital où vous pourrez je l'espère entrevoir mon désir d'audace et de créativité à travers les différents projets mis en avant dans mon portfolio. Ils traduisent ma passion pour le code, mon oeil pour l'esthétisme tout autant que mon implication et mon aspiration à l'excellence.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <Link
            href="/portfolio"
            className="p-3 rounded ring-1 ring-black bg-black text-white"
          >
            Mes projets
          </Link>
          <Link
            href="/contact"
            className="p-3 rounded ring-1 ring-black"
          >
            Contactez-moi
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

export default Homepage;
