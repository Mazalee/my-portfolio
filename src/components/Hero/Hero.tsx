"use client";

import React from "react";
import HeroImg from "../../assets/my_pic2.png";
import Circle from "../../assets/red.png";
import Wall from "../../assets/wall.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import styles from "./Hero.module.css";
import { slideUp } from "@/utils/data";

const wallBackground = {
  backgroundImage: `url(${Wall.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <section style={wallBackground} className={styles.heroSection}>
      <div className={styles.gradientOverlay}>
        <div className={styles.container}>
          {/* Brand Info */}
          <div className={styles.brandInfo}>
            <div className={styles.textWrap}>
              <motion.p
                variants={slideUp(0.3)}
                initial="initial"
                animate="animate"
              >
                Hello, I am
              </motion.p>
              <motion.p
                variants={slideUp(0.5)}
                initial="initial"
                animate="animate"
                className={styles.nameText}
              >
                Aikhuegbe Daniel
              </motion.p>
              <motion.p
                variants={slideUp(0.7)}
                initial="initial"
                animate="animate"
              >
                A dedicated and skilled software engineer with 2–3 years of
                experience, specializing in frontend development. I develop
                software for web platforms that align with both business
                objectives and user needs.
              </motion.p>
              <motion.button
                variants={slideUp(0.9)}
                initial="initial"
                animate="animate"
                className={styles.btn}
              >
                Know More
              </motion.button>

              {/* Stats Section */}
              <motion.div
                variants={slideUp(1.1)}
                initial="initial"
                animate="animate"
                className={styles.statsCard}
              >
                <div className={styles.statItem}>
                  <p>
                    <CountUp start={0} end={3} suffix="+" delay={1.4} />
                  </p>
                  <p>Experience</p>
                </div>
                <div className={styles.statItem}>
                  <p>
                    <CountUp start={0} end={40} suffix="+" delay={1.4} />
                  </p>
                  <p>Projects</p>
                </div>
                <div className={styles.statItem}>
                  <p>
                    <CountUp start={0} end={5} suffix="+" delay={1.4} />
                  </p>
                  <p>Clients</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.heroImageWrapper}
          >
            <div className={styles.heroImageBox}>
              <Image src={Circle} alt="circle" className={styles.spinCircle} />
              <Image src={HeroImg} alt="hero" className={styles.heroImage} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
