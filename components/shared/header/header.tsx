import React from "react";
import MobileSidebar from "./MobileSidebar";
import Link from "next/link";

const header = () => {
  return (
    <div>
      <div className="lg:block hidden">
        <nav className="flex space-x-6 justify-center py-4 text-xl ">
          <Link href="/" className="hover:font-bold">
            Home
          </Link>
          <Link href="/" className="hover:font-bold">
            Services
          </Link>
          <Link href="/" className="hover:font-bold">
            About
          </Link>
          <Link href="/" className="hover:font-bold">
            Contact
          </Link>
        </nav>
      </div>
      <MobileSidebar />
    </div>
  );
};

export default header;
