"use client"

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur inventore laboriosam odit officia commodi non optio veritatis, accusamus veniam ullam blanditiis suscipit ipsum, facilis est quibusdam atque, vero velit? Dolor pariatur nihil mollitia commodi voluptatem enim eum perspiciatis quia est quis dignissimos, nisi exercitationem repudiandae. Corrupti, animi deserunt! Nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam ea necessitatibus?
            </span>
            {/* BIOGRAPHY SIGNATURE SVG*/}
            <div className="self-end">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="200"
                viewBox="0 0 500 500"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                <path d="M2761 4408 c-25 -123 -33 -320 -37 -958 -3 -371 -7 -686 -10 -700 -8
                  -37 -20 -9 -35 85 -10 57 -14 201 -14 507 0 234 -3 430 -7 434 -15 14 -37 -19
                  -87 -133 -96 -214 -253 -475 -353 -586 l-43 -47 -68 12 c-94 17 -183 0 -326
                  -62 -223 -97 -354 -189 -444 -313 -89 -121 -75 -189 48 -222 121 -33 235 1
                  390 117 75 56 250 227 356 348 l66 75 58 -39 c63 -44 138 -130 166 -191 38
                  -82 15 -277 -57 -496 -36 -109 -68 -174 -82 -165 -4 2 -64 21 -132 41 -370
                  107 -817 185 -1229 213 l-105 7 -39 90 c-100 231 -141 428 -135 646 3 134 4
                  137 42 215 29 59 59 99 115 156 66 65 85 79 136 93 51 15 70 16 144 6 183 -25
                  336 -100 496 -241 88 -78 115 -94 115 -67 0 24 -31 56 -113 120 -190 147 -372
                  220 -552 221 -117 1 -176 -26 -265 -121 -127 -135 -170 -282 -150 -507 17
                  -195 54 -342 131 -519 21 -49 36 -93 33 -98 -3 -5 -26 -9 -51 -9 -70 0 -243
                  -28 -367 -59 -252 -64 -378 -112 -354 -136 2 -2 51 12 108 31 237 80 524 139
                  640 132 l54 -3 67 -112 c115 -194 268 -375 381 -451 123 -84 345 -172 431
                  -172 95 0 243 59 356 143 100 73 165 149 264 309 l17 28 93 -34 c146 -53 288
                  -113 477 -200 167 -78 460 -234 488 -261 11 -10 7 -16 -22 -33 -53 -32 -78
                  -77 -72 -132 10 -98 51 -134 114 -103 35 18 57 49 92 136 18 43 22 47 40 37
                  49 -26 261 -193 257 -203 -2 -6 -31 -16 -65 -23 -91 -19 -160 -59 -171 -101
                  -15 -55 3 -99 51 -124 48 -25 97 -22 156 8 33 18 99 89 128 139 10 18 17 14
                  90 -50 144 -127 425 -410 465 -469 27 -39 46 -57 61 -57 19 0 20 4 14 63 -16
                  147 -95 471 -560 2302 -107 424 -211 848 -231 943 -45 221 -78 311 -107 299
                  -19 -7 -29 -67 -78 -501 -49 -428 -75 -588 -136 -839 -32 -132 -53 -196 -68
                  -214 l-22 -26 -23 29 c-23 28 -23 28 -16 4 19 -66 80 -78 109 -21 22 42 120
                  526 155 761 16 113 41 300 55 415 32 257 35 275 46 275 11 0 25 -46 45 -150
                  30 -154 65 -300 170 -710 122 -473 146 -573 340 -1430 80 -355 168 -737 196
                  -849 27 -112 47 -207 44 -210 -3 -2 -48 40 -99 95 -51 54 -166 164 -255 243
                  -88 80 -161 147 -161 150 0 3 9 49 20 101 11 52 20 111 20 131 0 67 -54 77
                  -66 12 -4 -20 -16 -41 -30 -50 -39 -25 -49 -13 -49 58 0 57 -2 64 -20 64 -13
                  0 -26 -13 -38 -38 -24 -52 -39 -38 -31 29 6 48 4 58 -16 79 -30 32 -62 38
                  -119 21 -27 -8 -52 -12 -55 -9 -10 10 -7 91 4 98 6 3 10 17 10 31 0 20 -5 24
                  -28 24 -16 0 -32 -8 -39 -18 -6 -11 -36 -29 -67 -42 -39 -16 -56 -28 -56 -41
                  0 -29 17 -31 65 -10 40 18 47 18 52 5 10 -26 -11 -79 -32 -82 -11 -1 -72 27
                  -135 64 -267 153 -692 346 -968 439 -10 4 -9 13 4 42 108 252 153 528 105 647
                  -25 62 -103 156 -166 202 -36 25 -63 50 -59 55 3 5 34 47 69 94 76 100 134
                  197 244 407 45 87 87 161 93 164 7 4 7 -39 1 -137 -21 -372 19 -960 69 -990
                  45 -28 52 68 53 796 1 647 2 664 27 843 14 100 27 185 30 188 20 19 79 -195
                  239 -868 63 -262 115 -475 117 -473 5 4 -114 576 -148 715 -16 63 -50 205 -75
                  315 -75 320 -108 405 -155 405 -14 0 -21 -12 -29 -52z m-618 -1427 c5 -5 -32
                  -56 -82 -114 -154 -178 -338 -337 -451 -391 -55 -26 -76 -30 -140 -30 -96 1
                  -153 25 -158 67 -6 52 78 163 193 254 86 68 345 198 435 218 66 15 187 12 203
                  -4z m-977 -706 c247 -27 547 -81 769 -136 162 -41 328 -89 338 -98 18 -18 -81
                  -157 -180 -252 -131 -128 -289 -209 -405 -209 -49 0 -186 44 -273 88 -159 79
                  -271 178 -401 352 -73 98 -164 242 -164 260 0 15 163 12 316 -5z m2502 -737
                  c11 -14 -7 -70 -28 -83 -12 -8 -50 21 -50 39 0 21 31 56 49 56 10 0 23 -6 29
                  -12z m-128 -33 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10
                  -7 10 -15z m-84 -30 c7 -17 -34 -109 -63 -145 -17 -20 -23 -22 -36 -11 -22 17
                  -31 66 -17 91 11 21 86 80 102 80 5 0 11 -7 14 -15z m264 -100 c14 -4 38 -19
                  54 -32 22 -19 39 -24 70 -21 l41 3 -3 -40 c-2 -22 -7 -43 -11 -47 -7 -7 -201
                  146 -201 158 0 4 6 2 13 -4 6 -5 23 -13 37 -17z m124 -204 c7 -11 -61 -99 -99
                  -129 -54 -43 -124 -36 -147 14 -15 32 -4 51 42 78 58 34 191 58 204 37z"
                />
                <path d="M3171 2994 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                <path d="M3181 2954 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                <path d="M3550 1840 c0 -11 6 -20 14 -20 21 0 31 21 15 31 -22 14 -29 11 -29
                  -11z"/>
                </g>
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React Native
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Mongoose
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PHP
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apache
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Sanity
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Expo
              </div>
            </div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;