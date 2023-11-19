"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center mt-24 gap-4 max-h-screen max-w-screen">
      <div className="relative w-full max-w-lg z-20">
        <div className="absolute top-0 -left-4 sm:w-[500px] sm:h-[500px] w-[300px] h-[300px] bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 sm:w-[500px] sm:h-[500px] w-[300px] h-[300px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute left-20 sm:w-[500px] sm:h-[500px] w-[300px] h-[300px] bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex flex-col items-center gap-4 z-30 px-12">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.3, delay: 0.09 }}
          animate="visible"
          className="sm:text-9xl text-8xl font-bold  p-3 tracking-tight from-black to-neutral-600 text-transparent bg-gradient-to-b bg-clip-text"
        >
          Webtion
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.5, delay: 0.5 }}
          animate="visible"
          className="animate-text bg-gradient-to-r from-red-600 via-purple-800 to-pink-500 bg-clip-text text-transparent sm:text-5xl text-3xl text-neutral-800 font-bold text-center p-2"
        >
          Professional Website Solution for your Business
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.5, delay: 1 }}
          animate="visible"
          className="animate-bounce sm:text-3xl text-xl font-semibold pt-40 text-neutral-100"
        >
          <Link
            href="/services"
            className=" font-bold p-4 bg-[linear-gradient(45deg,transparent_50%,rgba(68,68,68,.4)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat  transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1200ms] text-black bg-[rgba(255,255,255,0.05)] border-2 border-neutral-700 rounded-2xl"
          >
            Order Now
          </Link>{" "}
        </motion.p>
      </div>
    </div>
  );
};

export default Welcome;
