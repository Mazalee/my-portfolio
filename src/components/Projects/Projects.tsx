"use client";

import { ProjectsData } from "@/utils/data";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.headingWrapper}
        >
          <p className={styles.headingTop}>Projects</p>
          <p className={styles.headingBg}>Projects</p>
        </motion.div>

        {/* Projects card section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.grid}
        >
          {ProjectsData.map((project) => (
            <div key={project.id} className={styles.card}>
              <picture>
                <img
                  src={project.img}
                  alt={project.title}
                  className={styles.cardImage}
                />
              </picture>
              <div className={styles.cardText}>
                <h1>{project.title}</h1>
                <p className={styles.cardDesc}>{project.desc}</p>
              </div>
              {/* hidden button section */}
              <div className={styles.cardActions}>
                <button className={styles.cardBtn}>Live</button>
                <button className={styles.viewCodeBtn}>View Code</button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
