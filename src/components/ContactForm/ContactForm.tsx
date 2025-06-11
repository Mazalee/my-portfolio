"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SendEmailPng from "../../assets/send-email.png";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_9v091ag",
        "template_i2w1rpv",
        formRef.current,
        "XgdHp8oyGjiUCA3jd"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Form section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={styles.formWrapper}
        >
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <h2>Get in Touch</h2>
            <div className={styles.inputSection}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.inputSection}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.inputSection}>
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={4}
              />
            </div>
            <button type="submit" className={styles.button}>
              Send Email
            </button>
          </form>
        </motion.div>

        {/* Image section */}
        <div className={styles.imageWrapper}>
          <Image src={SendEmailPng} alt="send email" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
