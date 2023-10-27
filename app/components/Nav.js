"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();

  return (
    <nav>
      <ul
        className={
          path === "/contact"
            ? "flex max-lg:bg-blue-900  justify-center pt-20 sm:pt-16 sm:gap-12 gap-6 text-xl h-[15vh] text-neutral-400 max-lg:text-neutral-300"
            : "flex justify-center pt-20 sm:pt-16 sm:gap-12 gap-6 text-xl h-[15vh] text-neutral-500"
        }
      >
        <li className={path === "/welcome" ? "active" : "inactive"}>
          <Link href="/welcome">welcome</Link>
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
