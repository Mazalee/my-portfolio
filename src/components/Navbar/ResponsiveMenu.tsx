"use client";

import { Navlinks } from "@/utils/data";
import Link from "next/link";
import React from "react";
import styles from "./Responsive.module.css";

type ResponsiveMenuProps = {
  showMenu: boolean;
  onClose: () => void;
};

const ResponsiveMenu = ({ showMenu, onClose }: ResponsiveMenuProps) => {
  return (
    <div
      className={`${showMenu ? styles.visibleMenu : styles.hiddenMenu} ${
        styles.menu
      }`}
    >
      <div className={styles.mobileNav}>
        <ul className={styles.navList}>
          {Navlinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.link}
                onClick={onClose}
                className={styles.navLink}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* menu footer section */}
      <div>
        <p>Made with 💖 by Mazalee</p>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
