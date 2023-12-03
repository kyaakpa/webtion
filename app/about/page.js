"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mb-24">
      <div className="max-md:text-5xl md:text-7xl max-[550px]:mx-10 max-sm:mx-20 max-md:mx-40 md:mx-64  tracking-tighter mt-24">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.3, delay: 0.1 }}
          animate="visible"
          className=" font-bold"
        >
          Hey there&#128075;
        </motion.h2>{" "}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.3, delay: 0.15 }}
          animate="visible"
          className=" font-bold"
        >
          I'm Sohit
        </motion.h2>
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.3, delay: 0.2 }}
          animate="visible"
          className="font-semibold"
        >
          Web Developer,
        </motion.h3>
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          transition={{ duration: 0.3, delay: 0.25 }}
          animate="visible"
          className="font-medium"
        >
          Undergrad Student
        </motion.h3>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.5 }}
          animate="visible"
          className="max-md:mt-12 md:mt-20 max-md:text-xl md:text-3xl tracking-tight leading-10"
        >
          I'm actively shaping my skills in both the theoretical and practical
          realms. I enjoy building those digital spaces that make businesses
          shine online! If there's anything specific you'd like to chat about or
          discuss, feel free to let me know!
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.5 }}
          animate="visible"
          className="max-md:mt-12 md:mt-20 max-md:text-xl md:text-3xl tracking-tight text-right leading-10"
        >
          Contact me at{" "}
          <a
            href="mailto:kyaakpalama@gmail.com"
            className="text-green-600 hover:text-red-500 transition-colors duration-300 ease-in"
          >
            kyaakpalama@webtion.org
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default About;
