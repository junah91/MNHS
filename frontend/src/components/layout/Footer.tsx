"use client";

import React from "react";

// Add interface for props
interface FooterProps {
  className?: string; // <-- allow className
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`bg-green-700 text-white py-6 w-full ${className || ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center text-center gap-4">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-bold">
            Mantalongon National High School
          </h3>
          <p className="text-sm">
            Brgy. Mantalongon, Dalaguete, Cebu, Philippines
          </p>
          <p className="text-sm">(032) 123-4567</p>
          &copy; {new Date().getFullYear()} MNHS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
