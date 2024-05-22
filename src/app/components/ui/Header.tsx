"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/img/Secondary-Logotype-White.png";
import Link from "next/link";
// import { TbArrowUpRight } from "react-icons/tb";
import HeaderCTA from "./HeaderCTA";
import MenuButton from "./MenuButton";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Link href={"/"} className="fixed top-4 lg:top-8 left-4 lg:left-8">
        <Image src={logo} alt="Kick & Bass" height={32} width={110} />
      </Link>
      <nav className="fixed top-4 lg:top-8 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-6 px-6 py-3 rounded-full bg-demoSmoke">
          <li>
            <Link href="/community" className="nav__link">
              Community
            </Link>
          </li>
          <li>
            <Link href="/coaches" className="nav__link">
              Coaches
            </Link>
          </li>
          <li>
            <Link href="/tutorials" className="nav__link">
              Tutorials
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="nav__link">
              Pricing
            </Link>
          </li>
          <li>
            <a
              href="https://kick-bass.store/"
              target="_blank"
              className="nav__link"
            >
              Shop
            </a>
          </li>
        </ul>
      </nav>
      {/* <HeaderCTA /> */}
      <MenuButton isOpen={menuOpen} setIsOpen={setMenuOpen} />
    </header>
  );
}
