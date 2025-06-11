"use client";

import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.footerDiv}
        >
          <div className={styles.footerDetails}>
            <h2>Mazalee</h2>
            <p className={styles.footerDetailsP1}>eromondan@gmail.com</p>
            <p className={styles.footerDetailsP2}>copyright © 2022 Mazalee</p>
          </div>

          <div className={styles.socialSection}>
            <div>
              <a href="#">
                <FaLinkedinIn className={styles.socialIcon} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaInstagram className={styles.socialIcon} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaFacebook className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
