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
  crypto,
  sth,
  bookstore
} from "../assets";

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
    icon: linkedin,
    url: "https://www.linkedin.com/in/abeera-tahir/"
  },
  {
    id: 2,
    name: "Github",
    icon: githubHero,
    url: "https://github.com/AbeeraTahir"
  },
  {
    id: 3,
    name: "Twitter",
    icon: twitter,
    url: "https://twitter.com/AbeeraTahir8"
  },
  {
    id: 4,
    name: "Angelist",
    icon: angellist,
    url: "https://wellfound.com/u/abeera-tahir"
  },
  {
    id: 5,
    name: "Mail",
    icon: mail,
    url: "mailto:abeeratahir2018@gmail.com"
  }
]

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
    name: "Bookstore",
    description:
      "A website built with React, Redux and external API, that allows users to see the list of books, add a book to the list, and remove a book from the list.",
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
    image: bookstore,
    source_code_link: "https://github.com/AbeeraTahir/Bookstore.git",
    live_link: "https://friendly-manatee-6f4f18.netlify.app/"
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
    live_link: "https://superb-cucurucho-982ab9.netlify.app/"
  },
  {
    name: "Crypto Metrics",
    description:
      "A mobile web application , built with React and Redux, that uses CoinStats API to display the list of cryptocurrencies and their market capitalization.",
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
    image: crypto,
    source_code_link: "https://github.com/AbeeraTahir/Crypto-Metrics.git",
    live_link: "https://incandescent-crepe-9d449b.netlify.app/"
  },
];

export { socialMediaIcons, technologies, projects };
