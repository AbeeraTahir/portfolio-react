import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  linkedin,
  githubHero,
  angellist,
  twitter,
  mail,
  sth,
  bookstore,
  BlogSphere,
  CryptoTrackr,
} from "../assets";

import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiWellfound } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialMediaIcons = [
  {
    id: 1,
    name: "Linkedin",
    icon: <FaLinkedinIn size={20} />,
    url: "https://www.linkedin.com/in/abeera-tahir/",
  },
  {
    id: 2,
    name: "Github",
    icon: <TbBrandGithubFilled size={20} />,
    url: "https://github.com/AbeeraTahir",
  },
  {
    id: 3,
    name: "Wellfound",
    icon: <SiWellfound size={20} />,
    url: "https://wellfound.com/u/abeera-tahir",
  },
  {
    id: 4,
    name: "Mail",
    icon: <IoMdMail size={20} />,
    url: "mailto:dev.abeeratahir@gmail.com",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "BlogSphere",
    description:
      "BlogSphere is a full-stack blog website that allows users to create, read, update, and delete blog posts, as well as manage comments on those posts. Built with Nextjs, Redux Tooklit, TypeScript and MongoDB, it empowers users to share their thoughts with the world effortlessly, while providing readers with easy access to the valuable content.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: BlogSphere,
    source_code_link: "https://github.com/AbeeraTahir/blog-sphere.git",
    live_link: "https://blog-sphere-one.vercel.app/",
  },
  {
    name: "CryptoTrackr",
    description:
      "CryptoTrackr is a cryptocurrency tracking web application that provides users with real-time updates, statistics, and pricing history of different cryptocurrencies. Built with React, TypeScript, and Redux Toolkit Query, the app offers an intuitive user experience, making it easy to explore and analyze cryptocurrency data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: CryptoTrackr,
    source_code_link: "https://github.com/AbeeraTahir/crypto-trackr.git",
    live_link: "https://glistening-sprite-976d14.netlify.app/",
  },
  {
    name: "Space Travelers' Hub",
    description:
      "A website, built with React and Redux, that works with real live data from the SpaceX API to allow users to book rockets and join selected space missions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sth,
    source_code_link: "https://github.com/AbeeraTahir/Space-Travelers-Hub.git",
    live_link: "https://superb-cucurucho-982ab9.netlify.app/",
  },
];

export { socialMediaIcons, technologies, projects };
