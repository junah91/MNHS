/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NAV_ITEMS = [
  { href: "/Home", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Programs", label: "Programs" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="MNHS Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-green-700">MNHS</span>
        </Link>

        {/* Nav Links (centered) */}
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={`${navigationMenuTriggerStyle()} text-gray-700 hover:text-green-700 font-medium`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Login Button (right side) */}
        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </Button>
      </div>
    </header>
  );
}
