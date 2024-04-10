"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import OrangeEstate from "../../../public/orangeEstate-demo.mp4";

const PortfolioPage = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-6xl xl:text-8xl text-center">
          Mes projets
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
              <div
                className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300"
              >
                <div className="flex flex-col gap-8 md:gap-3 xl:gap-8 text-white">
                  <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold drop-shadow-md">
                    Orange Estate
                  </h1>
                  {/* <div className="relative w-80 h-45 md:w-96 md:h-56 lg:w-[500px] lg:h-[280px] xl:w-[750px] xl:h-[400px] rounded-xl"> */}
                    <iframe src={OrangeEstate} className="w-80 h-45 md:w-96 md:h-56 lg:w-[500px] lg:h-[280px] xl:w-[750px] xl:h-[400px] rounded-xl">

                    </iframe>
                  {/* </div> */}
                  <div className="w-80 md:w-96 lg:w-[500px] md:text-sm xl:text-lg xl:w-[750px]">
                    <p className="uppercase font-semibold">
                      Projet personnel
                    </p>
                    <p className="text-justify">
                      Site web {`d'agence`} immobilière entièrement responsif. Annonces affichées dynamiquement. Création de profils pour créer/gérer ses annonces. Fonctions de recherche, tri et {`d'authentification`} par email ou compte Google.
                    </p>
                    <p className="text-purple-900">
                      JavaScript | React | Tailwind CSS | Redux | MongoDB | Express | Mongoose | NodeJS | Insomnia
                    </p>
                  <Link
                    href="https://github.com/Jay-Jay-19/orange-estate"
                    target={"_blank"}
                    className="flex items-center justify-center pt-4 md:pt-0 xl:pt-4"
                  >
                    <Image
                      src="/github.png"
                      alt="github logo"
                      width={30}
                      height={30}
                      className="md:w-9 md:h-9"
                    />
                  </Link>
                </div>
              </div>
            </div>
              <div
                className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-violet-300"
              >
                <div className="flex flex-col gap-8 md:gap-3 xl:gap-8 text-white">
                  <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold drop-shadow-md">
                    Gotcha !
                  </h1>
                  <div className="relative w-80 h-48 md:w-96 md:h-56 lg:w-[500px] lg:h-[280px] xl:w-[750px] xl:h-[400px]">
                    <Image src="/comingSoon-screen.png" fill alt="" className="rounded-xl" />
                  </div>
                  <div className="w-80 md:w-96 lg:w-[500px] md:text-sm xl:text-lg xl:w-[750px]">
                    <p className="uppercase font-semibold">
                      Projet personnel
                    </p>
                    <p className="text-justify">
                      Application mobile de livraison de repas à domicile. Affichage des restaurants et des plats en dynamique. Création {`d'un`} panier en dynamique. Intégration Google Maps.
                    </p>
                    <p className="text-purple-900">
                      JavaScript | React Native | Tailwind CSS | Redux | Sanity | Expo | Android Studio
                    </p>
                  <Link
                    href="https://github.com/Jay-Jay-19/gotcha"
                    target={"_blank"}
                    className="flex items-center justify-center pt-4 md:pt-0 xl:pt-4"
                  >
                    <Image
                      src="/github.png"
                      alt="github logo"
                      width={30}
                      height={30}
                      className="md:w-9 md:h-9"
                    />
                  </Link>
                </div>
              </div>
            </div>
              <div
                className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-violet-300 to-purple-300"
              >
                <div className="flex flex-col gap-8 md:gap-3 xl:gap-8 text-white">
                  <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold drop-shadow-md">
                    Vintage Gallery
                  </h1>
                  <div className="relative w-80 h-48 md:w-96 md:h-56 lg:w-[500px] lg:h-[280px] xl:w-[750px] xl:h-[400px]">
                    <Image src="/vintageGallery.jpg" fill alt="" className="rounded-xl" />
                  </div>
                  <div className="w-80 md:w-96 lg:w-[500px] md:text-sm xl:text-lg xl:w-[750px]">
                    <p className="uppercase font-semibold">
                      Projet {`d'école`}
                    </p>
                    <p className="text-justify">
                      Site e-commerce de meubles de seconde main. Affichage des articles et de leurs fiches en dynamique, création des routes avec middleware, authentification, hachage de mot de passe, gestion des tokens.
                    </p>
                    <p className="text-purple-900">
                      JavaScript | React | Bootstrap | MongoDB | Mongoose | Express | NodeJS | Postman
                    </p>
                  <Link
                    href="https://github.com/adatechschool/projet-meubles-abelson-bastien-bruno-ghislaine-jay-thalia-zineb"
                    target={"_blank"}
                    className="flex items-center justify-center pt-4 md:pt-0 xl:pt-4"
                  >
                    <Image
                      src="/github.png"
                      alt="github logo"
                      width={30}
                      height={30}
                      className="md:w-9 md:h-9"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 md:gap-6 xl:gap-16 md:pt-72 xl:p-0 items-center justify-center text-center">
        <h1 className="text-6xl">Do you have a project ?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Fullstack Web & App Developer Est. 2023
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="text-sm w-20 h-20 md:w-36 md:h-36 md:text-xl absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire me !
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;