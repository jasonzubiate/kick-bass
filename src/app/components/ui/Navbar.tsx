"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const pages = ["community", "coaches", "tutorials", "pricing", "shop"];
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <nav className="fixed top-4 lg:top-8 left-1/2 transform -translate-x-1/2">
      <ul className="flex gap-6 px-5 py-2 rounded-full bg-demoSmoke">
        {pages.map((page, index) => (
          <NavLink
            key={index}
            page={page}
            href={`/${page}`}
            selected={selectedPage === page}
            setSelected={setSelectedPage}
          />
        ))}
      </ul>
    </nav>
  );
}

type NavLinkProps = {
  page: string;
  href: string;
  selected: boolean;
  setSelected: (selected: string) => void;
};

function NavLink({ page, href, selected, setSelected }: NavLinkProps) {
  return (
    <li
      onClick={() => setSelected(page)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      {page === "shop" ? (
        <>
          <a
            href={"https://kick-bass.store/"}
            target="_blank"
            className="nav__link"
          >
            {page}
          </a>
          {selected && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
            ></motion.span>
          )}
        </>
      ) : (
        <>
          <Link href={`/${page}`} className="nav__link">
            {page}
          </Link>
          {selected && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
            ></motion.span>
          )}
        </>
      )}
    </li>
  );
}
