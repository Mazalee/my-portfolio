"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { Navlinks } from "@/utils/data";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.navbar}
    >
      <div className={styles.container}>
        {/* Logo section */}
        <div>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoCircle}>P</div>
              <h1>ortfolio</h1>
            </div>
          </Link>
        </div>

        {/* Links section */}
        <div className={styles.linksWrapper}>
          <ul className={styles.linksList}>
            {Navlinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className={`${styles.link} ${
                      isActive ? styles.activeLink : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <button className={styles.btn}>
              <a href="./resume.pdf" className={styles.btnLink}>
                Get Resume
              </a>
            </button>
          </ul>
        </div>

        {/* Mobile menu section */}
        <div className={styles.mobileMenu}>
          <MdMenu className={styles.menuIcon} onClick={toggleMenu} />
        </div>
        {/* Mobile sidebar section */}
      </div>
      {showMenu && (
        <ResponsiveMenu
          showMenu={showMenu}
          onClose={() => setShowMenu(false)}
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
