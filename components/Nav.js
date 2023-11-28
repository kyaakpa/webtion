"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex justify-center pt-20 sm:pt-16 sm:gap-12 gap-6 max-[500px]:gap-4 max-[500px]:text-base text-xl h-[15vh] text-neutral-800">
        <li className={path === "/" ? "active" : "inactive"}>
          <Link href="/">welcome</Link>
        </li>
        <li className={path === "/services" ? "active" : "inactive"}>
          <Link href={"/services"}>services</Link>
        </li>
        <li className={path === "/contact" ? "active" : "inactive"}>
          <Link href={"/contact"}>contact</Link>
        </li>
        <li className={path === "/about" ? "active" : "inactive"}>
          <Link href={"/about"}>about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;