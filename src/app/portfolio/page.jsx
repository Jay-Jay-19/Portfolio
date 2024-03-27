"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Orange Estate",
    projectType: "Projet personnel.",
    desc: "Orange Estate est un site d'agence immobilière fictif entièrement responsif. Les annonces sont affichées dynamiquement. Possibilté de créer un profil pour créer/gérer ses annonces. Fonctions de recherche, tri et d'authentification par email ou compte Google.",
    tech: "JavaScript | React | Tailwind CSS | Redux | MongoDB | Express | Mongoose | NodeJS | Insomnia" ,
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/Jay-Jay-19/orange-estate",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    projectType: "Projet personnel.",
    title: "Gotcha !",
    desc: "Application mobile de livraison de repas à domicile. Affichage des restaurants et des plats en dynamique. Création d'un panier en dynamique. Intégration Google Maps.",
    tech: "JavaScript | React Native | Tailwind CSS | Redux | Sanity | Expo | Android Studio",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/Jay-Jay-19/gotcha",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    projectType: "Projet d'école.",
    title: "Vintage Gallery",
    desc: "Site e-commerce de meubles de seconde main. Affichage des articles et de leurs fiches en dynamique, création des routes avec middleware, authentification, hachage de mot de passe, gestion des tokens.",
    tech: "JavaScript | React | Bootstrap | MongoDB | Mongoose | Express | NodeJS | Postman",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://github.com/adatechschool/projet-meubles-abelson-bastien-bruno-ghislaine-jay-thalia-zineb",
  },
];

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
        <div className="w-screen h-[calc(100vh-6rem)] flex justify-center items-center text-8xl text-center">
          Mes projets
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl drop-shadow-md">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <div className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] flex flex-col gap-3">
                    <p>
                      {item.projectType}
                    </p>
                    <p className="text-justify">
                      {item.desc}
                    </p>
                    <p className="text-sm text-purple-900">
                      {item.tech}
                    </p>
                  </div>
                  <Link href={item.link} className="flex items-center justify-center">
                    <Image src="/github.png" alt="github logo" width={34} height={34} className="md:w-10 md:h-10" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project ?</h1>
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