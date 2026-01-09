"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ strapiLinks = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = strapiLinks.map((l) => ({
    name: l.label,
    href: l.href,
  }));

  return (
    <>
      <nav className="sticky top-0 z-50 flex w-full items-center bg-white/50 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-24">
        {/* 1. Left Side: Logo */}
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              className="h-8.5 w-auto"
              width={205}
              height={48}
            />
          </Link>
        </div>

        {/* 2. Center: Nav Links (Desktop Only) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-7 text-gray-700">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-black font-medium whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Right Side: Empty Space / Mobile Toggle */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="transition active:scale-90 md:hidden"
          >
            <MenuIcon className="size-6.5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white text-lg font-medium transition duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block text-gray-800 transition hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button onClick={() => setIsOpen(false)} className="mt-4">
          <XIcon />
        </button>
      </div>
    </>
  );
}
