import { ReactElement } from "react";
import { CiPen } from "react-icons/ci";
import { FaEthernet, FaScrewdriver } from "react-icons/fa";

type NavlinksProps = {
  id: number;
  title: string;
  link: string;
};

type ServicesDataProps = {
  id: number;
  title: string;
  icon: ReactElement;
  link: string;
  desc: string;
  delay: number;
};

type ProjectsDataProps = {
  id: number;
  title: string;
  link: string;
  desc: string;
  img: string;
  delay: number;
};

export const ProjectsData: ProjectsDataProps[] = [
  {
    id: 1,
    title: "Hangman Game",
    link: "#",
    desc: "This is a game project that involves many tricky CSS details and the game logic tested my JavaScript strength",
    img: "/p1.png",
    delay: 0.4,
  },
  {
    id: 2,
    title: "Designo Multipage Website",
    link: "#",
    desc: "This project was built with HTML, CSS, NextJS, TypeScript, and React. It is a very responsive website that has many pages. NextJS was used for routing",
    img: "/p2.png",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Audiophile Website",
    link: "#",
    desc: "This is a large e-commerce website built with  HTML, CSS, NextJS, TypeScript, and React.",
    img: "/p3.png",
    delay: 1.2,
  },
];

export const ServicesData: ServicesDataProps[] = [
  {
    id: 1,
    title: "Web Development",
    icon: <CiPen className="text-3xl" />,
    link: "/services",
    desc: "I develop responsive web apps for different platforms from start to finish",
    delay: 1.2,
  },
  {
    id: 2,
    title: "Network Engineer",
    icon: <FaEthernet className="text-sxl" />,
    link: "#",
    desc: "I install and troubleshoot Wi-Fi networks. I configure all types of routers such as: D-Link, TP-Link, and Mikrotik routers.",
    delay: 1.6,
  },
  {
    id: 3,
    title: "Solar Installer",
    icon: <FaScrewdriver className="text-sxl" />,
    link: "#",
    desc: "Installation and maintenance of solar/inverter systems. Mounting of solar panels on rooftops and other fabricated structures.",
    delay: 2,
  },
];

export const Navlinks: NavlinksProps[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Contact", link: "/contact" },
  { id: 3, title: "Projects", link: "/projects" },
  { id: 4, title: "Services", link: "/services" },
];

export const slideUp = (delay: number) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

export const reveal = (delay: number) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: delay,
      },
    },
  };
};
