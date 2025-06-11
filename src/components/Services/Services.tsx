"use client";

import React from "react";
import RedBg from "../../assets/redbg2.png";
import { FiDownload } from "react-icons/fi";
import { reveal, ServicesData, slideUp } from "@/utils/data";
import { motion } from "framer-motion";
import styles from "./Services.module.css";

const bgStyle = {
  backgroundImage: `url(${RedBg.src})`,
};

const Services = () => {
  return (
    <section className={styles.section} style={bgStyle}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.gridWrap}>
            {/* Services Info */}
            <div className={styles.info}>
              <div className={styles.infoText}>
                <motion.h1
                  variants={slideUp(0.3)}
                  initial="initial"
                  whileInView="animate"
                  className={styles.title}
                >
                  Services
                </motion.h1>
                <motion.p
                  variants={slideUp(0.5)}
                  initial="initial"
                  whileInView="animate"
                  className={styles.description}
                >
                  A dedicated and skilled software engineer with 2–3 years of
                  experience, specializing in frontend development. I develop
                  software for web platforms that align with both business
                  objectives and user needs.
                </motion.p>
                <div className={styles.buttons}>
                  <motion.button
                    variants={slideUp(0.7)}
                    initial="initial"
                    whileInView="animate"
                    className={styles.primaryBtn}
                  >
                    Know more
                  </motion.button>
                  <motion.button
                    variants={slideUp(0.9)}
                    initial="initial"
                    whileInView="animate"
                    className={styles.secondaryBtn}
                  >
                    <FiDownload />
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </div>
            {/* Services Card */}
            <div className={styles.cardsWrapper}>
              <div className={styles.cardsGrid}>
                {ServicesData.map((service) => (
                  <motion.div
                    variants={reveal(service.delay)}
                    initial="initial"
                    whileInView="animate"
                    key={service.id}
                    className={styles.card}
                  >
                    <div className={styles.iconWrapper}>{service.icon}</div>
                    <h1 className={styles.cardTitle}>{service.title}</h1>
                    <p className={styles.cardDesc}>{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
