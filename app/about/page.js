"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      {/* <div className=" mt-8">
        <h2 className="text-center text-6xl font-extrabold tracking-tighter mb-10">
          About Us
        </h2>
        <div className="w-full flex justify-center">
          <p className=" mt-4 p-8 pr-24 leading-10 text-center italic">
            <span className="text-2xl font-serif">"</span> We are a passionate
            team of developers with diverse backgrounds, united by our common
            goal of creating stunning websites and providing exceptional service
            to our clients.<span className="text-2xl font-serif">"</span>
          </p>
        </div>
        <div className="rounded-full">
          <h4 className="text-5xl font-bold pt-8 text-center mt-20  ">
            Our Team
          </h4>
          <p className="leading-10 py-8 px-16 text-center">
            Webtion's seasoned developers form a dynamic team, each bringing
            unique skills and perspectives to the table. With a blend of
            creativity and technical expertise, we are well-equipped to handle
            intricate web development projects. Trust us to turn your vision
            into a reality, leveraging our collective years of experience for
            successful outcomes.
          </p>
        </div>
      </div> */}
      <div className="max-md:text-5xl md:text-7xl md:mx-20 max-md:mx-10 tracking-tighter mt-12">
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
          Hey there &#128075;,
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
          I'm <span className="underline decoration-green-500">Sohit</span>
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
        <p className="max-md:mt-12 md:mt-20 max-md:text-xl md:text-3xl tracking-tight leading-10">
          Contact me at{" "}
          <a
            href="mailto:kyaakpalama@gmail.com"
            className="text-green-700  hover:text-red-500 transition-colors duration-300 ease-in"
          >
            kyaakpalama@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
