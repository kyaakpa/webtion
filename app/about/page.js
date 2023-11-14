const About = () => {
  return (
    <div className="flex mb-24 text-lg">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed -z-10 max-lg:-bottom-[300px] w-[1000px] lg:top-[200px] lg:bottom-1 lg:left-[400px] lg:right-1 opacity-40"
      >
        <path
          fill="#f00"
          d="M26.7,-47.4C31.6,-33.2,30.3,-21.3,35.6,-10.3C40.9,0.7,52.8,10.8,53.1,19.5C53.4,28.1,42.1,35.3,31.3,36.3C20.6,37.2,10.3,32,0.7,31.1C-9,30.2,-17.9,33.6,-29.3,32.8C-40.8,32.1,-54.7,27.2,-61.6,17.3C-68.5,7.5,-68.4,-7.4,-60.9,-16.5C-53.4,-25.6,-38.5,-29,-27.1,-41C-15.7,-53.1,-7.9,-73.7,1.5,-75.8C10.9,-78,21.9,-61.5,26.7,-47.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className=" mt-8">
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
      </div>
    </div>
  );
};

export default About;
