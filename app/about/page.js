import Image from "next/image";
import avatar from "@/public/white-avatar.png";
const About = () => {
  return (
    <div className="flex text-white">
      <div className="pl-8 px-8">
        <h2 className="underline underline-offset-8 decoration-emerald-400 text-5xl font-bold tracking-tighter">
          About Us
        </h2>
        <div className="w-full flex">
          <p className="bg-blue-900 mt-4 tracking-tight w-2/3 p-4 rounded-br-xl rounded-tr-xl">
            <span className="text-3xl font-semibold">W</span>elcome to{" "}
            <span className="text-2xl">Webtion,</span> where creativity meets
            expertise in the world of web development. We are a passionate team
            of developers with diverse backgrounds, united by our common goal of
            creating stunning websites and providing exceptional service to our
            clients.
          </p>
          <div className="flex  justify-center content-center w-1/3">
            <Image
              src={avatar}
              width={100}
              height={100}
              alt="White Person Avatar"
              className="self-center"
            />
          </div>
        </div>
        <h4 className="text-2xl font-semibold pt-8">Our Team</h4>
        <p>
          At Webtion, we take pride in our team of experienced developers. Each
          member of our team brings a unique set of skills and perspectives to
          the table, resulting in a harmonious blend of creativity and technical
          know-how. With years of collective experience, our team is
          well-equipped to handle the most complex web development projects and
          turn your vision into reality.
        </p>{" "}
        Our Team Our Approach We believe that a successful website is not just
        about aesthetics; it's about functionality, user experience, and the
        perfect balance of creativity and technology. Our approach is centered
        around collaboration, innovation, and a client-first mindset. We work
        closely with you to understand your specific needs and objectives,
        ensuring that every website we create is a true reflection of your
        brand. Why Choose Us? Experience: Our team comprises developers from
        various backgrounds, giving us a wealth of knowledge and expertise to
        draw from. Creativity: We're not just developers; we're artists. We
        infuse creativity into every project, ensuring your website stands out.
        Friendly Team: We're not just experts; we're friendly, approachable, and
        easy to work with. We value open communication and collaboration.
        Client-Centric: Your success is our success. We put your needs at the
        forefront of everything we do. Cutting-Edge Technology: We stay up to
        date with the latest industry trends and technologies, ensuring your
        website is modern and efficient. Let's Work Together Whether you're a
        startup looking to establish your online presence, an established
        business seeking a fresh digital makeover, or anyone in between, Company
        Name is here to make your web development journey enjoyable and
        successful. Get in touch with our friendly team today, and let's bring
        your web dreams to life.
      </div>
    </div>
  );
};

export default About;
