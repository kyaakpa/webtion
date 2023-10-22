"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex p-12 pt-20 gap-12 text-xl text-neutral-500">
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
