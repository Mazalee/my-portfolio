"use client";

import React from "react";
import BannerImg from "../../assets/my_pic2.png";
import Grains from "../../assets/grains.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import styles from "./Banner.module.css";
import { slideUp } from "@/utils/data";

const bgGrains = {
  backgroundImage: `url(${Grains.src})`,
  backgroundPosition: "center",
};

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div style={bgGrains} className={styles.bannerBox}>
          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.imageContainer}
          >
            <Image
              src={BannerImg}
              alt="banner"
              className={styles.bannerImage}
            />
          </motion.div>

          {/* Banner Info */}
          <div className={styles.info}>
            <div className={styles.textWrap}>
              <motion.h1
                variants={slideUp(0.3)}
                initial="initial"
                whileInView="animate"
                className={styles.title}
              >
                I am a Frontend Web Developer
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
                  className={styles.btn}
                >
                  Know more
                </motion.button>
                <motion.button
                  variants={slideUp(0.9)}
                  initial="initial"
                  whileInView="animate"
                  className={styles.secondaryBtn}
                >
                  <FiDownload className={styles.secBtn} />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
