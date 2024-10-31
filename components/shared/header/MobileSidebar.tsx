"use client";

import Link from "next/link";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SVg from "@/components/svg/svg";
import ThreeLine from "@/components/svg/threeLine";
import CloseIcon from "@/components/svg/close";
import RightArrow from "@/components/svg/arrow";

const sidebarVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const downRef = useRef<HTMLDivElement>(null);

  const navItems = [
    {
      id: 1,
      name: "Home",
      icon: <RightArrow className="w-6 h-6" />,
      link: "/",
    },
    {
      id: 2,
      name: "Services",
      icon: <RightArrow className="w-6 h-6" />,
      link: "/",
    },
    {
      id: 3,
      name: "About",
      icon: <RightArrow className="w-6 h-6" />,
      link: "/",
    },
    {
      id: 4,
      name: "Contact",
      icon: <RightArrow className="w-6 h-6" />,
      link: "/",
    },
  ];

  // Close the sidebar when clicking outside of it
  const closeSidebar = useCallback(
    (e: MouseEvent) => {
      if (downRef.current && !downRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    },
    [downRef]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeSidebar);
    } else {
      document.removeEventListener("mousedown", closeSidebar);
    }
    return () => document.removeEventListener("mousedown", closeSidebar);
  }, [isOpen, closeSidebar]);

  return (
    <div className="lg:hidden relative z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className=" bg-primary_light dark:bg-primary_dark w-full px-4 py-2  shadow-md text-primary_light_5 dark:text-primary_light_3"
        aria-label="Open Sidebar"
      > 
        <ThreeLine className="w-6 h-6" />
      </button>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={downRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 w-64 h-screen bg-primary_light dark:bg-primary_dark p-4 border border-primary_light_5 shadow-lg rounded-r-xl overflow-y-auto"
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Sidebar"
                className="text-primary_light_5 dark:text-primary_light_3"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <motion.ul
              variants={sidebarVariants}
              className="flex flex-col gap-6"
            >
              {navItems.map((item) => (
                <motion.li
                  variants={liVariants}
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.link} className="flex gap-2 items-center">
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-sm text-primary_dark dark:text-primary_light_3">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileSidebar;
