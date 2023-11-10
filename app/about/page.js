import Image from "next/image";
import avatar from "@/public/white-avatar.png";
const About = () => {
  return (
    <div className="flex text-white mb-24">
      <div className="pl-8 px-8 mt-8">
        <h2 className="underline underline-offset-8 decoration-emerald-400 text-6xl font-bold tracking-tight mb-10">
          About Us
        </h2>
        <div className="w-full flex ">
          <p className="bg-gradient-to-b from-blue-900 to-blue-950 mt-4 w-2/3 p-6 pr-24 rounded-r-full leading-10">
            <span className="text-3xl max-sm:text-2xl font-medium">W</span>
            elcome to <span className="text-2xl max-sm:text-xl">
              Webtion,
            </span>{" "}
            where creativity meets expertise in the world of web development. We
            are a passionate team of developers with diverse backgrounds, united
            by our common goal of creating stunning websites and providing
            exceptional service to our clients.
          </p>
          <div className="flex  justify-center content-center w-1/3 ">
            <Image
              src={avatar}
              width={100}
              height={100}
              alt="White Person Avatar"
              className="self-center"
            />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-950 to-teal-800 rounded-full">
          <h4 className="text-3xl font-semibold pt-8 text-center mt-20">
            Our Team
          </h4>
          <p className="leading-10 py-8 px-20 text-center">
            Webtion's seasoned developers form a dynamic team, each bringing
            unique skills and perspectives to the table. With a blend of
            creativity and technical expertise, we are well-equipped to handle
            intricate web development projects. Trust us to turn your vision
            into a reality, leveraging our collective years of experience for
            successful outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
